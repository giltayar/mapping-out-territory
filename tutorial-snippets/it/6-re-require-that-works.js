const fs = require('fs');
const path = require('path');
const {JSDOM} = require('jsdom');

const WEB_APP_HTML = fs.readFileSync(path.join(__dirname, '../../src/index.html'));

beforeEach(() => {
  const {window} = new JSDOM(WEB_APP_HTML, {url: 'http://localhost'});
  global.window = window;
  global.document = window.document;

  const run = require('../../src/js/app.js').default;

  run();
});
