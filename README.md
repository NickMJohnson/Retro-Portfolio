# Retro Portfolio

My personal portfolio site — a single-page retro/cyber-themed build with featured project spotlights, an AI chat assistant grounded in my background, a contact form, and an animated hero. Live at **[nickjohnson.site](https://nickjohnson.site)**.

## Stack

- **Frontend:** React 18 + TypeScript + Vite, Tailwind CSS, shadcn/ui, Framer Motion, React Router
- **API:** Vercel serverless functions (TypeScript) in `/api`
- **AI chat:** Anthropic Claude (`claude-haiku-4-5`) via `@anthropic-ai/sdk`
- **Email:** Resend (verified sender on `nickjohnson.site`)
- **Hosting / analytics:** Vercel + `@vercel/analytics`
- **Tests:** Vitest (unit) + Playwright (e2e)

## Architecture

Single-page layout composed of section components in `src/components/`:

| Section | Source |
| --- | --- |
| Header / nav | `Header.tsx` |
| Hero (typing-glitch name reveal) | `HeroSection.tsx` |
| About + skills | `AboutSection.tsx` |
| Featured spotlights with live iframe previews | `SpotlightSection.tsx` |
| Full project grid with category filter | `ProjectsSection.tsx` |
| Resume timeline | `ResumeSection.tsx` |
| AI chat (Claude-powered) | `ChatSection.tsx` |
| Contact form | `ContactSection.tsx` |

Two serverless endpoints back the interactive pieces:

- `api/chat.ts` — proxies user messages to Claude with a system prompt that encodes my bio, projects, and experience. Also forwards each Q&A to my inbox via Resend.
- `api/contact.ts` — sends contact-form submissions to my inbox with `replyTo` set to the sender.

Client-side, the chat is rate-limited to 5 queries per day via `localStorage`.

## Local development

Requires Node 18+ and [Bun](https://bun.sh) (or npm).

```sh
bun install
bun run dev        # http://localhost:5173
```

The serverless API routes run under `vercel dev`:

```sh
vercel dev
```

Environment variables (required for the API):

```
ANTHROPIC_API_KEY=...
RESEND_API_KEY=...
```

## Scripts

```sh
bun run dev          # Vite dev server
bun run build        # production build
bun run preview      # preview the production build
bun run lint         # eslint
bun run test         # vitest (run once)
bun run test:watch   # vitest watch mode
```

Playwright is configured in `playwright.config.ts`; run with `bunx playwright test`.

## Deploy

Deployed on Vercel. `main` auto-deploys to production; PRs get preview URLs. The `/api` directory is picked up as serverless functions automatically. Custom domain is configured in the Vercel project settings.

## Engineering notes

Selected gotchas I hit while building this are documented in [`notes.md`](./notes.md) — including the Vercel fire-and-forget async bug that made chat notification emails flaky, a CSS `transform` ordering issue that broke the iframe scroll offset, and a `scrollIntoView` call that hijacked the initial page scroll.
