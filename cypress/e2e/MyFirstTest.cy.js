describe('My First Test', () => {

    it('verify title positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM')
    })

    it('verify title negative', () => { 
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM123')
    })

    it('CSS Locators', () => {
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').clear();
        cy.get('#twotabsearchtextbox').type('books');
        cy.get('input#nav-search-submit-button').click();
    })
})