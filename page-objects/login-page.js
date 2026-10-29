class LoginPage {
    async navigateToLoginPage() {
        await page.goto('https://www.saucedemo.com/')
    }

    async submitLoginForm(username, password) {
        await page.fill('#user-name', username)
        await page.fill('#password', password)
        await page.click('#login-button')
    }

    async isHomePageVisible() {
        await page.waitForSelector('#inventory_container')
    }

    async pause() {
        await page.waitForTimeout(3000)
    }

}

module.exports = { LoginPage }