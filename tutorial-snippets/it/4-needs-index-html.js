'use strict';
const fs = require('fs');
const path = require('path');
const {JSDOM} = require('jsdom');

const WEB_APP_HTML = fs.readFileSync(path.join(__dirname, '../../src/index.html'));

describe('todo-actions it', function () {
  beforeEach(() => {
    const {window} = new JSDOM(WEB_APP_HTML, {url: 'http://localhost'});
    global.window = window;
    global.document = window.document;
  });
});
