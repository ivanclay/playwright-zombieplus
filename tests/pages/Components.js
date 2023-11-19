const { expect } = require('@playwright/test');

export class Toast {
    constructor(page){
        this.page = page;
    }

    async haveText(toastMessage){
        const toast = this.page.locator('.toast'); 
        
        await expect(toast).toHaveText(toastMessage);
        // Not visible and not in HTML code
        await expect(toast).toBeHidden({timeout: 5000});
        //Not visible only
        await expect(toast).not.toBeVisible({timeout: 5000});
    }
}