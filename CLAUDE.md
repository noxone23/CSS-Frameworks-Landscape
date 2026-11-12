# Reading List

A reading list built with React 19, TypeScript and Vite. No backend, the data is kept in `localStorage`. Read `SPEC.md` before you build anything.

## Commands

- `npm run dev`: start the app on http://localhost:3000
- `npm run test:run`: run the tests once
- `npm run check`: check the types
- `npm run build`: build the app

## Rules

- **Do not change** `src/useBooks.ts`, `src/books.ts`, `src/types.ts` or `src/seed.json`. They are tested and shared between all versions of the app. Only build the view layer.
- Use function components and hooks. No class components.
- No `any`. Type props explicitly.
- Keep components small. One component per file in `src/components`.
- Run `npm run check` and `npm run test:run` before you say a task is done.

## Styling

Approach on this branch: **Bootstrap 5 with react-bootstrap**.

- Bootstrap CSS is imported once in `src/index.tsx` (`bootstrap/dist/css/bootstrap.min.css`). Do not import it anywhere else.
- Use Bootstrap classes for layout and typography (`container`, `row`, `col-*`, `d-flex`, `gap-*`, `fs-*`, `fw-*`, `text-*`, spacing utilities).
- Use `react-bootstrap` components for interactive elements such as `Modal`, `Toast`, `Button`, `Form` and `Dropdown`. Do not rebuild them by hand and do not use Bootstrap's JavaScript via `data-bs-*` attributes.
- No inline `style` props, no other CSS libraries.
- Customize with Bootstrap variables or CSS custom properties (`--bs-*`) in `src/index.css`. Keep custom CSS to a minimum.
- Exception for the glass look: `src/index.css` may hold the design tokens (gradient, glass background, blur, shadows, motion durations) and a few helper classes (`.glass`, `.glass-card`, `.book-item`). Use the tokens, do not hard-code colors in components. Animations must respect `prefers-reduced-motion`.
- Reuse components. Do not repeat long class lists, extract a component.

Rules for every approach:

- Every interactive element must work with the keyboard and show a visible focus.
- Colors and spacing come from one place (theme, variables or design scale), do not invent new values.
- Check the layout at 360px and at 1280px.
