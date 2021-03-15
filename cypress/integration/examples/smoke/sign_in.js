describe('Sign_In', () => {


    it('Sign_In', () => {

        cy.visit('https://capital-battles.rock-west.net/')

        cy.xpath('//*[@id="root"]/div/div/a').click()
        


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

        

        cy.xpath('//*[@id="root"]/div/div/div/header/img', { timeout: 10000 }).should('be.visible');
        cy.xpath('//*[@id="root"]/div/div/div/header/img').click()
        cy.xpath('//*[@id="modal"]/div[1]/ul/a[5]').click()






    })


})