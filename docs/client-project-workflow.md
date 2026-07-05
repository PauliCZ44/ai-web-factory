# Client Project Workflow

Use this checklist whenever the factory template becomes a real customer website.

## 1. Mark This Repo as a Template

From GitHub UI:

1. Open the `ai-web-factory` repository.
2. Go to **Settings**.
3. Enable **Template repository**.

Or with GitHub CLI:

```bash
gh repo edit PauliCZ44/ai-web-factory --template
```

## 2. Create a Client Repository

Recommended model: one GitHub repository per client. It keeps billing, access, deployments, and future ownership simple.

From GitHub UI, click **Use this template** and create a new repository, for example:

```text
client-novak-interiors
client-cafe-luna
client-petr-plumber
```

Or with GitHub CLI:

```bash
gh repo create client-example-business --private --template PauliCZ44/ai-web-factory --clone
cd client-example-business
pnpm install
```

Use `--public` instead of `--private` when the client and project allow it. Public repos can use GitHub Pages for free.

## 3. Convert Template Content to Client Content

Most client work should happen in `src/content/site.ts`.

Change these first:

- `company`, `tagline`, `description`
- `phone`, `email`, `address`, `social`
- `seo.title`, `seo.description`
- `theme` and `themeOptions`
- `sections` order
- `features`
- `hero`, `services`, `testimonials`, `gallery`, `galleryCarousel`, `cta`, `contact`

For production client sites, usually remove `themeSwitcher` from `features` after choosing the final theme. Keep it enabled during design exploration if useful.

## 4. Replace Images

Put client images in `public/images/`:

```text
public/images/hero.jpg
public/images/project-01.jpg
public/images/project-02.jpg
```

Then reference them from config with root-relative paths:

```ts
image: {
  src: '/images/hero.jpg',
  alt: 'Popis fotky pro SEO a přístupnost'
}
```

Prefer real client photos over stock photos. If client photos are weak, use fewer images and stronger copy rather than filling the page with generic visuals.

## 5. Local Quality Check

Before deployment:

```bash
pnpm check
pnpm build
pnpm dev
```

Check desktop and mobile. At minimum verify:

- no horizontal overflow on mobile
- contact links work
- images load
- SEO title and description are client-specific
- no demo testimonials or placeholder phone/email remain

## 6. Deploy on GitHub Pages

In the client GitHub repository:

1. Go to **Settings** -> **Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main`.

The included workflow builds and deploys automatically. Project Pages URLs usually look like:

```text
https://<github-user>.github.io/<client-repo>/
```

The workflow sets Astro `base` automatically, so assets work under the repository subpath.

## 7. Optional Cloudflare Pages

Use Cloudflare Pages when you want a cleaner free preview URL or when the client domain will later point to Cloudflare.

Create a Cloudflare Pages project, then add these GitHub repository settings.

Repository variables:

```text
DEPLOY_CLOUDFLARE_PAGES=true
CLOUDFLARE_PAGES_PROJECT_NAME=<cloudflare-pages-project-name>
```

Repository secrets:

```text
CLOUDFLARE_ACCOUNT_ID=<account-id>
CLOUDFLARE_API_TOKEN=<pages-edit-token>
```

The deployed free URL will be:

```text
https://<cloudflare-pages-project-name>.pages.dev
```

## 8. Maintenance Rule

Do not fork the architecture for every client. If a client needs a new reusable feature, add it to the factory template first, then use it in that client project.

Good client-specific changes:

- content
- images
- theme
- section order
- simple custom CSS tokens or small visual tweaks

Avoid per-client architecture changes unless the feature should become part of the factory.

For older client sites, update manually only when there is a real reason: bug fix, deployment fix, SEO improvement, or a reusable section the client actually needs.
