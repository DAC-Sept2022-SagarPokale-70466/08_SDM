const { Builder, By } = require("selenium-webdriver");

async function test() {
    const browser = await new Builder().forBrowser('chrome').build();

    await browser.get('G:/C-Dac/8_SDM/Practical/Test2/index.html');

    await browser.sleep(1000)

    await browser.findElement(By.id('email')).sendKeys('test@test.com')

    await browser.sleep(1000)

    await browser.findElement(By.id('password')).sendKeys('test');

    await browser.sleep(2000)

    await browser.findElement(By.id('login')).click()

    const elementResult = await browser.findElement(By.id('result'))

    const result = await elementResult.getText();

    if (result == 'success') {
        console.log(`test case successfully executed`)
    } else {
        console.log(`test case failed `)
    }

    await browser.close()
}

test()