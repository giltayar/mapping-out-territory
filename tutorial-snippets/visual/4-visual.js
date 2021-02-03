/// <reference types="cypress" />
'use strict';

describe('todo actions (visual)', () => {
  beforeEach(() => cy.visit('http://localhost:3000/'));

  beforeEach(() =>
    cy.eyesOpen({
      appName: 'TodoMVC',
      batchName: 'TodoMVC Workshop',
      browser: [
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1280, height: 1024, name: 'chrome'},
        {width: 800, height: 600, name: 'firefox'},
        {deviceName: 'iPhone X', screenOrientation: 'landscape'},
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'Galaxy S5', screenOrientation: 'portrait'},
      ],
    })
  );

  afterEach(() => cy.eyesClose());

  it('should look good', () => {
    // Empty todo list
    cy.get('.new-todo').type('Clean room');

    cy.eyesCheckWindow('No todos');

    // One todo list
    cy.get('.new-todo').type('{enter}');

    cy.eyesCheckWindow('one todo added');

    // Component tests
    cy.eyesCheckWindow({tag: 'Footer', sizeMode: 'selector', selector: '.footer'});
    cy.eyesCheckWindow({tag: 'Todo list', sizeMode: 'selector', selector: '.todo-list'});
  });
});
