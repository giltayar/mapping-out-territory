import {readFileSync} from 'fs';
import {promisify} from 'util';
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
    const {window} = new JSDOM(WEB_APP_HTML, {url: 'http://localhost'});
    global.window = window;
    global.document = window.document;

    await import(`../../src/js/app.js?cache-buster=${Math.random()}`);
  });
  afterEach(() => {
    delete global.window;
    delete global.document;
  });
  beforeEach(() => {
    addNewTodo('Clean room{enter}');
    addNewTodo('Learn JavaScript{enter}');
    addNewTodo('Use Cypress{enter}');

    $('.todo-list li:nth-child(2) .toggle').click();
  });

  it('should filter "Active" correctly', async () => {
    $('a[href="#/active"]').click();

    await promisify(setTimeout)(0);

    expect($$('.todo-list li')).to.have.length(2);
  });

  it('should filter "Completed" correctly', async () => {
    $('a[href="#/completed"]').click();

    await promisify(setTimeout)(0);

    expect($$('.todo-list li')).to.have.length(1);
  });

  it('should filter "All" correctly', async () => {
    $('a[href="#/"]').click();

    await promisify(setTimeout)(0);

    expect($$('.todo-list li')).to.have.length(3);
  });
});

function addNewTodo(text) {
  const newTodo = $('.new-todo');

  newTodo.value = text;
  newTodo.dispatchEvent(new window.Event('change'));
}
