it('gets to my home page', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Got Tech Jobs?');
});