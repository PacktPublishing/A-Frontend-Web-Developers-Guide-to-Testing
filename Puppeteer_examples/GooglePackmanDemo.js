const readline = require('readline');
const puppeteer = require('puppeteer');

(async() => {

const browser = await puppeteer.launch({
  headless: false,
  args: ['--window-size=800,500']
});

const page = await browser.newPage();
await page.setViewport({width: 800, height: 500, deviceScaleFactor: 2});
await page.goto('https://www.google.com/logos/2010/pacman10-i.html');

process.stdin.on('keypress', async (str, key) => {
  // In "raw" mode, so create own kill switch.
  if (key.sequence === '\u0003') {
    await browser.close();
    process.exit();
  }

  if (['up', 'down', 'left', 'right'].includes(key.name)) {
    const capitalized = key.name[0].toUpperCase() + key.name.slice(1);
    const keyName = `Arrow${capitalized}`;
    console.log(`page.keyboard.down('${keyName}')`);
    await page.keyboard.down(keyName);
  }
});

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

})();
