// @ts-check
const { test, expect } = require('@playwright/test');

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
  await page.goto('http://localhost:3000');

  //Aproach 01 -> xpath
  // await page.click('//button[text()="Aperte o play... se tiver coragem"]');

  //Aproach 02 -> getByRole complete name
  // await page.getByRole('button', { name: 'Aperte o play... se tiver coragem'}).click();

  //Aproach 03 -> regular expression substring
  await page.getByRole('button', { name: /Aperte o play/}).click();

  await page.waitForTimeout(10000);
  
});


