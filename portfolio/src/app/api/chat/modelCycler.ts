class ModelState {
  name: string;
  cooldownUntil: number | null = null;
  requestCount = 0;

  constructor(name: string) {
    this.name = name;
  }

  isAvailable(): boolean {
    if (this.cooldownUntil === null) return true;
    return Date.now() >= this.cooldownUntil;
  }

  setCooldown(seconds: number): void {
    this.cooldownUntil = Date.now() + seconds * 1000;
  }

  timeUntilAvailable(): number {
    if (this.cooldownUntil === null) return 0;
    return Math.max(0, Math.ceil((this.cooldownUntil - Date.now()) / 1000));
  }
}

class ModelCycler {
  private models: ModelState[];
  private currentIndex = 0;

  constructor(primaryModel: string, fallbackModels: string[]) {
    const allNames = [primaryModel];
    for (const name of fallbackModels) {
      if (name && !allNames.includes(name)) {
        allNames.push(name);
      }
    }
    this.models = allNames.map((name) => new ModelState(name));
    console.log(
      `ModelCycler initialized with ${this.models.length} model(s):`,
      this.models.map((m) => m.name).join(", ")
    );
  }

  getAvailableModel(): string | null {
    if (this.models[this.currentIndex].isAvailable()) {
      return this.models[this.currentIndex].name;
    }

    for (let i = 0; i < this.models.length; i++) {
      const idx = (this.currentIndex + 1 + i) % this.models.length;
      if (this.models[idx].isAvailable()) {
        this.currentIndex = idx;
        return this.models[idx].name;
      }
    }

    return null;
  }

  markRateLimited(modelName: string, delaySec?: number): void {
    const model = this.models.find((m) => m.name === modelName);
    if (model) {
      model.setCooldown(delaySec ?? 30);
      console.log(
        `Model ${modelName} rate-limited, cooldown ${delaySec ?? 30}s`
      );
    }
  }

  recordSuccess(modelName: string): void {
    const model = this.models.find((m) => m.name === modelName);
    if (model) model.requestCount++;
  }

  getShortestCooldown(): number {
    return Math.min(...this.models.map((m) => m.timeUntilAvailable()));
  }
}

function isRateLimitError(error: unknown): boolean {
  const errorStr = String(error).toLowerCase();
  const indicators = [
    "429",
    "resource_exhausted",
    "rate limit",
    "ratelimit",
    "quota exceeded",
    "too many requests",
    "requests per minute",
    "rpm limit",
  ];
  return indicators.some((indicator) => errorStr.includes(indicator));
}

function extractRetryDelay(errorMessage: string): number | null {
  const patterns = [
    /retryDelay["\s:]+(\d+)s/i,
    /retry.?after["\s:]+(\d+)/i,
    /(\d+)\s*seconds?/i,
    /wait["\s:]+(\d+)/i,
  ];

  for (const pattern of patterns) {
    const match = errorMessage.match(pattern);
    if (match) {
      const delay = parseInt(match[1], 10);
      if (delay >= 1 && delay <= 300) return delay;
    }
  }

  return null;
}

const primaryModel = process.env.GEMINI_MODEL || "gemini-3-flash-preview";
const fallbackModels = (
  process.env.GEMINI_FALLBACK_MODELS || "gemini-2.0-flash,gemini-2.5-flash-lite"
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const modelCycler = new ModelCycler(primaryModel, fallbackModels);

export { modelCycler, isRateLimitError, extractRetryDelay };
