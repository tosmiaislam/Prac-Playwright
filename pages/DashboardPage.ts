import { Page } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToCoursesAndJobs() {
        await this.page.getByText('3Course Enrolled').click();
        await this.page.getByText('0Gap Matching Courses').click();
        await this.page.getByText('38Total Courses').click();
        await this.page.getByText('2Jobs Apply').click();
        await this.page.getByText('16,100Total Jobs').click();
        await this.page.getByText('Jobs according to skills').click();
    }

    async openProfileMenu() {
        await this.page.getByRole('button', { name: 'Profile', exact: true }).click()
    }

    async clickMyCV() {
        await this.page.locator('#my-profile-menu').getByRole('link', { name: 'My CV' }).click()
    }

    async clickMyFeed() {
        await this.page.getByRole('link', { name: 'My Feed' }).click();
    }
}
