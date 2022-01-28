const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  const har = new PuppeteerHar(page);
  await har.start({ path: 'book_demo.har' });
  await page.tracing.start({path: 'traceDemo.json'});
  await page.goto('https://www.packtpub.com/');
  await har.stop();
  await page.tracing.stop();
  await browser.close();
})();