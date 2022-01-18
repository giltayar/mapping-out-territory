import {readFileSync} from 'fs';
import {join} from 'path';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {use, expect} from 'chai';
import chaiDom from 'chai-dom';
import {JSDOM} from 'jsdom';

use(chaiDom);

const __dirname = new URL(import.meta.url).pathname;

const WEB_APP_HTML = readFileSync(join(__dirname, '../../../src/index.html'));

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

describe('todo-filtering it', function () {
  beforeEach(async () => {
    const {window} = new JSDOM(WEB_APP_HTML, {url: 'http://localhost', runScripts: 'outside-only'});
    global.window = window;
    global.document = window.document;

    await import(`../../src/js/app.js?cache-buster=${Math.random()}`);
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
