# Code-Warriors Team project: Eka Kakablishvili, Mari Begiashvili

Spotify style markup
დიზაინის ფაილი: https://www.figma.com/design/jrlUWJdbxTc2bKd5dpRa5r/10X-markup-exam-project---Spotify?node-id=94-2201&t=9YtEaAuC6ANtHMwX-0

–––– Project Overview ––––
This project is a Spotify web markup clone built using:

- Semantic HTML
- SCSS (Sass architecture)
- Mobile-first responsive approach
- Git workflow with branching strategy

The goal is to follow engineering standards and acceptance criteria defined in the technical assignment.

---

## Project Architecture (Foundation Setup)

Today we completed the technical foundation of the project.

### SCSS Architecture

The project follows modular Sass structure:

- `abstracts/` → variables, mixins, functions
- `base/` → reset, typography, global styles
- `layout/` → layout-related structure (sidebar, header, player, app layout)
- `components/` → reusable UI elements (cards, buttons, chips)

All partials are imported inside `main.scss`.

---

### REM System

We use a 10px-based REM system:

```scss
html {
  font-size: 62.5%;
}
This makes 1rem = 10px.

Responsive Strategy

### Mobile-first approach:

Default styles → Mobile

Tablet breakpoint → 768px

Desktop breakpoint → 1200px

Breakpoints handled via Sass mixins.

###Git Workflow
Branch structure:
1. main → Stable foundation branch
2. develop → Integration branch
3. feature → Feature branches

###Workflow:
1. Work on feature branch
2. Merge into develop
3. After full integration, merge develop → main
Main branch is protected via pull request rule.
```

## HTML Structure

The base HTML skeleton has been implemented including:
- Sidebar navigation
- Header inside main content
- Scrollable content area
- Player layout structure

Markup follows semantic HTML structure.