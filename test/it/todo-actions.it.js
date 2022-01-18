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
    /**
     * Add the following test
     *
     * 1. Toggling the "completed" button strikes out the todo
     *    (there's no way to check for css styles, but you _can_ check that the `li` has the right class)
     * 2. Toggling it again will undo the strike out
     *
     * Note: To click on an element, use _element_.click()
     */
    throw new Error('test fails because you need to implement it!');
  });

  it('should clear completed', () => {
    /**
     * Add the following test
     *
     * 1. The "Clear completed" button in the bottom should clear out all completed todos
     */
    throw new Error('test fails because you need to implement it!');
  });
});

function addNewTodo(text) {
  const newTodo = $('.new-todo');

  newTodo.value = text;
  newTodo.dispatchEvent(new window.Event('change'));
}
