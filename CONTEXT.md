# Project Context for Agents

Last updated: 2026-06-28  
Current release: **Version 1.0.0**

## Purpose

This repository is Jagadeesha C's personal static portfolio and collection of small web experiments. It is hosted directly from the repository on GitHub Pages at <https://jagadeeshshetty.github.io/>.

Read this file before changing the project. It records the current architecture, design decisions, deployment behavior, and known constraints so future agents do not need to rediscover them.

## Technology and deployment

- Plain HTML, CSS, and JavaScript; there is no site generator, framework, package build, or root package manager configuration.
- GitHub Pages serves the repository root from the `master` branch.
- The production URL is <https://jagadeeshshetty.github.io/>.
- Root-relative assumptions should be avoided. Use paths relative to the current page so the site continues to work locally and on GitHub Pages.
- CSS and JavaScript references in `index.html` use query-string versions for cache busting. Increment both versions whenever their files change materially.
- GitHub Pages/CDN and browser caches may take several minutes to refresh. Compare deployed assets with cache-busting query parameters when diagnosing differences.

## Current homepage

The homepage is implemented by:

- `index.html` — semantic page structure and project links.
- `style.css` — responsive paper interface, teak tabletop background, cards, accessibility states, and navigation transition.
- `script.js` — localized date/time and project-link transition.
- `image-2.jpeg` — portrait used in the header.
- `assets/images/teak-table-texture.jpg` — generated, optimized teak background texture.

### Design direction

The site deliberately uses a skeuomorphic desk-and-paper design rather than the older macOS window style:

- A realistic teak tabletop surrounds a warm paper sheet.
- The sheet uses notebook rules, layered paper edges, subtle grain, and serif typography.
- Project links resemble individual paper cards.
- Desktop uses a two-column project grid. At `680px` and below it becomes one column and reduces decorative layers.
- At `440px` and below headings and footer content stack vertically.

Preserve the tactile paper aesthetic unless the user explicitly requests a redesign. Keep textures subtle enough that text remains readable.

### Navigation interaction

Clicking a `.project-card` applies `body.is-leaving`. The paper quickly blurs, fades, and slightly scales for 160 ms, then JavaScript navigates after 170 ms.

Important behavior:

- Ctrl/Cmd/Shift/Alt-click is not intercepted.
- Non-primary clicks are not intercepted.
- Users who prefer reduced motion navigate without the transition.
- `isNavigating` prevents duplicate activation.
- Keep the transition short. Earlier full-page zoom and 3D page-turn experiments caused visible stuttering because large textured surfaces were being scaled.

## Homepage destinations

| Card | Destination | Purpose |
| --- | --- | --- |
| JavaScript | `js/` | JavaScript notes and browser experiments |
| Tech comics | `tcomic/` | Coding-related comic image collection |
| Software QA | `qa/README.html` | Testing notes and resources |
| Login UI | `test/login/` | Static animated login-form study |
| Date and time | `time/` | Live clock experiment |
| Paintings | `painting/` | Personal artwork gallery |

The résumé is available through `profile/`, and its PDF is `profile/Resume.pdf`. The repository also contains a legacy weather experiment under `weather/`, but it is not currently linked from the homepage.

## Subprojects and limitations

- Each subproject owns its HTML/CSS/JavaScript and is not yet visually unified with the homepage.
- `test/login/` is a visual static demo. GitHub Pages cannot process its form POST as a real authentication backend.
- `weather/` depends on geolocation, old jQuery, and a legacy external weather endpoint. Verify the endpoint before presenting it as functional.
- `profile/index.html` is primarily a PDF embed and may need an HTML fallback in a future accessibility pass.
- Painting source images are large. Prefer thumbnails/WebP or AVIF if optimizing that gallery.
- Comic and painting images need meaningful `alt` text and lazy loading in a future accessibility pass.

## Coding conventions

- Keep the root site dependency-free unless the user requests otherwise.
- Prefer semantic HTML and native browser APIs.
- Preserve visible keyboard focus states.
- Respect `prefers-reduced-motion` for all new motion.
- Avoid animating large filters, shadows, or large scaled surfaces; they have already caused performance problems.
- Use responsive sizing (`clamp`, `min`, grid, and media queries) instead of fixed page dimensions.
- Optimize new raster assets before committing them.
- Do not modify unrelated legacy subprojects during homepage-only work.
- Check `git status` before editing because the user may have staged or committed changes between turns.

## Verification checklist

There is currently no automated test suite. For homepage changes:

1. Run `node --check script.js`.
2. Run `git diff --check`.
3. Test at approximately 320px, 680px, and desktop widths.
4. Test keyboard focus and project-card activation.
5. Test with reduced motion enabled.
6. Confirm every relative link works on GitHub Pages.
7. After deployment, verify that live HTML/CSS/JS match local files and account for the GitHub Pages cache.

## Suggested next improvements

- Add an accessible HTML résumé page around the PDF.
- Optimize and lazy-load gallery images.
- Add a custom `404.html`, favicon, social preview metadata, sitemap, and robots file.
- Add automated HTML, link, accessibility, and Lighthouse checks through GitHub Actions.
- Standardize navigation and visual identity across subprojects.

## Release documentation

The public release history and project overview live in `README.md`. Update both `README.md` and this context file when architecture, deployment, or major interaction behavior changes.
