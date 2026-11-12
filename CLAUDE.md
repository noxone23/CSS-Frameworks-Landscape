# Reading List

A reading list built with React 19, TypeScript and Vite. No backend, the data is kept in `localStorage`. Read `SPEC.md` before you build anything.

## Commands

- `npm run dev`: start the app on http://localhost:3002
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

Approach on this branch: **shadcn/ui** (on Tailwind CSS v4).

- Use shadcn/ui components from `src/components/ui`. Add them with `npx shadcn@latest add <name>` (for example `button`, `input`, `select`, `textarea`, `label`, `badge`, `card`, `dialog`, `sonner`). Do not write a component by hand if shadcn has one.
- Do not add another UI or CSS library (no Bootstrap, no styled-components). Tailwind v4 is set up with `tailwindcss` and `@tailwindcss/vite`. No `tailwind.config.js`, no PostCSS config.
- `src/index.css` is the only CSS file. Colors, radius and fonts come from the shadcn theme tokens (`bg-background`, `text-muted-foreground`, `bg-primary`). Change a token in `index.css`, do not invent a color in a component. Status colors are extra tokens in the same place, used through a lookup object, not copy-pasted class strings.
- No inline `style` props, no CSS modules, no arbitrary values like `w-[437px]` or `text-[#123456]`.
- Import with the `@/` alias (`@/components/ui/button`, `@/lib/utils`). Use `cn()` from `@/lib/utils` to merge classes.
- Keep our own components in `src/components` and the shadcn ones in `src/components/ui`. Edit a file in `ui` only to change the look, not the behavior.
- Dialog: use the shadcn `Dialog`. It must open with focus inside, close with Escape and return the focus to the button that opened it. Check this in the browser, do not assume it.
- Toast: use `sonner`. Render its `<Toaster />` once in `App.tsx`. It must show a short message after add, edit and delete.
- Dark mode, if built: shadcn uses the `.dark` class on `<html>` (`@custom-variant dark` is already in `index.css`). Define the tokens for both modes in `:root` and `.dark`.

Dev server: this branch runs on http://localhost:3002 so it can run next to `variant-bootstrap` (3000) and `variant-tailwind` (3001).

Rules for every approach:

- Every interactive element must work with the keyboard and show a visible focus.
- Colors and spacing come from one place (theme, variables or design scale), do not invent new values.
- Check the layout at 360px and at 1280px.
