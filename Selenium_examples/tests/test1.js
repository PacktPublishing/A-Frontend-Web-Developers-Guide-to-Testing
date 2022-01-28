const {Builder, By, Key, until} = require('selenium-webdriver');
const fs = require('fs')
const by = require('selenium-webdriver/lib/by');

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('MicrosoftEdge').usingServer('http://192.168.1.157:4444/wd/hub').build();

    await driver.get('https://www.packtpub.com');
    const data = await fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8')
    await driver.executeScript(data.toString());
    let result = await driver.executeAsyncScript('var callback = arguments[arguments.length - 1];axe.run().then(results => callback(results))');
    await fs.writeFileSync('tests/report.json', JSON.stringify(result));
    await driver.getTitle(); // => "Packt"

    let searchBox = await driver.findElement(By.name('q'));
    let searchButton = await driver.findElement(By.className('magnifying-glass'));
    await searchBox.click();
    await searchBox.sendKeys('UI Testing with Puppeteer');
    await searchButton.click();
    await driver.getTitle().then(function(title) {
        console.log("The title is: " + title)
});
    console.log
    await driver.quit();
})();