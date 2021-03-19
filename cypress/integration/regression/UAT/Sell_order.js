

describe('PlayNow/Sell_order', () => {


    it(' Check the PlayNow', () => {

        cy.visit('https://capital-battles.rock-west.net/')

        cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div/button').contains('PLAY NOW').click()
        cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div[3]/div').click()
        cy.xpath('//*[@id="root"]/div/div/div/div[3]/div/input').type('test')
        cy.xpath('//*[@id="root"]/div/div/div/footer/div[2]').click()
        cy.wait(3000)
        //tutorial slide

      

        cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[1]/section/img').should('be.visible');
        cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[1]/section/p').contains('Capital Battles is based on real movements of currency rates.');
        cy.xpath('//*[@id="root"]/div/div/main/div[3]/img').click()
       
        // cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[2]/section/img').should('have.attr', 'src', 'onboarding-1.282b05be.svg').should('include', 'onboarding-1.282b05be.svg')

        cy.xpath('//*[@id="root"]/div/div/main/div[3]/img[2]').click({ multiple: true })
        cy.xpath('//*[@id="root"]/div/div/main/div[3]/img[2]').click({ multiple: true })


        

        

        cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[6]/section/div/button').click()
        cy.wait(3000)
        cy.xpath('//*[@id="root"]/div/div/div/header/img').should('be.visible').click()
        cy.xpath('//*[@id="modal"]/div[1]/img').click()

    })

    it('Sell_order',()=>{
       
          //sell order
         cy.xpath('//*[@id="root"]/div/div/div/main/div[4]/div[2]/button').click()
         cy.wait(5000)
         //find footer svg icon
         cy.get('.flZMTO').should('have.css','font-size','18px')
         cy.get('.ekLkkF').find('svg')
           //surrender
          cy.xpath('//*[@id="root"]/div/div/div/main/div[4]/button').click()
          //check the text
          cy.xpath('//*[@id="modal"]/div[3]/main/h1',{ timeout: 3000 }).contains('You left the battlefield')
          cy.xpath('//*[@id="modal"]/div[3]/main/h5').contains('Человек, который убегает от своего страха, может обнаружить, что он лишь сократил путь, чтобы встретить его.');
          cy.xpath('//*[@id="modal"]/div[3]/main/div/button').click()
         
    })



})
