const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')
const loginPage = new LoginPage()

defineStep('I visit a login page', async () => {
    await loginPage.navigateToLoginPage()
})

defineStep('I fill the login form with valid credentials', async () => {
    await loginPage.submitLoginForm('standard_user', 'secret_sauce')
})

defineStep('I should see the home page', async () => {
    await loginPage.isHomePageVisible()
})

defineStep('I wait for 3 seconds', async () => {
    await loginPage.pause()
})

defineStep(
    /^I fill the login form with "([^"]*)" and "([^"]*)"$/,
    async function (username, password) {
        await loginPage.submitLoginForm(username, password)
    })