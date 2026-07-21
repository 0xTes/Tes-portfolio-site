# Teslim Digital

**AI & Automation • Intelligent Systems • Strategic Websites • Digital Transformation**

Teslim Digital is a digital consultancy focused on helping businesses use technology more intelligently.

The project represents a modern consultancy website built to communicate business outcomes—not simply technical capabilities. Its purpose is to present Teslim Digital as a partner for businesses seeking better systems, more effective digital experiences, and practical technology-led transformation.

The website is designed around four core areas:

* **AI & Automation**
* **Intelligent Systems**
* **Strategic Websites**
* **Digital Transformation**

Rather than presenting technology as an end in itself, Teslim Digital focuses on how technology can help businesses operate better, communicate more effectively, and create stronger digital foundations.

---

## Project Status

The website is currently in a **production-ready state**.

Completed work includes:

* Motion and interaction consistency
* Accessibility refinements
* Visual polish and UI consistency
* Production readiness auditing
* Branding and SEO readiness
* Image and bundle performance optimization
* Functional, responsive, accessibility, and metadata QA
* Repository cleanup and removal of obsolete WooCommerce-era artifacts

The project has been intentionally kept focused. The codebase and product direction prioritize clarity, maintainability, performance, and a high-quality user experience over unnecessary features.

---

## Technology

The project is built with:

* **React 19**
* **Vite 8**
* **Tailwind CSS v4**
* **Framer Motion**
* **React Router**
* **React Helmet Async**
* **ESLint**

---

## Core Principles

The project follows a deliberate engineering philosophy:

> **Inspect → Understand → Make the smallest justified change → Validate → Review → Commit → Push**

Development is guided by the following principles:

* Preserve the existing architecture where it is sound.
* Avoid unnecessary rewrites.
* Make focused, targeted changes.
* Keep changes independently reviewable and reversible.
* Avoid scope creep.
* Validate changes before committing.
* Maintain production quality throughout development.

---

## Repository Structure

The primary application code is organized around the following structure:

```text
src/
├── assets/
│   └── branding/
├── components/
├── lib/
├── pages/
├── App.jsx
├── index.css
└── main.jsx

public/
├── favicon.svg
├── og-image.png
├── robots.txt
└── sitemap.xml
```

The exact structure may evolve as the project develops, but changes should remain purposeful and consistent with the existing architecture.

---

## Branding & SEO

The project includes production-ready foundational branding and SEO assets, including:

* Production favicon
* Open Graph image
* Branding assets
* Page title and description
* Canonical URL
* Open Graph metadata
* Twitter metadata
* `robots.txt`
* `sitemap.xml`

The website's metadata is designed to accurately represent Teslim Digital's positioning around AI, automation, intelligent systems, strategic websites, and digital transformation.

---

## Performance

Performance has been treated as a first-class production concern.

Completed optimization work includes:

* Conversion of project images to WebP
* Deferral of below-the-fold project images
* Production bundle analysis
* Removal of unused dependencies
* Removal of unused starter assets
* Validation of production build output

The goal is not optimization for its own sake, but a fast, efficient experience that supports the quality of the overall website.

---

## Quality Assurance

The project has undergone final quality assurance covering:

* Functional smoke testing
* Responsive behavior
* Accessibility
* Production metadata
* Production build output
* Dependency security
* Repository cleanliness

The production build and linting checks must pass before significant changes are committed.

```bash
npm run lint
npm run build
```

Dependency vulnerabilities should also be checked when appropriate:

```bash
npm audit
```

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Git Workflow

The repository uses a focused branch-based workflow.

### `main`

`main` is the canonical stable branch and should represent the latest verified, production-ready Teslim Digital website.

### Feature branches

Future work should be isolated into focused branches, for example:

```text
feature/deployment
feature/custom-domain
feature/seo
feature/performance
```

A feature branch should represent a clear, independently reviewable objective.

### Development workflow

```text
Inspect
  ↓
Understand
  ↓
Make the smallest justified change
  ↓
Validate
  ↓
Review
  ↓
Commit
  ↓
Push
```

Branches should not be created, merged, renamed, or deleted casually. Repository history should be preserved deliberately, and obsolete branches should only be removed after their history and purpose have been verified.

---

## Project Direction

Teslim Digital is being developed as a focused digital consultancy platform.

The project direction is centered on:

* Practical AI and automation
* Intelligent business systems
* Strategic digital experiences
* High-quality websites
* Digital transformation
* Clear communication of business value

The website should continue to communicate confidence through clarity, quality, restraint, and useful technology—not through exaggerated claims or unnecessary complexity.

---

## License

This project is proprietary.

All rights reserved unless otherwise stated.
