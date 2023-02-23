// import the selenium web driver
// Builder: used to control the browser
// By: used to find the elements using different criteria
// Key: used to select a key based on keycode
const { Builder, By, Key } = require('selenium-webdriver')

// write the test case
async function test1() {
  // open the chrome browser and start controlling it
  const browser = await new Builder().forBrowser('chrome').build()

  // visit a url (https://google.com)
  await browser.get('https://google.com')

  // sleep for some time
  await browser.sleep(5000)

  // close the browser
  await browser.close()
}

test1()

async function test2() {
  const browser = await new Builder().forBrowser('chrome').build()

  await browser.get('https://google.co.in')
  await browser.sleep(1000)

  // find an element by its name = 'q'
  // document.getElementByName('q')
  const element = await browser.findElement(By.name('q'))

  // enter iphone 14 pro max inside the element
  await element.sendKeys('iphone 14 pro max')
  await browser.sleep(1000)

  // press enter key
  await element.sendKeys(Key.ENTER)
  await browser.sleep(1000)

  await browser.close()
}

test2()
