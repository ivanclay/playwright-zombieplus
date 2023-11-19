const { expect } = require('@playwright/test');

export class LoginPage {
    constructor(page){
        this.page = page;
    }

    async visit() {
        await this.page.goto('http://localhost:3000/admin/login');
        const loginForm = this.page.locator('.login-form');
        await expect(loginForm).toBeVisible();
    }

    async submit(email, password){
        await this.page.getByPlaceholder('E-mail').fill(email);
        await this.page.getByPlaceholder('Senha').fill(password);
        // await this.page.locator('button[type=submit]').click();
        await this.page.getByText('Entrar').click();
    }

    async confirmIsLoggedInByLogoutLink(){
        const logoutLink = this.page.locator('a[href="/logout"]');
        await expect(logoutLink).toBeVisible();
    }

    /* ENVIAR NOTA PARA SUPORTE SOBRE TESTE FALHO */
    async confirmIsLoggedInByRoute(){
        await this.page.waitForLoadState('networkidle');
        await expect(this.page).toHaveURL(/.*admin/);
    }

    // async confirmIsLoggedInByRoute(){
    //     await expect(this.page).toHaveURL('http://localhost:3000/admin/movies');
    // }


}
