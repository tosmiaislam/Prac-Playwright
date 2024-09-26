import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('User login and interact with skill-based courses and jobs', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Navigate to the login page and perform login
    await loginPage.navigateTo();
    await loginPage.clickLoginLink();
    await loginPage.enterUsername('01717482005');
    await loginPage.enterPassword('ABcd1234')
    await loginPage.clickLoginButton();

    // Navigate through skill-based courses and jobs
    await dashboardPage.navigateToCoursesAndJobs();

    // Access profile menu, CV, and feed
    await dashboardPage.openProfileMenu();
    await dashboardPage.clickMyCV();
    await dashboardPage.openProfileMenu();
    await dashboardPage.clickMyFeed();
});
