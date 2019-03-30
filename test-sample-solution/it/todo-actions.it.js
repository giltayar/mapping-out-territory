'use strict';
const fs = require('fs');
const path = require('path');
const {describe, it, beforeEach, afterEach} = require('mocha');
const {expect} = require('chai');
const {JSDOM} = require('jsdom');

require('chai').use(require('chai-dom'));

const WEB_APP_HTML = fs.readFileSync(path.join(__dirname, '../../src/index.html'));

const $ = selector => document.querySelector(selector);

describe('todo-actions it', function() {
  beforeEach(() => {
    const {window} = new JSDOM(WEB_APP_HTML, {url: 'http://localhost'});
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

  it('should add a new todo to the list', async () => {
    addNewTodo('Clean room');

    expect($('.todo-list label')).to.have.text('Clean room');
  });

  it('should toggle test correctly', () => {
    addNewTodo('Clean room');

    $('.todo-list li:nth-child(1) .toggle').click();
    expect($('.todo-list li:nth-child(1)')).to.have.class('completed');

    $('.todo-list li:nth-child(1) .toggle').click();
    expect($('.todo-list li:nth-child(1)')).to.not.have.class('completed');
  });

  it('should clear completed', () => {
    addNewTodo('Clean room{enter}');
    addNewTodo('Learn Jiu Jitsu{enter}');

    $('.todo-list li:nth-child(1) .toggle').click();

    $('.clear-completed').click();

    expect($('.todo-list li')).to.have.length(1);
  });
});

function addNewTodo(text) {
  const newTodo = $('.new-todo');

  newTodo.value = text;
  newTodo.dispatchEvent(new window.Event('change'));
}
