describe('Register Page Test', () => {
    it('should visit the registration page and submit the form', () => {
      // Visit the registration page URL
      cy.visit('https://parabank.parasoft.com/parabank/register.html');
  
      // Verify that the registration page loaded correctly
      cy.url().should('include', 'register.html');
      cy.get('h1').should('contain', 'Register');
  
      // Fill out the registration form (replace the field names and values with actual values)
      cy.get('input[name="customer.firstName"]').type('John');
      cy.get('input[name="customer.lastName"]').type('Doe');
      cy.get('input[name="customer.address.street"]').type('123 Main St');
      cy.get('input[name="customer.address.city"]').type('Anytown');
      cy.get('input[name="customer.address.state"]').type('CA');
      cy.get('input[name="customer.address.zipCode"]').type('12345');
      cy.get('input[name="customer.phoneNumber"]').type('555-555-5555');
      cy.get('input[name="customer.ssn"]').type('123-45-6789');
      cy.get('input[name="customer.username"]').type('john_doe');
      cy.get('input[name="customer.password"]').type('password123');
      cy.get('input[name="repeatedPassword"]').type('password123');
  
      // Submit the form
      cy.get('input[value="Register"]').click();
  
      // Verify that registration is successful
      cy.url().should('include', 'welcome.htm');
      cy.get('h1').should('contain', 'Welcome');
    });
  });
  