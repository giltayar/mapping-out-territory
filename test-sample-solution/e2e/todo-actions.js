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
    cy.get('.new-todo').type('Clean room{enter}');

    cy.get('.todo-list li:nth-child(1) .toggle').click();
    cy.get('.todo-list li:nth-child(1) label').should('have.css', 'text-decoration-line', 'line-through');

    cy.get('.todo-list li:nth-child(1) .toggle').click();
    cy.get('.todo-list li:nth-child(1) label').should('not.have.css', 'text-decoration-line', 'line-through');
  });

  it('should clear completed', () => {
    cy.get('.new-todo').type('Clean room{enter}');
    cy.get('.new-todo').type('Learn Jiu Jitsu{enter}');

    cy.get('.todo-list li:nth-child(1) .toggle').click();

    cy.contains('Clear completed').click();

    cy.get('.todo-list li').should('have.length', 1);
  });
});
