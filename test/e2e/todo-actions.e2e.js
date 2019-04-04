/// <reference types="cypress" />
'use strict';

describe('todo actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should add a new todo to the list', () => {
    cy.get('.new-todo').type('Clean room{enter}');

    cy.get('.todo-list label').should('have.text', 'Clean room');
    cy.get('.todo-list .toggle').should('not.be.checked');
  });

  it('should toggle test correctly', () => {
    /**
     * Add the following test
     *
     * 1. Toggling the "completed" button strikes out the todo
     * 2. Toggling it again will undo the strike out
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
