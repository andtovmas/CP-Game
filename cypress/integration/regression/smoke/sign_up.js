describe('Sign_Up', () => {


  it('Sign_Up', () => {

      cy.visit('https://capital-battles.rock-west.net/')
      

      cy.xpath('//*[@id="root"]/div/div/a').click()
      cy.wait(5000)
      cy.xpath('//*[@id="root"]/div/div/div/div[2]/p/span').click()
      cy.wait(3000)
      //sign up 

      cy.get('Iframe').then(function ($iframe) {

          const $body = $iframe.contents().find('body')
          

        

          cy.wrap($body)
              .find('[name="login"]')
              .type(userID_Alpha())
              function userID_Alpha() {
                  var text = "";
                  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
              
                  for (var i = 0; i < 10; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
              
                  return text+'@gmail.com';
                }       
              
          cy.wrap($body)
              .find('[name="password"]')
              .type("@quality55")
              .should('have.value','@quality55');

          cy.wrap($body)
              .find('[name="termsConditions"]').click();

          cy.wrap($body)
              .find('button').click();





      });

      // cy.xpath('//*[@id="root"]/div/div/div/div/div/button').contains('PLAY NOW').click()
    cy.wait(5000)

      

      cy.xpath('//*[@id="root"]/div/div/div[1]/header/img', { timeout: 10000 }).should('be.visible');
      cy.xpath('//*[@id="root"]/div/div/div[1]/header/img').click()
      cy.xpath('//*[@id="modal"]/div[1]/ul/a[5]').click()






  })


})