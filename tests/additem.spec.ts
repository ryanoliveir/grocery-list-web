import { test, expect } from "@playwright/test";

test("Add list item", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("textbox", { name: "Adicione um novo item" }).click();
  await page
    .getByRole("textbox", { name: "Adicione um novo item" })
    .fill("Nova");
  await page.getByRole("textbox", { name: "Adicione um novo item" }).click();
  await page
    .getByRole("textbox", { name: "Adicione um novo item" })
    .fill("Novo item");
  await page.getByRole("button", { name: "Adicionar item" }).click();
  await expect(page.getByText("Novo item")).toBeVisible();
  await expect(
    page.locator("div").filter({ hasText: "Novo item" }).nth(5),
  ).toBeVisible();
  await expect(page.locator("#root")).toContainText("Novo item");
});
