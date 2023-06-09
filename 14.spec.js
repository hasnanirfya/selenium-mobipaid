// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

// jest.setTimeout(3000000);
describe('1-4', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('1-4', async function() {
    await driver.get("https://stage.mobipaid.com/en/register")
    await driver.manage().window().setRect({ width: 800, height: 816 })
    await driver.findElement(By.id("signatory_first_name")).click()
    await driver.findElement(By.id("signatory_first_name")).sendKeys("Devinda")
    await driver.findElement(By.id("signatory_last_name")).click()
    await driver.findElement(By.id("signatory_last_name")).sendKeys("Husna")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("nirfya13@gmail.com")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("leal6767?")
    await driver.findElement(By.id("name")).click()
    await driver.findElement(By.id("name")).sendKeys("Mandiri Persaya")
    await driver.findElement(By.css(".btn-log")).click()
    await driver.findElement(By.css(".btn-log")).sendKeys("8728938492")
    await driver.findElement(By.id("country")).click()
    {
      const dropdown = await driver.findElement(By.id("country"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\s+Indonesia']")).click()
    }
    await driver.findElement(By.name("state")).click()
    await driver.findElement(By.name("state")).sendKeys("Yogyakarta")
    await driver.findElement(By.id("btn-register")).click()
    await driver.close()
  })
})
