"use strict"

const {Builder, By} = require('selenium-webdriver');

let driver = null;

const highlight = async (driver, element, duration) => {
    const oldBorder = await driver.executeScript(`const oldBorder = arguments[0].style.border; arguments[0].style.border = '2px solid red'; return oldBorder;`, element);
    await driver.sleep(duration);
    await driver.executeScript(`const oldBorder = arguments[1]; arguments[0].style.border = oldBorder`, element, oldBorder);
}

(async () => {
    try {
        driver = await new Builder()
            .forBrowser("chrome")
            .build();

        await driver.manage().window().maximize();
        await driver.get("https://www.google.de");

        const link = await driver.findElement(By.xpath("//*/a[contains(text(), 'About')]"));
        await highlight(driver, link, 200);
    } catch (e) {
        console.log(e);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
})();
