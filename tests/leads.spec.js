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

  //checkpoint
  await expect(
      page.getByTestId('modal').getByRole('heading')
    ).toHaveText('Fila de espera');
  
    //---->

  //Aproach 01 -> find by id
  // await page.locator('#name').fill('ivanclay@gmail.com');

  //Aproach 02 ->  find by name
  //await page.locator('input[name=name]').fill('ivanclay@gmail.com');

  //Aproach 03 ->  find by placeholder using regex
  //await page.locator('input[placeholder="Seu nome completo"]').fill('ivanclay@gmail.com');

  //Aproach 04 ->  find by placeholder using Playright placeholder method
  await page.getByPlaceholder('Seu nome completo').fill('ivan clay');

 //---->

  //Aproach 01 ->  find by placeholder using Playright placeholder method
  await page.getByPlaceholder('Seu email principal').fill('ivanclay@gmail.com');

  //---->
  //Aproach 01 ->  find button by text
  // await page.getByText('Quero entrar na fila').click();

    //Aproach 02 ->  find button by text closed scope
    await page.getByTestId('modal')
      .getByText('Quero entrar na fila').click();

  await page.waitForTimeout(10000);
  
});


