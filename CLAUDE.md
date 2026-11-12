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

Approach on this branch: **Tailwind CSS v4**.

- Use Tailwind CSS v4 only (`tailwindcss` and `@tailwindcss/vite`). No `tailwind.config.js`, no PostCSS config. Configure with `@theme` in `src/index.css`.
- `src/index.css` starts with `@import "tailwindcss";`. It is the only CSS file.
- Style with utility classes in the JSX. No inline `style` props, no CSS modules, no other CSS libraries (no Bootstrap, no styled-components).
- Colors, fonts, spacing, radii and shadows that the app needs more than once are defined as tokens in `@theme` and used by name (`bg-surface`, `text-muted`). Do not use arbitrary values like `w-[437px]` or `text-[#123456]`.
- Reuse components. Do not repeat long class lists, extract a component. Use a small helper or a lookup object for variants (for example the status colors), not copy-pasted class strings.
- Dialogs, toast and the other interactive parts are built by hand with accessible HTML (`<dialog>` or `role="dialog"` with `aria-modal`, focus trap, Escape to close, focus returns to the opener, `role="status"` for the toast). Do not add a UI library for them.
- Dark mode, if built: use the `dark:` variant with `@custom-variant dark` driven by a `data-theme` attribute, and define the color tokens for both modes in `@theme`.

Dev server: this branch runs on http://localhost:3001 so it can run next to `variant-bootstrap` on port 3000.

Rules for every approach:

- Every interactive element must work with the keyboard and show a visible focus.
- Colors and spacing come from one place (theme, variables or design scale), do not invent new values.
- Check the layout at 360px and at 1280px.
