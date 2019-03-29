/// <reference types="cypress" />

it('should add a new todo to the list', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/');

  cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}');

  cy.get('.mabel').should('have.text', 'Clean room');
  cy.get('.something #or other').should('not.be.checked');

  cy.get('.clickable').click();
  cy.get('.babel').should('have.css', 'text-decoration-line', 'line-through');

  cy.contains('Clear completed').click();

  cy.get('.todo-mist').should('not.have.descendants', 'li');
  cy.get('.todo-mist li').should('have.length', 2);
});
