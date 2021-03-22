class SignUpPage {


    visit() {
        cy.visit('https://capital-battles.rock-west.net/')


        cy.xpath('//*[@id="root"]/div/div/a').click()
        cy.wait(5000)
        cy.xpath('//*[@id="root"]/div/div/div/div[2]/p/span').click()
        cy.wait(3000)
    }
    //sign up 
    getIframe() {
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
    }
}


export default SignUpPage;