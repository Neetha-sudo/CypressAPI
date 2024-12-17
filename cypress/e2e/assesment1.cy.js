beforeEach(() => {

    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  
  })
it('this is Signup test', function() {
    // expect(this.valueVariable).to.contains('Log In');
    cy.get('a[href*="lookup.htm"]').click();
    cy.get('#firstName').type('Neetha');
    cy.get('#lastName').type('Shivanna');
    cy.get('#address\\.street').type('26 ropery road');
    cy.get('#address\\.city').type('Newcastle');
    cy.get('#address\\.state').type('Northumberland');
    cy.get('#address\\.zipCode').type('NE8 "HP');
    cy.get('#ssn').type('888yyyy');
    cy.get('input[class="button"]').contains('Find My Login Info').click();
    cy.get('.error').should('contain','The customer information provided could not be found.');
  
  })
  it('This is Admin Link',function(){
    cy.get('a[href*="admin.htm"]').contains('Admin').click();
   
    cy.get('#accessMode1').check();
    cy.get('#soapEndpoint').clear('bn');
    cy.get('#soapEndpoint').type('bnbnb');
    cy.get('#restEndpoint').clear('nbm');
    cy.get('#restEndpoint').type('nbmbmbmb');
    cy.get('#endpoint').clear('b');
    cy.get('#endpoint').type('bbbb');
    cy.get('#adminForm > .button').click();
    cy.get('#rightPanel > p > b').should('contain','Settings saved successfully.');

  })