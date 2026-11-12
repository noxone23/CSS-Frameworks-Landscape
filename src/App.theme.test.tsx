import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, expect, test } from "vitest";

import App from "./App";
import { THEME_KEY } from "./useTheme";

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove("dark");
});

test("dark mode is the default", () => {
  render(<App />);
  expect(document.documentElement).toHaveClass("dark");
});

test("the toggle switches to light mode and remembers it", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("button", { name: "Switch to light mode" }));
  expect(document.documentElement).not.toHaveClass("dark");
  expect(localStorage.getItem(THEME_KEY)).toBe("light");
  expect(
    screen.getByRole("button", { name: "Switch to dark mode" })
  ).toBeInTheDocument();
});

test("a saved light choice is used on the next visit", () => {
  localStorage.setItem(THEME_KEY, "light");
  render(<App />);
  expect(document.documentElement).not.toHaveClass("dark");
});
