const puppeteer = require('puppeteer');
const {AxePuppeteer} = require ('axe-puppeteer')
const { waitForUrl } = require('selenium-webdriver/http/util');

(async () => {
  const browser = await puppeteer.launch({headless:false, args: ['--window-size=1920,1080']});
  const page = await browser.newPage();
  await page.setBypassCSP(true);
  await page.goto('https://www.packtpub.com');
  const searchElement = await page.$('#search');
  await searchElement.type("JavaScript");
  await page.type('#search',String.fromCharCode(13));
  await page.screenshot({ path: 'Packtpub.png' });
  await Promise.all([
    await page.waitForNavigation({waitUntil: 'load'})
 ]);
   
  await browser.close();
   
})();
