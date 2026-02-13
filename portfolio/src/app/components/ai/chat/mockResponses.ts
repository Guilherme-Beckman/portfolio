export const MOCK_DELAY_MS = 1500;

const responses: Record<string, string> = {
  about:
    "I'm Guilherme Beckman, a front-end developer passionate about crafting interactive and performant web experiences. I work with React, Next.js, and TypeScript to build modern applications.",
  projects:
    "I've built several projects including portfolio sites, interactive dashboards, and web applications. Check out the Projects section to see them in detail!",
  contact:
    "You can reach me via email or connect with me on LinkedIn and GitHub. Head over to the Contact section for all the links!",
  skills:
    "My core skills include React, Next.js, TypeScript, JavaScript, CSS/SASS, and Node.js. I also have experience with GSAP, Framer Motion, and various other front-end tools.",
  experience:
    "I have professional experience building front-end applications with React and Next.js, working in agile teams, and delivering user-focused solutions.",
  education:
    "I have a background in software engineering and continuously learn through courses, certifications, and hands-on projects.",
  hello:
    "Hello! Welcome to my portfolio. Feel free to ask me anything about my work, skills, or experience!",
  hi: "Hi there! How can I help you? Ask me about my projects, skills, or experience.",
};

export function getMockResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [keyword, response] of Object.entries(responses)) {
    if (lower.includes(keyword)) {
      return response;
    }
  }
  return "Thanks for your message! I'm a mock AI assistant for this portfolio. Try asking about my projects, skills, experience, or education.";
}
