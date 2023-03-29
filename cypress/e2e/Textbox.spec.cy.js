context('Login Test', () => {
  it('Test case 1: Fill Text Fields', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.get('#userName').type('Roel Pante');
    cy.get('#userEmail').type('roelchristian.pante.cics@ust.edu.ph');
    cy.get('#currentAddress').type('Project 2 Quezon City');
    cy.get('#permanentAddress').type('Project 2 Quezon City');
    cy.get('#submit').click();
    cy.get('#output').should('be.visible');
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})