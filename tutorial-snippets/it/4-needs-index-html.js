'use strict';
import {readFileSync} from 'fs';
import {join} from 'path';
import {JSDOM} from 'jsdom';

const __dirname = new URL(import.meta.url).pathname;

const WEB_APP_HTML = readFileSync(join(__dirname, '../../src/index.html'));

describe('todo-actions it', function () {
  beforeEach(() => {
    const {window} = new JSDOM(WEB_APP_HTML, {url: 'http://localhost'});
    global.window = window;
    global.document = window.document;
  });
});
