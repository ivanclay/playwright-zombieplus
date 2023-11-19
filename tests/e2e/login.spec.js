const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/loginPage';
import { Toast } from '../pages/Components';

let loginPage;
let toast;

test.beforeEach( async ({ page }) => {
    loginPage = new LoginPage(page);
    toast = new Toast(page);
});

test('deve logar como administrador', async ({ page }) => {
    await loginPage.visit();
    await loginPage.submit('admin3333@zombieplus.com', 'pwd12345678');
    // await loginPage.submit('admin@zombieplus.com', 'pwd123');
    // await loginPage.confirmIsLoggedInByLogoutLink();
    await loginPage.confirmIsLoggedInByRoute();
  });

  test('não deve logar com senha errada', async ({ page }) => {
    await loginPage.visit();
    await loginPage.submit('admin@zombieplus.com', 'pwd12345678');
    
    const toastMessage = `Oops!Ocorreu um erro ao tentar efetuar o login. 
                            Por favor, verifique suas credenciais e tente novamente.`;
    await toast.haveText(toastMessage);
    
  });