const { assert } = require("chai")

describe('Assertions', ()=> {
    it('Implicit Assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrmlive')
        cy.url().should('not.contain', 'greenhrm')

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrmlive')
        .and('not.contain', 'greenhrm')

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('not.contain', 'green')

        cy.get('.orangehrm-login-branding').should('be.visible')
        .and('exist')
        cy.xpath('//a').should('have.length', 5)
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Username"]').should('have.value', 'Admin')
    })

    it('Explicit Assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        let expName = 'Sa M'
        cy.get('.oxd-userdropdown-name').then( (x) => {
            let accName = x.text();

            //BDD
            expect(accName).to.equal(expName)
            expect(accName).to.not.equal(expName)

            // TDD
            assert.equal(accName, expName)
            assert.notEqual(accName, expName)
        })
    })


})