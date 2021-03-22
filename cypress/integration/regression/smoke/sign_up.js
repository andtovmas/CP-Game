import SignUpPage from '../modules/SignUp';

describe('Sign_Up', () => {


  it('Sing Up', () => {


    const lp = new SignUpPage()


    lp.visit()
    lp.getIframe()

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


  it('Log out', () => {

    // cy.xpath('//*[@id="root"]/div/div/div/div/div/button').contains('PLAY NOW').click()
    cy.wait(5000)



    cy.xpath('//*[@id="root"]/div/div/div[1]/header/img', { timeout: 10000 }).should('be.visible');
    cy.xpath('//*[@id="root"]/div/div/div[1]/header/img').click()
    cy.reload()

    cy.get('.flEsNS', { timeout: 10000 }).should('be.visible')
    cy.get('.flEsNS').click()



  })








})
