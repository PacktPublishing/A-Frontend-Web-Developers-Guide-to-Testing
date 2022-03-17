const { webkit, devices } = require('@playwright/test');
const iPhone = devices['iPhone 13 Pro'];
(async () => {
  const browser = await webkit.launch({headless: false, slowMo: 300});
  const context = await browser.newContext({
    ...iPhone,
    locale: 'de-DE'
  });
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  // other actions...
  await page.screenshot({path: 'DE-Google.png'})
  await browser.close();
})();
