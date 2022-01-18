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

describe('todo-actions it', function () {
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
