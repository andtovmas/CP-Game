describe('PlayNow', () => {


    it(' Check the PlayNow', () => {

        cy.visit('https://capital-battles.rock-west.net/')

        cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div/button').contains('PLAY NOW').click()
        
        //check the error color of input
        cy.xpath('//*[@id="root"]/div/div/div/footer/div[2]').click()
        
        cy.get('.jazCJI').should('have.css','background-color').and('eq','rgb(202, 22, 68)')
        cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div[3]/div').click()
        cy.xpath('//*[@id="root"]/div/div/div/div[3]/div/input').type('test')
        cy.xpath('//*[@id="root"]/div/div/div/footer/div[2]').click()
        cy.wait(3000)
        //tutorial slide

      

        cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[1]/section/img').should('be.visible');
        cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[1]/section/p').contains('Capital Battles is based on real movements of currency rates.');
        cy.xpath('//*[@id="root"]/div/div/main/div[3]/img').click()
       
        cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[2]/section/img').should('be.visible');
        cy.get('.jMdceF ').contains('Symbols ')

        cy.xpath('//*[@id="root"]/div/div/main/div[3]/img[2]').click({ multiple: true })
        cy.xpath('//*[@id="root"]/div/div/main/div[3]/img[2]').click({ multiple: true })


        

        

        cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[6]/section/div/button').click()
        cy.wait(3000)
        cy.xpath('//*[@id="root"]/div/div/div/header/img').click()
        cy.xpath('//*[@id="modal"]/div[1]/img').click()
        //check time range select
         cy.xpath('//*[@id="root"]/div/div/div/main/div[1]/div/div[2]/div/div').click()
         cy.get('.ant-select-dropdown').click()
         cy.xpath('//*[@id="root"]/div/div/div/main/div[1]/div/div[2]/div/div').click()
         cy.get('.ant-select-dropdown').contains('15m').click()
         cy.xpath('//*[@id="root"]/div/div/div/main/div[1]/div/div[2]/div/div').click()
         cy.get('.ant-select-dropdown').contains('30m').click()

         
        












    })


    it('Check Burger_Menu', () =>{


      
        cy.xpath('//*[@id="root"]/div/div/div/header/img').click()
        cy.xpath('//*[@id="modal"]/div[1]/ul/a[1]/div').click()

         //tutorial slide

      

        cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[1]/section/img').should('be.visible');
        cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[1]/section/p').contains('Capital Battles is based on real movements of currency rates.');
        cy.xpath('//*[@id="root"]/div/div/main/div[3]/img').click()
       
        

        cy.xpath('//*[@id="root"]/div/div/main/div[3]/img[2]').click({ multiple: true })
        cy.xpath('//*[@id="root"]/div/div/main/div[3]/img[2]').click({ multiple: true })
          

        cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[6]/section/div/button').click()
        
        
        cy.xpath('//*[@id="root"]/div/div/div/header/img').click()
        //sign in form
        cy.xpath('//*[@id="modal"]/div[1]/ul/a[2]/div').click()
        cy.xpath('//*[@id="root"]/div/div/button').click()
        cy.xpath('//*[@id="root"]/div/div/a').click()
        cy.xpath('//*[@id="root"]/div/div/button').click()
        //sign up form
        cy.xpath('//*[@id="root"]/div/div/div/div[2]/div/div/button').contains('PLAY NOW').click()
        cy.xpath('//*[@id="root"]/div/div/div/div[3]/div/input').type('test')
        cy.xpath('//*[@id="root"]/div/div/div/footer/div[2]').click()
        cy.wait(3000)
        cy.xpath('//*[@id="root"]/div/div/div/header/img').click()
        cy.xpath('//*[@id="modal"]/div[1]/ul/a[3]/div').click()
        cy.get('.kHDhxH').contains('Create an account')
        cy.get('.kWnMjA').contains('to start your capital battles')
        cy.xpath('//*[@id="root"]/div/div/button').click()
        //help chat
        cy.xpath('//*[@id="root"]/div/div/button').click()
        
        cy.xpath('//*[@id="root"]/div/div/div/header/img').click()
        cy.xpath('//*[@id="modal"]/div[1]/ul/a[4]/div').click()


        cy.get('#fc_widget').then(function ($iframe) {

            const $body = $iframe.contents().find('body')


            cy.wrap($body)
                .find('.minimize')
                .click()


       


        });


        cy.xpath('//*[@id="modal"]/div[1]/ul/a[5]/div').click()
        cy.xpath('//*[@id="accordion__heading-raa-0"]/section/div[2]').click()
        cy.get('.kUUtUD').contains('Capital battles is a free game and does not require registration. The game is based on the real volatility of currency pairs.')
        cy.xpath('//*[@id="accordion__heading-raa-0"]/section/div[2]').click()
        cy.xpath('//*[@id="accordion__heading-raa-1"]/section/div[2]').click()
        cy.xpath('//*[@id="accordion__panel-raa-1"]/div/div').contains('В настоящей Политике описывается, как Capitalbattles https://www.capitalbattles.com/ (далее Capitalbattles или Мы) собирает, поддерживает, использует и раскрывает личную информацию о вас.')
        cy.xpath('//*[@id="accordion__heading-raa-1"]/section/div[2]').click()
        cy.xpath('//*[@id="root"]/div/div/main/div[1]/header/img').click()

    })

})