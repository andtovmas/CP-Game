describe('Profile Edit', () => {


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

                return text + '@gmail.com';
            }

            cy.wrap($body)
                .find('[name="password"]')
                .type("@quality55")
                .should('have.value', '@quality55');

            cy.wrap($body)
                .find('[name="termsConditions"]').click();

            cy.wrap($body)
                .find('button').click();

        });


        //tutorial slide

        cy.xpath('//*[@id="root"]/div/div/main/main/div[1]/div/div[1]/section/img', { timeout: 10000 }).should('be.visible');
        cy.xpath('//*[@id="root"]/div/div/main/main/div[1]/div/div[1]/section/p').contains('Capital Battles is based on real movements of currency rates.');
        cy.xpath('//*[@id="root"]/div/div/main/main/div[3]/img').click()

        cy.get('.gBLpIo').should('be.visible');
        cy.xpath('//*[@id="root"]/div/div/main/main/div[1]/div/div[2]/section/p[1]').contains('Symbols ')

        for (var i = 0; i < 4; i++) {

            cy.get('.jVffBF').click({ multiple: true })

        }

        cy.xpath('//*[@id="root"]/div/div/main/main/div[1]/div/div[6]/section/div/button').click()
        // cy.xpath('//*[@id="root"]/div/div/div/div/div/button').contains('PLAY NOW').click()
        cy.wait(5000)



        cy.xpath('//*[@id="root"]/div/div/div[1]/header/img', { timeout: 10000 }).should('be.visible');








    })


    it('Profile page edit', () => {


        cy.xpath('//*[@id="root"]/div/div/div[1]/main/div[1]/div[1]/div[1]').click()
        cy.get('.iQhdjw').contains('Reactivate your balance ')
        cy.xpath('//*[@id="modal"]/div[2]/section[3]/div/button').click()
        cy.get('.lkbHRn').contains('Personal account')
        cy.get(':nth-child(1) > .style__Input-xi7emb-1').type('quality')
        cy.get(':nth-child(2) > .style__Input-xi7emb-1').type('quality')
        cy.get(':nth-child(3) > .style__Input-xi7emb-1').type('+37455000000')
        cy.get('.eNFVTX').click()
        cy.get('[style="display: flex;"] > :nth-child(1) > input').type('1')
        cy.get('[style="display: flex;"] > :nth-child(2) > input').type('2')
        cy.get('[style="display: flex;"] > :nth-child(3) > input').type('3')
        cy.get('[style="display: flex;"] > :nth-child(4) > input').type('4')
        cy.get('.eNFVTX').click()
        cy.wait(3000)
        cy.xpath('//*[@id="root"]/div/div/div[2]/section[1]/h2').contains('Thank you!')
        cy.get('.hkYkNT').contains('Your account was successfully activated')
        cy.xpath('//*[@id="root"]/div/div/div[2]/section[3]/div/div[1]/button').contains('START A BATTLE')
        cy.xpath('//*[@id="root"]/div/div/div[2]/section[3]/div/div[2]/button').contains('TOP-UP').click()

        

        for (var i = 0; i < 3; i++) {

            cy.get('.jVffBF').click()


        }

        cy.xpath('//*[@id="root"]/div/div/main/div[1]/div/div[4]/section/div/button/span').contains('get my bonus').click()
    })










})