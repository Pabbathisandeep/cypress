describe('Dropdown', () => {
    it.skip('Dropdwon with select', ()=> {
    cy.visit('https://demo.seleniumeasy.com/')
    cy.get('#btn_basic_example').click();
    cy.xpath('//a[@class ="list-group-item" and normalize-space()="Select Dropdown List"]').click();
    cy.get('#select-demo').select('Tuesday')
    cy.get('#select-demo').should('have.value', 'Tuesday')
    })

    it.skip('Dropdown without select',()=> {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')
    })

    it.skip('Auto Suggest Dropdown', ()=> {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
    })

    it('Dynamic Dropdown', ()=> {
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('Cypress Automation')
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if($el.text()=="cypress automation tutorial"){
                cy.wrap($el).click()
            }
        })
        cy.get('.gLFyf').should('have.value', 'cypress automation tutorial')
    })
})