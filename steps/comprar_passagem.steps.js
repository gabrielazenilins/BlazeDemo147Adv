const { Given, When, Then } = require('@cucumber/cucumber')
const {expect}= require('@playwright/test')
// import {Given, When, Then, And} from '@cucumber/cucumber'
// import this.homePage from '../pages/home.page'
// import this.reservePage from '../pages/this.this.reservePage'
// import this.purchasePage from '../pages/purchase.page'
// import this.confirmationPage from '../pages/confirmation.page'

//Home 
Given('que estou no site Blazedemo', async function () {
    await this.page.goto(this.homePage.url) //Abre o browser nesta URL
    await this.homePage.verify_welcome_message() //Confirma se aparece a mensagem
});

When('seleciono a origem como {string} e seleciono o destino como {string}', async function (origin, destination) {
    await this.homePage.select_route(origin, destination)
});


// Versão que clica no botão a partir do texto escrito no botão
When('clico no botao {string}',{ timeout: 20000 }, async function (texto_botao) {
    await this.homePage.click_find_flights(texto_botao)
});
 
// Exemplo conforme o cenário simples (sem o texto "Find Flghts")
// Se for sempre clicar no botão olhando apenas o seletor
When('clico no botao',{ timeout: 20000 }, async function () {
    // Não precisari ter recebido o parametro, seria só dar instrução de clicar
   await  this.homePage.click_find_flights()
});

//Cenario simples - verifica a mensagem de cidades de origem e destino
Then('verifico o texto {string}', async function (message_origin_destination) {
   await  this.reservePage.verify_destination(message_origin_destination)
});


//Serve para qualquer pagina
Then('verifico se a url contem {string}', async function (pagina) {
    
     expect(this.page).toHaveURL(`/${pagina}\.php/`)

});


When('seleciono o voo {string} da companhia {string}', async function (origin, destination) {
   await this.reservePage.select_flights(flight,airline)

});

//Purchase


When('preencho o nome como {string}', async function (name) {
await this.purchasePage.fill_name(name)
});


When('seleciono a bandeira do cartão como {string}',async function (card) {
await this.purchasePage.select_card(card)
});


When('marco a opção {string}', async function (string) {
    //Nao estamos usando o parametro que é recebido no bloco
 await   this.purchasePage.select_remember()
});


When('clico no botão {string}', async function (string) {
//Nao estamos usando o parametro que é recebido no bloco
   await  this.purchasePage.buy_flight()

});


Then('se exibe a mensagem de agradecimento  {string}', async function (string) {
await expect(this.page.locator(this.confirmationPage.message)).toHaveText('Thank you for your purchase today!!')
});


Then('se contem a informação {string}]como {string}', async function (anount, price) {
//encontra a linha em que esta escrita a quantia e o preço
    const line_price= await this.page.locator('tr').filter({has: this.page.locator('td',{ hasText: amount})})
//na linha que contem o texto amount verifica se contem o preço
   await expect(line_price).toContainText(price)
});

// Esquema de Cenário- Verifica a mensagem contendo as duas cidades que recebe como parâmetro
Then('verifico o texto Flights from {string} to {string}', async function (origin, destination) {
    await expect(this.page.locator(this.reservePage.title)).toHaveText (`Flights from'${origin} to ${destination}:`)

});

