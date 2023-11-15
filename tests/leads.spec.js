// @ts-check
import { LandingPage } from './pages/landingPage';
const { test, expect } = require('@playwright/test');

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
  
  const landingPage = new LandingPage(page);

  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm(`meu nome`, 'meu-email@gmail.com');

  const toastMessage = `Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!`;      
  await landingPage.toastHaveText(toastMessage);

});

test('não deve cadastrar com os campos vazios', async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm('', '');

  await landingPage.alertHaveText([
    'Campo obrigatório',
    'Campo obrigatório'
  ]);
});

test('não deve cadastrar com nome vazio', async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm('', 'meu-email@gmail.com');

  await landingPage.alertHaveText('Campo obrigatório');
});

test('não deve cadastrar com email vazio', async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm(`meu nome`, '');

      await landingPage.alertHaveText('Campo obrigatório');
});

test('não deve cadastrar com e-mail incorreto', async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm(`meu nome`, 'meu-email.gmail.com');

  await landingPage.alertHaveText(`Email incorreto`);
});

// test('deve cadastrar um lead na fila de espera', async ({ page }) => {
//   await page.goto('http://localhost:3000');

//   //Aproach 01 -> xpath
//   // await page.click('//button[text()="Aperte o play... se tiver coragem"]');

//   //Aproach 02 -> getByRole complete name
//   // await page.getByRole('button', { name: 'Aperte o play... se tiver coragem'}).click();

//   //Aproach 03 -> regular expression substring
//   await page.getByRole('button', { name: /Aperte o play/}).click();

//   //checkpoint
//   await expect(
//       page.getByTestId('modal').getByRole('heading')
//     ).toHaveText('Fila de espera');
  
//     //---->

//   //Aproach 01 -> find by id
//   // await page.locator('#name').fill('ivanclay@gmail.com');

//   //Aproach 02 ->  find by name
//   //await page.locator('input[name=name]').fill('ivanclay@gmail.com');

//   //Aproach 03 ->  find by placeholder using regex
//   //await page.locator('input[placeholder="Seu nome completo"]').fill('ivanclay@gmail.com');

//   //Aproach 04 ->  find by placeholder using Playright placeholder method
//   await page.getByPlaceholder('Informe seu nome').fill('ivan clay');

//  //---->

//   //Aproach 01 ->  find by placeholder using Playright placeholder method
//   await page.getByPlaceholder('Informe seu email').fill('ivanclay@gmail.com');

//   //---->
//   //Aproach 01 ->  find button by text
//   // await page.getByText('Quero entrar na fila').click();

//     //Aproach 02 ->  find button by text closed scope
//     await page.getByTestId('modal')
//       .getByText('Quero entrar na fila').click();

//     //---->
//     //Aproach to get toast html
//     // await page.getByText('seus dados conosco').click();
//     // const content = await page.content();
//     // console.log(content);

//     const toastMessage = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!';
//     await expect(page.locator('.toast')).toHaveText(toastMessage);
//     await expect(page.locator('.toast')).toBeHidden({timeout: 5000});


//   });
