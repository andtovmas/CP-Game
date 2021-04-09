class SignInPage {

    visit() {
        cy.visit('https://capital-battles.rock-west.net/')


        cy.xpath('//*[@id="root"]/div/div/a').click()



    }

    //sign in

    getIframe() {

        cy.wait(5000)

        cy.get('Iframe').then(function ($iframe) {

            const $body = $iframe.contents().find('body')


            cy.wrap($body)
                .find('[name="login"]')
                .type("024@gmail.com");


            cy.wrap($body)
                .find('[name="password"]')
                .type("123");



            cy.wrap($body)
                .find('button').click();



        });
    }

}

export default SignInPage;