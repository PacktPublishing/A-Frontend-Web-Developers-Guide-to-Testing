const puppeteer = require('puppeteer');
const { waitForUrl } = require('selenium-webdriver/http/util');

(async () => {
  const browser = await puppeteer.launch({headless:false, args: ['--window-size=1920,1080']});
  const page = await browser.newPage();
  await page.goto('https://uppy.io/examples/xhrupload/', {"waitUntil": 'networkidle2'});
  
  const [fileChooser] = await Promise.all([
    page.waitForFileChooser(),
    page.click('.uppy-FileInput-btn')
  ])
  await fileChooser.accept(['Packtpub.png']);
  await page.screenshot({ path: 'FileChooser.png' });
  await browser.close();
   
})();
