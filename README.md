# Jagadeesha C — Portfolio

**Current version: 1.0.0**

A dependency-free personal portfolio and collection of web experiments, software-testing notes, artwork, and learning projects. The website is built with plain HTML, CSS, and JavaScript and hosted on GitHub Pages.

Live site: <https://jagadeeshshetty.github.io/>

## Features

- Responsive skeuomorphic paper interface
- Realistic teak tabletop background
- Paper grain, notebook rules, layered sheets, and tactile project cards
- Localized live date and time
- Fast blur transition when opening projects
- Keyboard-friendly links and visible focus styles
- Reduced-motion support
- Responsive two-column and single-column layouts

## Projects

- JavaScript notes and experiments
- Tech comic gallery
- Software QA resources
- Animated login interface study
- Date and time experiment
- Painting gallery
- Résumé PDF viewer
- Legacy weather experiment

## Project structure

```text
.
├── index.html                 # Portfolio homepage
├── style.css                 # Homepage design and responsive styles
├── script.js                 # Clock and navigation transition
├── CONTEXT.md                # Detailed handoff information for agents
├── assets/images/            # Homepage background assets
├── profile/                  # Résumé
├── js/                       # JavaScript notes and experiments
├── qa/                       # Software QA notes
├── test/login/               # Login UI demonstration
├── time/                     # Date/time experiment
├── painting/                 # Artwork gallery
├── tcomic/                   # Tech comic gallery
└── weather/                  # Legacy weather experiment
```

## Running locally

No installation or build is required. Serve the repository directory with any static HTTP server, for example:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000/>.

Opening `index.html` directly also works for most features, but a local server more closely matches GitHub Pages behavior.

## Deployment

The site deploys from the repository root on the `master` branch through GitHub Pages. Push committed changes to `master`, wait for Pages to finish publishing, and then verify the live site.

The homepage uses query-string versions for CSS and JavaScript cache busting. Increment these values in `index.html` after material asset changes.

## Versioning

This project follows semantic versioning from Version 1 onward:

- Major: substantial redesigns or incompatible structural changes
- Minor: new pages, projects, or significant features
- Patch: fixes, content updates, accessibility improvements, and visual refinements

## Changelog

### 1.0.0 — 2026-06-28

First documented stable release.

#### Added

- Portfolio introduction with portrait, résumé, GitHub, and LinkedIn links
- Responsive selected-work project grid
- Realistic teak tabletop background asset
- Layered paper interface with notebook rules and subtle texture
- Localized live date and time using `Intl.DateTimeFormat`
- Fast blur-and-fade transition for project navigation
- Reduced-motion handling and keyboard focus styles
- Project and agent documentation

#### Changed

- Replaced the original macOS-window presentation with a skeuomorphic paper design
- Reworked the homepage into a clearer personal portfolio
- Improved mobile behavior with single-column layouts and reduced decoration
- Replaced the original manual month-name switch with browser-native date formatting
- Changed the project navigation animation after testing page turns and full-page zooms; the lightweight blur transition is the retained Version 1 behavior

#### Fixed

- Incorrect month mapping in the original date script
- Invalid ordered-list navigation markup
- Missing responsive constraints on the main container
- Missing avatar sizing and stale-asset issues on GitHub Pages
- Duplicate navigation activation during transitions

### Pre-1.0 development

The repository began as a collection of independent static experiments. Over time it gained the JavaScript notes, painting and comic galleries, QA resources, login UI, clock, weather demo, and résumé page. The Version 1 work unified these projects behind a responsive portfolio homepage and established the current paper-on-teak visual direction.

## Maintenance notes

Read [`CONTEXT.md`](CONTEXT.md) before making significant changes. It contains current implementation details, known limitations, performance lessons, and a verification checklist.

## License

See [`LICENSE.txt`](LICENSE.txt).
