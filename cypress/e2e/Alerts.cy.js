
describe('Alerts', ()=> {
    it('jS Alert', ()=> {
        cy.visit('https://testpages.eviltester.com/styled/alerts/alert-test.html')
        cy.get('#alertexamples').click();

        cy.get('#alertexplanation').should('have.text', 'You triggered and handled the alert dialog')
    })

    it('js confirm alert', ()=> {
        cy.visit('https://testpages.eviltester.com/styled/alerts/alert-test.html')
        cy.get('#confirmexample').click();
        cy.on('window:confirm', (t)=> {
            expect(t).to.contain('I am a confirm alert')
        })
         cy.on('window:confirm', ()=>false)
        cy.get('#confirmexplanation').should('have.text', 'You clicked Cancel, confirm returned false.')
    })

    it.only('js promt alert', ()=>{
        cy.visit('https://testpages.eviltester.com/styled/alerts/alert-test.html')
        cy.window().then((win)=> {
            cy.stub(win, 'prompt'), returns('changed me')
        })
        cy.get('#promptexample').click();
        cy.get('#confirmexplanation').should('have.text', 'You clicked Cancel, confirm returned false.')
    })
})