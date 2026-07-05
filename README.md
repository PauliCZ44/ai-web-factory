# AI Web Factory

Config-driven Astro template for fast static websites for small businesses. The goal is to create each new client site by changing content, images, theme, and section order instead of rebuilding the frontend.

## Stack

- Latest Astro static output
- Tailwind CSS 4 through the Vite plugin
- daisyUI 5 themes and components
- Typed site config in `src/content/site.ts`
- Optional vanilla JS enhancements in `src/scripts/enhancements.ts`

## Get Started

```bash
pnpm install
pnpm dev
```

Build the static site:

```bash
pnpm build
pnpm preview
```

## Deployment

This template includes a GitHub Actions pipeline in `.github/workflows/deploy.yml`.

The default free deployment path is GitHub Pages. Push the project to GitHub, enable Pages with **Source: GitHub Actions**, and every push to `main` runs checks, builds the Astro site, and publishes it to the repository Pages URL. The workflow sets Astro `site` and `base` automatically, so assets work for both `username.github.io` repos and project pages like `/ai-web-factory/`.

For Cloudflare Pages, use Cloudflare's Git integration instead of deploying from GitHub Actions. In Cloudflare, create a Pages project, connect the client GitHub repository, set production branch to `main`, use build command `pnpm build`, and set output directory `dist`. Cloudflare then deploys every push to `main` and creates preview deployments for other branches.

## Template Workflow

Make this repository a GitHub template repository, then create one repository per client from it. The client project should mostly change `src/content/site.ts`, images, theme, section order, and deployment settings.

Full operator checklist: [docs/client-project-workflow.md](docs/client-project-workflow.md)

## Creating a Client Site

1. Create a new client repository from this GitHub template.
2. Edit `src/content/site.ts`.
3. Choose a daisyUI theme with `theme`.
4. Set `sections` to control which blocks render and their order.
5. Replace remote demo image URLs with real client photos or files in `public/images`.
6. Deploy with GitHub Pages by default, or enable Cloudflare Pages for a `*.pages.dev` URL.

## Config Surface

The first version supports:

- Company identity: `company`, `tagline`, `description`
- SEO: `seo.title`, `seo.description`
- Contact links: `phone`, `email`, `address`, `social`
- Theme: any daisyUI theme enabled in `src/styles/global.css`
- Theme switcher: enable with `themeSwitcher` in `features`, configure options with `themeOptions`
- Sections: `hero`, `services`, `testimonials`, `gallery`, `galleryCarousel`, `cta`, `contact`
- Enhancements: `stickyNav`, `scrollReveal`, `themeSwitcher`, `parallax`, `lightbox`

`stickyNav`, `scrollReveal`, and `themeSwitcher` are implemented in this first scaffold. The other flags are reserved for the next iteration.

## Factory Principle

Architecture stays stable. AI and operator work should happen mostly in the config: copywriting, service list, SEO text, real images, and theme choice.
