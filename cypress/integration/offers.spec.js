describe('Offers page', () => {
    it('should be visible when logged in', () => {
        cy.visit('http://localhost:3000');

        cy.findByLabelText(/Username/i).clear().type('plexure');
        cy.findByLabelText(/Password/i).clear().type('plexure');
        cy.findByRole('button', { name: /log in/i }).click();
      
        cy.findByText(/All Offers/i, { timeout: 10000 }).should('be.visible');
    });

    it('should have the offers table with all the columns', () => {
        cy.findByText("TITLE").should('be.visible');
        cy.findByText("CATEGORY").should('be.visible');
        cy.findByText("DESCRIPTION").should('be.visible');
        cy.findByText("START DATE AND TIME").should('be.visible');
        cy.findByText("END DATE AND TIME").should('be.visible');
        cy.findByText("STATUS").should('be.visible');
        cy.findByText("ACTIONS").should('be.visible');
    });

    it('should have new and import offers buttons', () => {
        cy.findByRole('button', { name: /new offer/i });
        cy.findByRole('button', { name: /import offers/i });
    });

    it('should take us to new offer page when new offer button is clicked', () => {
        cy.findByRole('button', { name: /new offer/i }).click();

        cy.findByText(/add new offer/i).should('be.visible');
    });
});