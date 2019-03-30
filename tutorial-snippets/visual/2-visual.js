/// <reference types="cypress" />
'use strict';

describe('todo actions (visual)', () => {
  beforeEach(() => cy.visit('http://localhost:3000/'));

  beforeEach(() =>
    cy.eyesOpen({
      appName: 'TodoMVC',
      batchName: 'TodoMVC Workshop'
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
  });
});
