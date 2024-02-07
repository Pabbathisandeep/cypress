describe('RadioButton and CheckBox', () => {
    it('RadioButton', () => {
        cy.visit('https://demo.seleniumeasy.com/')
        cy.get('#btn_basic_example').click();
        cy.xpath('//a[@class ="list-group-item" and normalize-space()="Radio Buttons Demo"]').click();
        cy.xpath('//input[@name="optradio" and @value="Male"]').should('be.visible')
        .and('not.be.checked')
        .click()
        .and('be.checked')
        cy.get('#buttoncheck').click();
        let expText = "Radio button 'Male' is checked"
        cy.get('.radiobutton').then((x) => {
            let result = x.text();
            expect(result).to.equal(expText)
        })
    })

    it('Checkboxes', () => {
        cy.visit('https://demo.seleniumeasy.com/')
        cy.get('#btn_basic_example').click();
        cy.xpath('//a[@class ="list-group-item" and normalize-space()="Check Box Demo"]').click();
        cy.get('.cb1-element').should("not.be.checked")
          // this will check all the checkboxes
        cy.get('.cb1-element').check()
        cy.get('.cb1-element').should("be.checked")
          // this will uncheck all the checkboxes
        cy.get('.cb1-element').uncheck()
        // this will check first checkbox
        cy.get('.cb1-element').first().check().should('be.checked')
        // this will check last checkbox
        cy.get('.cb1-element').last().check().should('be.checked')
    })
})