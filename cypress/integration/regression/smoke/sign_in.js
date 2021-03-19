import cookies from 'js-cookie'

describe('Sign_In', () => {


    it('Sign_In', () => {

        cy.visit('https://capital-battles-auth.rock-west.net/')


        cy.xpath('//*[@id="root"]/div/div/a').click()



        // Cypress.Cookies.defaults({
        //     preserve: "api_token"
        // })

        // let cookie

        // cy.getCookie('api_token')
        //     .should('exist')
        //     .then((c) => {
        //         // save cookie until we need it
        //         cookie = c
        //     })



        // // cy.request({
        // //     url: 'https://capital-battles.rock-west.net/login',
        // //     headers: {
        // //         'Cookie': 'api_token' + c
        // //     }
        // // })

        // cy.request({
        //     method: 'GET',
        //     url: 'https://capital-battles.rock-west.net/login', // baseUrl is prepended to url
        //     form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        //     body: {
        //         api_token: cookie

        //     }
        // })

        // cy.wait(5000)

        // cy.visit('https://capital-battles.rock-west.net/login')
        // cy.wait(5000)

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
        cy.xpath('//*[@id="modal"]/div[1]/ul/a[5]/div').click()






    })


})