describe('filtering', function() {
  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/');

    cy.get('.new-todo').type('Clean room{enter}');
  });

  it('should do something correctly', () => {
    cy.get('.clickable').click();

    cy.get('.babel').should('have.css', 'text-decoration-line', 'line-through');
  });
});
