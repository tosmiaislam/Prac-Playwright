import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async navigateTo() {
        await this.page.goto('https://devtest.isec.gov.bd/');
    }
    async clickLoginLink() {
        await this.page.getByRole('link', { name: 'Login' }).click();
    }
    async enterUsername(username: string) {
        await this.page.getByTestId('login-page-username-input').fill(username)
    }
    async enterPassword(password: string) {
        await this.page.getByTestId('login-page-password-input').fill(password);
    }

    async clickLoginButton() {
        await this.page.getByTestId('login-page-continue-login-button').click()
    }
}
