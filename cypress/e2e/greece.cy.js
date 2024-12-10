describe('This is my first test', () => {

before(() => {

  cy.log('Before all')

})

beforeEach(() => {

  cy.visit('https://parabank.parasoft.com/parabank/index.htm')

})

it('Login in to the bank', ()=>{
  cy.log('This is login')
  //cy.get('[name="username"]').type('Petros')
  //cy.get('[name="password"]').type('Petros')
  //cy.get('[value="Log In"]').click()

  //cy.get('a').contains('Forgot login info?').click()

  cy.get('input.button').invoke('val').as('valueVariable')


  cy.get('@valueVariable').then(thisatext=> {

    expect(thisatext).to.contains('Log In')
  })

})

 
  it('I want to visit Parabank', () => {

    cy.get('.contact').click()
    cy.get('h1.title').should('have.text','Customer Care')
    cy.get('#name').type('Petros')
    cy.get('#email').type('peteplako@yahoo.com')
    cy.get('#phone').type('9999999')
    cy.get('#message').type('aaaaaaa')
    cy.get('input.button').contains('Send to Customer Care').click()
    //cy.get('#rightPanel>p').should('have.text','Thank you Petros')

    
  })

  it('this is the second test', ()=>{
     cy.log('The second test is started')
  })


  it.only('this is my cypress test', function() {
    // expect(this.valueVariable).to.contains('Log In');
    cy.get('a[href*="lookup.htm"]').click();
    cy.get('#firstName').type('Neetha');
    cy.get('#lastName').type('Shiv');
    cy.get('#address\\.street').type('26 ropery road');
    cy.get('#address\\.city').type('Newcastle');
    cy.get('#address\\.state').type('Northumberland');
    cy.get('#address\\.zipCode').type('NE8 "HP');
    cy.get('#ssn').type('888yyyy');
    cy.get('input[class="button"]').contains('Find My Login Info').click();
    cy.get('.error').should('contain','The customer information provided could not be found.');
    cy.get('a[href*="admin.htm"]').contains('Admin').click();
    /* ==== Generated with Cypress Studio ==== */
   // cy.get('.leftmenu > :nth-child(6) > a').click();
    cy.get('#accessMode1').check();
    cy.get('#soapEndpoint').clear('bn');
    cy.get('#soapEndpoint').type('bnbnb');
    cy.get('#restEndpoint').clear('nbm');
    cy.get('#restEndpoint').type('nbmbmbmb');
    cy.get('#endpoint').clear('b');
    cy.get('#endpoint').type('bbbb');
    cy.get('#adminForm > .button').click();
    /* ==== End Cypress Studio ==== */
  })



  after(() => {

    cy.log('After all')
  
  })

  afterEach(() => {

    cy.log('After Each')
  
  })
  

})