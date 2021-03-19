describe('Sign_In', () => {


    it('Sign_In', () => {

        cy.visit('https://capital-battles.rock-west.net/')

        cy.xpath('//*[@id="root"]/div/div/a').click()
        cy.wait(5000)


        //sign in

        cy.get('Iframe').then(function ($iframe) {

            const $body = $iframe.contents().find('body')


            cy.wrap($body)
                .find('[name="login"]')
                .type("aaa@gmail.com");


            cy.wrap($body)
                .find('[name="password"]')
                .type("@quality55");



            cy.wrap($body)
                .find('button').click();



        });
        cy.xpath('//*[@id="root"]/div/div/div/div/div/button').contains('PLAY NOW').click()
        cy.wait(5000)

        //check the trading pairs
        
        cy.xpath('//*[@id="root"]/div/div/div/header/div/div/div[2]/div/div/div/span[2]').click()
        cy.xpath('/html/body/div[5]/div/div/div/div[2]/div[1]/div/div/div[2]/div/div').click()

        cy.reload()
        cy.wait(5000)

        cy.get('.hYbaXG').find('svg','http://www.w3.org/2000/svg')
        
       
        






    })


})