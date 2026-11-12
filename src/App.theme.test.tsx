import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, expect, test } from "vitest";

import App from "./App";
import { THEME_STORAGE_KEY } from "./useTheme";

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  document.documentElement.removeAttribute("data-theme");
});

test("Aero is the default look", () => {
  render(<App />);

  expect(document.documentElement).toHaveAttribute("data-theme", "aero");
  expect(screen.getByRole("button", { name: "Dark mode" })).toHaveAttribute(
    "aria-pressed",
    "false"
  );
});

test("the dark mode toggle switches the theme and remembers the choice", async () => {
  const user = userEvent.setup();
  render(<App />);

  const toggle = screen.getByRole("button", { name: "Dark mode" });
  await user.click(toggle);
  expect(toggle).toHaveAttribute("aria-pressed", "true");
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");

  await user.click(toggle);
  expect(document.documentElement).toHaveAttribute("data-theme", "aero");
});
