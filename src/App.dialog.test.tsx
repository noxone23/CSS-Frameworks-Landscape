import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, expect, test } from "vitest";

import App from "./App";

beforeEach(() => {
  localStorage.clear();
});

test("the dialog takes the focus, closes with Escape and returns the focus", async () => {
  const user = userEvent.setup();
  render(<App />);

  const opener = screen.getByRole("button", { name: "+ Add book" });
  await user.click(opener);
  const dialog = await screen.findByRole("dialog");
  expect(within(dialog).getByLabelText("Title")).toHaveFocus();

  await user.keyboard("{Escape}");
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(opener).toHaveFocus();
});

test("Tab and Shift+Tab stay inside the dialog", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("button", { name: "+ Add book" }));
  const dialog = await screen.findByRole("dialog");

  await user.tab({ shift: true });
  expect(within(dialog).getByRole("button", { name: "Save" })).toHaveFocus();
  await user.tab();
  await waitFor(() =>
    expect(within(dialog).getByLabelText("Title")).toHaveFocus()
  );
});

test("the toast shows after delete and the focus goes to the page title", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getAllByRole("button", { name: /^Delete / })[0]);
  await user.click(
    within(await screen.findByRole("dialog")).getByRole("button", {
      name: "Delete",
    })
  );
  expect(await screen.findByText("Book deleted")).toBeVisible();
  expect(screen.getByRole("heading", { name: "Reading List" })).toHaveFocus();
});
