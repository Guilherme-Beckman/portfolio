# Portfolio Project Research Specification

> **Purpose:** Reusable reference for an AI agent that analyzes GitHub repositories and produces data to populate new portfolio entries. This document describes the exact schema, file structure, and i18n conventions used in this portfolio codebase.

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [ProjectCard Schema (Listing Page)](#2-projectcard-schema-listing-page)
3. [MoreAbout Schema (Detail Page)](#3-moreabout-schema-detail-page)
4. [i18n Structure Rules](#4-i18n-structure-rules)
5. [GitHub Repository Research Checklist](#5-github-repository-research-checklist)
6. [Standard Output Format](#6-standard-output-format)

---

## 1. Architecture Overview

### Data Storage Pattern

- **No external data files.** All project data is hardcoded inline in page components and i18n translation JSON files.
- **Folder-per-project:** Each project is a Next.js App Router page at `portfolio/src/app/projects/<slug>/page.tsx`.
- **No dynamic listing:** The projects listing page (`portfolio/src/app/projects/page.tsx`) manually renders each `<ProjectCard>` — there is no loop over a data array.

### Two Layers Per Project

| Layer | File | Component | Purpose |
|-------|------|-----------|---------|
| **Listing card** | `portfolio/src/app/projects/page.tsx` | `<ProjectCard>` | Thumbnail card shown on the projects grid |
| **Detail page** | `portfolio/src/app/projects/<slug>/page.tsx` | `<MoreAbout>` | Full project page with overview, demo, stats, timeline |

### Key Source Files

| File | Role |
|------|------|
| `portfolio/src/app/components/projects/project-card/project-card.tsx` | `ProjectCardProps` interface |
| `portfolio/src/app/components/projects/more-about/more-about.tsx` | `MoreAboutProps` interface |
| `portfolio/src/app/components/projects/more-about/nav-project/nav-project.tsx` | `NavProjectProps` interface |
| `portfolio/src/app/components/projects/more-about/badge/badge.tsx` | `BadgeProps` interface |
| `portfolio/src/app/components/projects/more-about/demo/demo.tsx` | `DemoProps` / `Slide` type |
| `portfolio/src/app/components/projects/more-about/technical-specifications/technical-specifications.tsx` | `TechnicalSpecificationsProps` / `TechItem` |
| `portfolio/src/app/components/projects/more-about/project-statistics/project-statistics.tsx` | `ProjectStatisticsProps` |
| `portfolio/src/app/components/projects/more-about/development-timeline/development-timeline.tsx` | `DevelopmentTimelineProps` / `TimelineEvent` |
| `portfolio/messages/en.json` | English translations |
| `portfolio/messages/pt.json` | Portuguese translations |

---

## 2. ProjectCard Schema (Listing Page)

Defined in `project-card.tsx`. Each card is rendered manually with inline props in `portfolio/src/app/projects/page.tsx`.

### ProjectCardProps

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | Yes | Display name. Typically from `t("Projects.<Key>.title")` |
| `description` | `string` | Yes | Short summary. Typically from `t("Projects.<Key>.description")` |
| `image` | `string` | Yes | URL or path to project thumbnail/icon. Used as both `<Image src>` and CSS `backgroundImage` |
| `tags` | `Tag[]` | Yes | Technology tags shown below description |
| `demoLink` | `string` | Yes | Relative path to detail page (e.g., `"projects/mysell"`) |
| `codeLink` | `string` | Yes | Full URL to GitHub repository |

### Tag

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `string` | Yes | Technology display name (e.g., `"Python"`, `"Spring Boot"`) |
| `icon` | `string` | Yes | Path to SVG icon in `/icons/skills/` (e.g., `"/icons/skills/python-svgrepo-com.svg"`) |

### Conventions

- Icons are SVGs stored in `public/icons/skills/`. Naming pattern: `<name>-svgrepo-com.svg` (most) or `<name>.svg`.
- Remote images are hosted at `https://guilherme-beckman.github.io/portfolio-assets/`.
- `demoLink` is a relative path (no leading `/`), e.g., `"projects/face-recognition"`.
- `codeLink` is an absolute GitHub URL.

---

## 3. MoreAbout Schema (Detail Page)

Defined in `more-about.tsx`. Each project detail page passes all props inline to `<MoreAbout>`.

### MoreAboutProps

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `navProps` | `NavProjectProps` | No | Navigation bar with GitHub and live demo links |
| `mainImageProps` | `MainImageProjectProps` | No | Hero image for the project |
| `title` | `string` | Yes | Project title. From `t("ProjectPage.<Key>.title")` |
| `subtitle` | `string` | Yes | Project subtitle. From `t("ProjectPage.<Key>.subtitle")` |
| `badges` | `BadgeProps[]` | Yes | Category badges (e.g., "Mobile", "Web", "API") |
| `description` | `string` | Yes | Full project description. From `t("ProjectPage.<Key>.description")` |
| `features` | `string[]` | Yes | List of key features. Derived from `t("ProjectPage.<Key>.features")` split by `";"` |
| `technicalSpecifications` | `TechnicalSpecificationsProps` | Yes | Tech stack grouped by category |
| `projectStatistics` | `ProjectStatisticsProps` | Yes | Key metrics displayed as label/value pairs |
| `developmentTimeline` | `DevelopmentTimelineProps` | Yes | Chronological development milestones |
| `demo` | `DemoProps` | Yes | Image/video carousel slides |

### NavProjectProps

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `gitHubUrl` | `string` | No | Full URL to GitHub repository |
| `liveDemoUrl` | `string` | No | Full URL to live demo |

### MainImageProjectProps

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | `string` | No | Image URL. Falls back to `"/falback.png"` |
| `alt` | `string` | No | Alt text. Falls back to `"Project Image"` |

### BadgeProps

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `string` | Yes | Badge label (e.g., `"Mobile"`, `"Web"`, `"API"`, `"IoT"`, `"Infrastructure"`) |
| `color` | `string` | Yes | CSS color value (e.g., `"red"`, `"blue"`, `"cyan"`, `"green"`, `"purple"`) |

### TechnicalSpecificationsProps

All fields are optional arrays of `TechItem`. Only non-empty categories are rendered.

| Field | Type | Description |
|-------|------|-------------|
| `frontend` | `TechItem[]` | Frontend technologies |
| `backend` | `TechItem[]` | Backend technologies |
| `database` | `TechItem[]` | Database technologies |
| `authentication` | `TechItem[]` | Authentication methods |
| `hosting` | `TechItem[]` | Hosting/deployment platforms |
| `performance` | `TechItem[]` | Performance optimizations |

### TechItem

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `string` | Yes | Technology name |
| `iconUrl` | `string` | Yes | Path to SVG icon (can be empty string `""` if no icon available) |

### ProjectStatisticsProps

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `statistics` | `{ label: string; value: string }[]` | Yes | Array of label/value metric pairs |

- `label`: Metric name, typically from i18n (e.g., `t("statistics.activeUsers")`)
- `value`: Display string (e.g., `"1"`, `"99.9%"`, `"95/100"`, `"3"`, `"Planning phase"`)

### DevelopmentTimelineProps

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `events` | `TimelineEvent[]` | Yes | Ordered array of timeline milestones |

### TimelineEvent

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `date` | `string` | Yes | Date string (e.g., `"Mar 2025"`, `"Jun 2025"`) |
| `title` | `string` | Yes | Event title, typically from i18n |
| `description` | `string` | No | Event description, typically from i18n |

### DemoProps

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slides` | `Slide[]` | Yes | Array of carousel slides |

### Slide

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | Yes | Slide title, from i18n `t("demo.<key>")` |
| `type` | `"image" \| "video"` | Yes | Media type |
| `src` | `string` | Yes | URL to media file |
| `alt` | `string` | No | Alt text (used for images only) |

- Videos and images are hosted externally at `https://guilherme-beckman.github.io/portfolio-assets/<project-slug>/videos/` and `.../images/`.

---

## 4. i18n Structure Rules

### File Locations

- `portfolio/messages/en.json` — English (default locale)
- `portfolio/messages/pt.json` — Portuguese
- Both files must be **structurally identical** (same keys, different values).

### Project Key Naming

- Project keys use **PascalCase** identifiers: `MySell`, `BirdPantanal`, `FaceRecognition`, `LiadsServer`, `IoTSchoolBell`, `OrderManager`.
- The key does not need to match the URL slug (e.g., key `BirdPantanal` → slug `birds-pantanal`).

### Listing Page Keys — `Projects.<ProjectKey>.*`

```json
{
  "Projects": {
    "<ProjectKey>": {
      "title": "Project Display Name",
      "description": "Short summary for the listing card"
    }
  }
}
```

**Required keys:** `title`, `description`

### Detail Page Keys — `ProjectPage.<ProjectKey>.*`

```json
{
  "ProjectPage": {
    "<ProjectKey>": {
      "title": "Full Title",
      "subtitle": "Tagline or subtitle",
      "description": "Full project description paragraph",
      "features": "Feature 1; Feature 2; Feature 3",
      "demo": {
        "<slideKey>": "Slide Title"
      },
      "statistics": {
        "<statKey>": "Statistic Label"
      },
      "timeline": {
        "<eventTitleKey>": "Event Title",
        "<eventDescKey>": "Event Description"
      }
    }
  }
}
```

**Required keys:** `title`, `subtitle`, `description`, `features`
**Required sub-objects:** `demo`, `statistics`, `timeline` (contents vary per project)

### Features Format

Features are stored as a **single semicolon-separated string** in i18n, then split at runtime:

```typescript
const features = t("features").split(";").map((f) => f.trim());
```

### Demo Key Naming

Demo keys use **camelCase** and tend to describe the content shown (e.g., `"dashboard"`, `"loginRaw"`, `"systemDesign"`, `"infrastructureDiagram"`).

### Statistics/Timeline Key Naming

Statistics and timeline keys also use **camelCase** (e.g., `"activeUsers"`, `"uptime"`, `"projectStart"`, `"initialPlanning"`).

### Component-Level UI Keys (Static — Do Not Modify)

These keys translate static UI labels and do not change per project:

| Namespace | Keys |
|-----------|------|
| `ProjectCard` | `moreInfo`, `code` |
| `NavProject` | `backToProjects`, `github`, `liveDemo` |
| `MoreAbout` | `projectOverview` |
| `KeyFeatures` | `keyFeatures` |
| `TechnicalSpecifications` | `technicalSpecifications`, `frontend`, `backend`, `database`, `authentication`, `hosting`, `performance` |
| `ProjectStatistics` | `projectStatistics` |
| `DevelopmentTimeline` | `developmentTimeline` |

---

## 5. GitHub Repository Research Checklist

When analyzing a GitHub repository to populate a new portfolio entry, extract the following:

### From Repository Metadata

- [ ] Repository name and description → `title`, `description`
- [ ] Primary language and all languages used → `tags`, `technicalSpecifications`
- [ ] Repository URL → `codeLink`, `navProps.gitHubUrl`
- [ ] Live demo URL (from repo description, homepage field, or README) → `navProps.liveDemoUrl`
- [ ] Topics/tags → additional context for `badges` and `tags`

### From README and Documentation

- [ ] Project purpose/summary → `description` (detail page, both en and pt)
- [ ] Feature list → `features` (semicolon-separated string)
- [ ] Architecture description → `badges` categories, `technicalSpecifications`
- [ ] Screenshots or demo media URLs → `demo.slides`
- [ ] Installation/deployment info → `technicalSpecifications.hosting`

### From Code Analysis

- [ ] Package manager files (`package.json`, `pom.xml`, `build.gradle`, `requirements.txt`, `go.mod`, `Cargo.toml`) → `tags`, `technicalSpecifications`
- [ ] Framework detection → appropriate `technicalSpecifications` category
- [ ] Database usage (connection strings, ORM config, migration files) → `technicalSpecifications.database`
- [ ] Authentication libraries → `technicalSpecifications.authentication`
- [ ] Docker/deployment files → `technicalSpecifications.hosting`
- [ ] Performance tooling (caching, CDN, optimization) → `technicalSpecifications.performance`

### From Git History

- [ ] First commit date → `developmentTimeline.events[0].date`
- [ ] Major milestones (releases, tags, significant commits) → `developmentTimeline.events`
- [ ] Number of contributors → `projectStatistics`
- [ ] Commit frequency/activity level → `projectStatistics`

### From External Sources

- [ ] Project screenshots/demo videos → `demo.slides`, `mainImageProps`
- [ ] Project favicon or logo → `image` (listing card), `mainImageProps.url`

### Derived / Inferred

- [ ] Project category badges → `badges` (choose from: Mobile, Web, API, IoT, Infrastructure, Desktop, CLI, Library)
- [ ] Badge colors → Pick from: `"red"`, `"blue"`, `"cyan"`, `"green"`, `"purple"`, `"orange"`, `"yellow"`
- [ ] URL slug → lowercase-kebab-case of project name
- [ ] i18n PascalCase key → derived from project name

---

## 6. Standard Output Format

### Project Profile (Human-Readable)

```
# Project: <Project Name>

## Identity
- i18n Key: <PascalCase>
- URL Slug: <kebab-case>
- GitHub URL: <url>
- Live Demo URL: <url or "none">
- Thumbnail Image: <url or path>
- Main Image: <url or path>

## Listing Card
- Title (EN): <title>
- Title (PT): <title>
- Description (EN): <1-2 sentence summary>
- Description (PT): <1-2 sentence summary>
- Tags: <Name> (<icon path>), ...

## Detail Page
- Subtitle (EN): <tagline>
- Subtitle (PT): <tagline>
- Description (EN): <full paragraph>
- Description (PT): <full paragraph>
- Badges: <Name> (<color>), ...
- Features (EN): <semicolon-separated list>
- Features (PT): <semicolon-separated list>

## Technical Specifications
- Frontend: <Name> (<icon path>), ...
- Backend: <Name> (<icon path>), ...
- Database: <Name> (<icon path>), ...
- Authentication: <Name> (<icon path>), ...
- Hosting: <Name> (<icon path>), ...
- Performance: <Name> (<icon path>), ...

## Statistics
- <Label EN> / <Label PT>: <value>
- ...

## Timeline
- <Date>: <Title EN> / <Title PT> — <Description EN> / <Description PT>
- ...

## Demo Slides
- <Key>: <Title EN> / <Title PT> | type: <image|video> | src: <url> | alt: <alt text>
- ...
```

### i18n Patch Format

When generating translation entries, output them as JSON fragments ready to merge into `en.json` and `pt.json`:

**en.json additions:**

```json
{
  "Projects": {
    "<ProjectKey>": {
      "title": "...",
      "description": "..."
    }
  },
  "ProjectPage": {
    "<ProjectKey>": {
      "title": "...",
      "subtitle": "...",
      "description": "...",
      "features": "Feature 1; Feature 2; Feature 3",
      "demo": {
        "<slideKey>": "Slide Title"
      },
      "statistics": {
        "<statKey>": "Stat Label"
      },
      "timeline": {
        "<eventKey>": "Event Text"
      }
    }
  }
}
```

**pt.json additions:** (same structure, Portuguese values)

### Page Component Template

```tsx
import { MoreAbout } from "@/app/components/projects/more-about/more-about";
import { useTranslations } from "next-intl";

export default function <ComponentName>() {
  const t = useTranslations("ProjectPage.<ProjectKey>");

  const featuresRaw = t("features");
  const features = featuresRaw.split(";").map((f) => f.trim());

  return (
    <div>
      <MoreAbout
        navProps={{
          gitHubUrl: "<github-url>",
          liveDemoUrl: "<live-demo-url>",  // omit if none
        }}
        mainImageProps={{
          url: "<image-url>",
          alt: t("title"),
        }}
        title={t("title")}
        subtitle={t("subtitle")}
        badges={[
          { name: "<Category>", color: "<color>" },
        ]}
        description={t("description")}
        features={features}
        technicalSpecifications={{
          frontend: [
            { name: "<Tech>", iconUrl: "/icons/skills/<icon>.svg" },
          ],
          backend: [
            { name: "<Tech>", iconUrl: "/icons/skills/<icon>.svg" },
          ],
          // ... other categories as needed
        }}
        projectStatistics={{
          statistics: [
            { label: t("statistics.<key>"), value: "<value>" },
          ],
        }}
        developmentTimeline={{
          events: [
            {
              date: "<Mon YYYY>",
              title: t("timeline.<titleKey>"),
              description: t("timeline.<descKey>"),
            },
          ],
        }}
        demo={{
          slides: [
            {
              title: t("demo.<key>"),
              type: "<image|video>",
              src: "<media-url>",
              alt: t("demo.<key>") + " Preview",  // for images only
            },
          ],
        }}
      />
    </div>
  );
}
```

### Listing Card Entry Template

Add inside the `<div className={styles.projectsContainer}>` in `portfolio/src/app/projects/page.tsx`:

```tsx
<div className={styles.projectCard}>
  <SlideIn fromX={-50}> {/* alternate -50 and 50 */}
    <ProjectCard
      title={t("<ProjectKey>.title")}
      description={t("<ProjectKey>.description")}
      image="<thumbnail-url-or-path>"
      tags={[
        { name: "<Tech>", icon: "/icons/skills/<icon>.svg" },
      ]}
      demoLink="projects/<slug>"
      codeLink="<github-url>"
    />
  </SlideIn>
</div>
```

**Note:** `SlideIn` direction alternates between `fromX={-50}` (odd cards, slide from left) and `fromX={50}` (even cards, slide from right).

---

## Appendix: Existing Projects Reference

| i18n Key | URL Slug | GitHub URL |
|----------|----------|------------|
| `FaceRecognition` | `face-recognition` | `https://github.com/Guilherme-Beckman/reconhecimento-facial-ifms` |
| `IoTSchoolBell` | `iot-project` | `https://github.com/Gaby0805/Arduino-Rirau-ipyra` |
| `LiadsServer` | `liads-server` | `https://github.com/LIADS-IFMS` |
| `MySell` | `mysell` | `https://github.com/Guilherme-Beckman/mysell` |
| `BirdPantanal` | `birds-pantanal` | `https://github.com/Guilherme-Beckman/bird-pantanal-photo-gallery` |
| `OrderManager` | `order-manager` | `https://github.com/Guilherme-Beckman/order-manager` |

### Existing Icon Inventory (public/icons/skills/)

Common icons already available in the project (use these before adding new ones):

- **Languages:** `python-svgrepo-com.svg`, `java-svgrepo-com.svg`, `golang-svgrepo-com.svg`, `typescript.svg`, `javascript-svgrepo-com.svg`, `php-svgrepo-com.svg`
- **Frontend:** `angular-svgrepo-com.svg`, `nextjs-fill-svgrepo-com.svg`, `html-5-svgrepo-com.svg`, `css-3-svgrepo-com.svg`, `ionic-svgrepo-com.svg`
- **Backend:** `spring-svgrepo-com.svg`, `fastapi-svgrepo-com.svg`, `laravel-svgrepo-com.svg`
- **Databases:** `postgresql-svgrepo-com.svg`, `mongodb-svgrepo-com.svg`, `sqllite-svgrepo-com.svg`, `redis-svgrepo-com.svg`, `mysql-svgrepo-com.svg`
- **DevOps:** `docker-svgrepo-com.svg`, `nginx-svgrepo-com.svg`, `aws-svgrepo-com.svg`, `ubuntu-svgrepo-com.svg`, `consul-svgrepo-com.svg`, `kong-icon-svgrepo-com.svg`, `vagrant-svgrepo-com.svg`
- **Tools:** `git-svgrepo-com.svg`, `github-svgrepo-com.svg`, `postman-icon-svgrepo-com.svg`, `shell-svgrepo-com.svg`
- **Other:** `rabbitmq-icon-svgrepo-com.svg`, `arduino-svgrepo-com.svg`, `wifi-svgrepo-com.svg`, `microservice-icon.svg`, `face-id-svgrepo-com.svg`, `web-cam-svgrepo-com.svg`, `mobile-svgrepo-com.svg`, `SQLAlchemy.svg`
