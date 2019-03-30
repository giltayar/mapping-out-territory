'use strict';
const {promisify: p} = require('util');
const fs = require('fs');
const path = require('path');
const {describe, it, beforeEach, afterEach} = require('mocha');
const {expect} = require('chai');
const {JSDOM} = require('jsdom');

require('chai').use(require('chai-dom'));

const WEB_APP_HTML = fs.readFileSync(path.join(__dirname, '../../src/index.html'));

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

describe('todo-filtering it', function() {
  beforeEach(() => {
    const {window} = new JSDOM(WEB_APP_HTML, {url: 'http://localhost', runScripts: 'outside-only'});
    global.window = window;
    global.document = window.document;

    // No idea why, but _deleting_ this module from cache on every run makes the test run x3 faster
    delete require.cache[require.resolve('../../src/js/app.js')];

    const run = require('../../src/js/app.js').default;

    run();
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

    await p(setTimeout)(0);

    expect($$('.todo-list li')).to.have.length(2);
  });

  it('should filter "Completed" correctly', async () => {
    $('a[href="#/completed"]').click();

    await p(setTimeout)(0);

    expect($$('.todo-list li')).to.have.length(1);
  });

  it('should filter "All" correctly', async () => {
    $('a[href="#/"]').click();

    await p(setTimeout)(0);

    expect($$('.todo-list li')).to.have.length(3);
  });
});

function addNewTodo(text) {
  const newTodo = $('.new-todo');

  newTodo.value = text;
  newTodo.dispatchEvent(new window.Event('change'));
}
