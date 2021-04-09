import SignInPage from '../modules/SignIn';

describe('KYC Reject', () => {

    it('Sign_In', () => {


        const lg = new SignInPage()



        lg.visit()
        lg.getIframe()


    })



    it('tutorial slide', () => {




        // cy.xpath('//*[@id="root"]/div/div/main/main/div[1]/div/div[1]/section/img')
        // cy.get('p[class=.hmgYLV] ').contains('Capital Battles is based on real movements of currency rates.');
        cy.get('.jVffBF').click()


        // cy.get('.gcAqpC ').contains('Symbols ')

        for (var i = 0; i < 4; i++) {

            cy.get('.jVffBF').click({ multiple: true })

        }

        cy.get('.foJGIl button').click()
        // cy.xpath('//*[@id="root"]/div/div/div/div/div/button').contains('PLAY NOW').click()
        cy.wait(5000)



        cy.xpath('//*[@id="root"]/div/div/div[1]/header/img', { timeout: 10000 }).should('be.visible');









    });


    it('Kyc document upload', () => {

        cy.wait(5000)

        cy.visit('https://capital-battles.rock-west.net/kyc')




    })



})