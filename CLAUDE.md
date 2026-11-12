# Reading List

A reading list built with React 19, TypeScript and Vite. No backend, the data is kept in `localStorage`. Read `SPEC.md` before you build anything.

## Commands

- `npm run dev`: start the app on http://localhost:3003
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

Approach on this branch: **styled-components** (v6).

- Style with `styled-components` only. No other UI or CSS library (no Bootstrap, no Tailwind, no CSS modules), no inline `style` props.
- Colors, spacing, radius, font sizes, shadows and breakpoints live in one theme object in `src/theme.ts`. Provide it once with `ThemeProvider` in `src/index.tsx` or `App.tsx`. Read values from the theme (`${({ theme }) => theme.colors.primary}`), do not write a hex color or a pixel value that is not in the theme.
- Type the theme: declare `DefaultTheme` in `src/styled.d.ts` so `theme.*` is checked by TypeScript.
- Global styles (reset, body font and background) go into one `createGlobalStyle` in `src/GlobalStyle.ts`. `src/index.css` stays small or empty.
- Props that only exist for styling start with `$` (transient props, for example `$status`). Never pass them to the DOM.
- Define styled components at module level, never inside a component or a render function. Keep them next to the component that uses them. Share a styled component only when two components really need the same one (for example a `Button`).
- Status colors are extra tokens in the theme (`theme.colors.status`), used through a lookup object keyed by `Status`, not copy-pasted blocks.
- Use `css` helpers or `variant` props for variants (`$variant="danger"`), do not write the same block twice.
- No library for the dialog or the toast. Write one accessible `Modal` component (focus moves inside on open, Tab stays inside, Escape closes, focus returns to the button that opened it) and one `Toast` component with `role="status"` that hides itself after a few seconds. Check the dialog in the browser, do not assume it.
- Dark mode, if built: two theme objects (`lightTheme`, `darkTheme`) with the same shape, switched by `ThemeProvider`. It follows the system setting and has a toggle.
- Animations must respect `prefers-reduced-motion`.

Dev server: this branch runs on http://localhost:3003 so it can run next to `variant-bootstrap` (3000), `variant-tailwind` (3001) and `variant-shadcn` (3002).

Rules for every approach:

- Every interactive element must work with the keyboard and show a visible focus.
- Colors and spacing come from one place (theme, variables or design scale), do not invent new values.
- Check the layout at 360px and at 1280px.
