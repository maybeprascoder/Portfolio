# Prasoon Kumar — Portfolio Website

A clean, professional, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Design:** Responsive, mobile-first

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout (SEO, skip-link, BackToTop)
│   ├── page.tsx                    # Homepage
│   ├── globals.css                 # Global styles, animations, print styles
│   ├── robots.ts                   # robots.txt generation
│   ├── sitemap.ts                  # sitemap.xml generation
│   ├── about/page.tsx              # About page
│   ├── projects/
│   │   ├── page.tsx                # Projects listing page
│   │   ├── ProjectFilter.tsx       # Client-side project filter
│   │   └── [slug]/page.tsx         # Individual project detail pages
│   ├── resume/
│   │   ├── page.tsx                # Resume page
│   │   └── PrintButton.tsx         # Client-side print button
│   ├── contact/
│   │   ├── page.tsx                # Contact page
│   │   └── ContactForm.tsx         # Contact form (API-backed, honeypot)
│   └── api/
│       └── contact/route.ts        # Contact form API endpoint
├── components/
│   ├── Navbar.tsx                  # Responsive navigation bar
│   ├── Footer.tsx                  # Site footer
│   ├── BackToTop.tsx               # Scroll-to-top button
│   ├── PageHeader.tsx              # Reusable page header
│   ├── SectionHeading.tsx          # Reusable section heading
│   ├── SkillBadge.tsx              # Skill tag badge
│   ├── ProjectCard.tsx             # Project display card
│   ├── ExperienceCard.tsx          # Work experience card
│   └── ContactCard.tsx             # Contact info card
└── data/
    └── projects.ts                 # Centralized project data
```

## Pages

| Page              | Status   | Description                                      |
| ----------------- | -------- | ------------------------------------------------ |
| Home              | Complete | Hero, about preview, featured projects, skills   |
| About             | Complete | Summary, education, skills grid, values          |
| Projects          | Complete | Project cards with client-side filtering          |
| Project Detail    | Complete | Individual pages with full project descriptions  |
| Resume            | Complete | Experience, education, skills, certifications    |
| Contact           | Complete | API-backed form with validation, info cards      |

## Project Routes

| Route                        | Page                          |
| ---------------------------- | ----------------------------- |
| `/`                          | Homepage                      |
| `/about`                     | About                         |
| `/projects`                  | Projects listing              |
| `/projects/unihive`          | UniHive detail                |
| `/projects/resume-intelligence` | Resume Intelligence detail |
| `/projects/ai-recruitment`   | AI Recruitment detail         |
| `/projects/computer-vision`  | Computer Vision detail        |
| `/resume`                    | Resume                        |
| `/contact`                   | Contact                       |

## Milestone 1 Progress

- [x] Project goals defined
- [x] Target audience identified
- [x] Website examples researched
- [x] Sitemap completed
- [x] Content outline completed
- [x] Wireframes planned
- [x] Website tools and project structure created
- [x] Homepage prototype completed

## Milestone 2 Progress

- [x] About page completed
- [x] Projects page completed
- [x] Resume page completed
- [x] Contact page completed
- [x] Project filtering implemented
- [x] Contact form validation implemented
- [x] Responsive navigation improved
- [x] Mobile and desktop layouts tested
- [x] Basic website content added

## Milestone 3 Progress

- [x] Detailed project descriptions added
- [x] Individual project pages created
- [x] UI animations and hover effects added
- [x] Contact form validation completed
- [x] Contact API route added
- [x] SEO metadata added
- [x] Sitemap and robots file added
- [x] Accessibility reviewed
- [x] Performance improvements completed
- [x] Cross-browser testing completed
- [x] Mobile, tablet, and desktop layouts tested

## Milestone 3 Testing

### Browsers Tested

- Google Chrome (latest)
- Microsoft Edge (latest)
- Firefox (latest)
- Safari-compatible CSS (flexbox, grid, backdrop-blur)

### Screen Sizes Tested

- Mobile: ~375px
- Tablet: ~768px
- Laptop: ~1024px
- Desktop: ~1440px

### Accessibility

- Skip-to-content link added
- Keyboard-navigable menus and forms
- Visible focus rings (focus-visible)
- ARIA attributes on form fields and buttons
- Semantic HTML (main, nav, header, footer, section, article)
- Correct heading hierarchy (one H1 per page)
- Form error messages linked with aria-describedby
- prefers-reduced-motion respected
- Sufficient color contrast (light text on dark backgrounds)

### Issues Found and Fixed

- Navbar now highlights active state for nested project routes
- Focus rings added to all interactive elements
- Honeypot and server-side validation added for spam protection
- Animations disabled when prefers-reduced-motion is set

### Remaining Limitations

- Download Resume button points to `/resume.pdf` (add PDF to `public/`)
- Project GitHub buttons currently lead to the main GitHub profile rather than project-specific repositories
- Contact form validates and simulates a response; connect an email service before relying on it for production messages

## Deploy to Netlify

The included `netlify.toml` configures Netlify to run `npm run build` with Node.js 20. Netlify automatically detects the Next.js runtime, including the `/api/contact` route.

Before deployment:

1. Add the resume file as `public/resume.pdf`.
2. Push the project to GitHub.

In [Netlify](https://app.netlify.com):

1. Select **Add new site** → **Import an existing project**.
2. Choose the GitHub repository.
3. Confirm the build command is `npm run build`.
4. Deploy.
