import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, expect, test, vi } from "vitest";

import App from "./App";

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.useRealTimers();
});

test("edits a book and shows a toast", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getAllByRole("button", { name: /^Edit / })[0]);
  const dialog = await screen.findByRole("dialog", { name: "Edit book" });
  const title = within(dialog).getByLabelText("Title");
  await user.clear(title);
  await user.type(title, "Renamed Book");
  await user.click(within(dialog).getByRole("button", { name: "Save" }));

  expect(await screen.findByText("Book updated")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Renamed Book" })).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(10);
});

test("the toast hides itself after a few seconds", async () => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
  const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  render(<App />);

  await user.click(screen.getAllByRole("button", { name: /^Delete / })[0]);
  const dialog = await screen.findByRole("dialog");
  await user.click(within(dialog).getByRole("button", { name: "Delete" }));
  expect(screen.getByText("Book deleted")).toBeInTheDocument();

  act(() => {
    vi.advanceTimersByTime(3500);
  });
  expect(screen.queryByText("Book deleted")).not.toBeInTheDocument();
});
