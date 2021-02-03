/// <reference types="cypress" />
'use strict';

describe('todo actions (visual)', () => {
  beforeEach(() => cy.visit('http://localhost:3000/'));

  beforeEach(() =>
    cy.eyesOpen({
      appName: 'TodoMVC',
      batchName: 'TodoMVC Workshop',
    })
  );

  afterEach(() => cy.eyesClose());

  it('should look good', () => {
    /**
     * Write a test that visually tests the following states of the application
     * (you can write it as one big test, like a "story").
     *
     * 1. No todos, but something written in the "new todo" input
     * 2. One todo
     * 3. Two todos
     * 4. Two todos, one of them completed
     * 5. Only completed todos shown (using the "Completed" button)
     *
     * Also include two "component" screenshots:
     * 1. The footer component (with the filter buttons and statuses)
     * 1. The todo list
     */
  });
});
