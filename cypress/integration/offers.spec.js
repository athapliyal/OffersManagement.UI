describe('Offers page', () => {
    it('should be visible when logged in', () => {
        cy.visit('http://localhost:3000');

        cy.findByLabelText(/Username/i).clear().type('Chuck');
        cy.findByLabelText(/Password/i).clear().type('Norris');
        cy.findByRole('button', { name: /log in/i }).click();
      
        cy.findByText(/All Offers/i, { timeout: 10000 }).should('be.visible');
    });

    it('should have the offers table with all the columns', () => {
        cy.findByText(/title/i).should('be.visible');
        cy.findByText(/category/i).should('be.visible');
        cy.findByText(/description/i).should('be.visible');
        cy.findByText(/start date and time/i).should('be.visible');
        cy.findByText(/end date and time/i).should('be.visible');
        cy.findByText(/status/i).should('be.visible');
        cy.findByText(/actions/i).should('be.visible');
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