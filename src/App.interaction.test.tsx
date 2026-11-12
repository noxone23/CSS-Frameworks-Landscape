import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, expect, test } from "vitest";

import App from "./App";

beforeEach(() => {
  localStorage.clear();
});

test("search and status filter work together and show the empty state", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByLabelText("Search by title"), "zzzzzz");
  expect(screen.getByText("No books found")).toBeInTheDocument();

  await user.clear(screen.getByLabelText("Search by title"));
  await user.click(screen.getByLabelText("Done"));
  const doneCount = screen.getAllByRole("listitem").length;
  expect(doneCount).toBeGreaterThan(0);
  expect(doneCount).toBeLessThan(10);
});

test("the form does not save without title and author", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("button", { name: "+ Add book" }));
  const dialog = await screen.findByRole("dialog");
  await user.click(within(dialog).getByRole("button", { name: "Save" }));

  expect(within(dialog).getByText("Please enter a title.")).toBeVisible();
  expect(within(dialog).getByText("Please enter an author.")).toBeVisible();
  expect(screen.getAllByRole("listitem")).toHaveLength(10);
});

test("adds a book and shows a toast", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("button", { name: "+ Add book" }));
  const dialog = await screen.findByRole("dialog");
  await user.type(within(dialog).getByLabelText("Title"), "New Book");
  await user.type(within(dialog).getByLabelText("Author"), "Some Author");
  await user.click(within(dialog).getByRole("button", { name: "Save" }));

  expect(await screen.findByText("Book added")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(11);
});

test("deletes a book after confirmation and shows a toast", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getAllByRole("button", { name: /^Delete / })[0]);
  const dialog = await screen.findByRole("dialog");
  await user.click(within(dialog).getByRole("button", { name: "Delete" }));

  expect(await screen.findByText("Book deleted")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(9);
});
