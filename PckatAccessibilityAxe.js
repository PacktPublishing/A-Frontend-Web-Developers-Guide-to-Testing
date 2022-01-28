const puppeteer = require('puppeteer');
const { waitForUrl } = require('selenium-webdriver/http/util');
const {AxePuppeteer} = require ('axe-puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false, devtools:true, args: ['--window-size=1920,1080']});
  const page = await browser.newPage();
  await page.setBypassCSP(true);
  await page.goto('https://www.packtpub.com');
 const accessibilityResults = await new AxePuppeteer(page).analyze();
 await page.evaluate(() => {
   debugger;
 })
 console.log(accessibilityResults);
 await page.close();
  await browser.close();
   
})();
