describe('Login page', () => {
    it('should be visible when app is started', () => {
        cy.visit('http://localhost:3000');

        cy.findByText(/Welcome, please log in to your account/i).should('be.visible');
    });

    it('should throw us validation errors when no username and password is provided', () => {
        cy.findByRole('button', { name: /log in/i }).click();

        cy.findByText(/please enter username/i);
        cy.findByText(/please enter password/i);
    });

    it('should take us to offers page when logged in', () => {
        cy.findByLabelText(/Username/i).clear().type('Chuck');
        cy.findByLabelText(/Password/i).clear().type('Norris');
        cy.findByRole('button', { name: /log in/i }).click();
      
        cy.findByText(/All Offers/i, { timeout: 10000 }).should('be.visible');
    });

    it('should log us out and take us back to login screen', () => {
        cy.findByText(/logout/i).click();

        cy.findByText(/Welcome, please log in to your account/i).should('be.visible');
    });
});