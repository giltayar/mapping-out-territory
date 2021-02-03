'use strict';
const fs = require('fs');
const path = require('path');
const {describe, it, beforeEach, afterEach} = require('mocha');
const {expect} = require('chai');
const {JSDOM} = require('jsdom');

require('chai').use(require('chai-dom'));

const WEB_APP_HTML = fs.readFileSync(path.join(__dirname, '../../src/index.html'));

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

describe('todo-filtering it', function () {
  beforeEach(() => {
    const {window} = new JSDOM(WEB_APP_HTML, {url: 'http://localhost', runScripts: 'outside-only'});
    global.window = window;
    global.document = window.document;

    delete require.cache[require.resolve('../../src/js/app.js')];

    require('../../src/js/app.js');
  });
  afterEach(() => {
    delete global.window;
    delete global.document;
  });

  it.skip('dummy test to exercise all the unused stuff - feel free to delete', () => {
    addNewTodo('lalala');
    $$;
    expect(4).to.equal(4);
  });

  /**
   * Write the following "filtering" tests
   *
   * 1. Check that the "Active" filter in the bottom toolbar works
   * 2. Check that the "Completed" filter in the bottom toolbar works
   * 3. Check that the "All" Filter in the bottom toolbar works
   *
   */
});

function addNewTodo(text) {
  const newTodo = $('.new-todo');

  newTodo.value = text;
  newTodo.dispatchEvent(new window.Event('change'));
}
