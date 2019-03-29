/// <reference types="cypress" />

it('should add a new todo to the list', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/');

  cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}');

  cy.get('.muggle').click();

  cy.contains('Some text').click();
});
