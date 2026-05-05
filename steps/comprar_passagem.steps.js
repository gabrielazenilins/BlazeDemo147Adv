import {Given, When, Then, And} from '@cucumber/cucumber'
import HomePage from '../pages/home.page'
import ReservePage from '../pages/reserve.page'
import PurchasePage from '../pages/purchase.page'
import ConfirmationPage from '../pages/confirmation.page'

//Home 
Given('que estou no site Blazedemo', function ({page}) {
    page.goto(HomePage.url) //Abre o browser nesta URL
    HomePage.verify_welcome_message() //Confirma se aparece a mensagem
});


When('seleciono a origem como {string} e o destino como {string}', async function (origin, destination) {
    await homePage.select_route(origin, destination)
})

// Versão que clica no botão a partir do texto escrito no botão
And('clico no botao {string}', function (texto_botao) {
    HomePage.click_find_flights(texto_botao)
});
 
// Exemplo conforme o cenário simples (sem o texto "Find Flghts")
// Se for sempre clicar no botão olhando apenas o seletor
And('clico no botao', function () {
    // Não precisari ter recebido o parametro, seria só dar instrução de clicar
    HomePage.click_find_flights()
});

//Cenario simples - verifica a mensagem de cidades de origem e destino
Then('verifico o texto {string}', function (message_origin_destination) {
    ReservePage.verify_destination(message_origin_destination)
});


//Serve para qualquer pagina
Then('verifico se a url contem {string}', function (name_page) {
    
    expect(page).toHave(`/${name_page}\.php/`)

});


When('seleciono o voo {string} da companhia {string}', function (origin, destination) {
    ReservePage.select_flights(flight,airline)

});

//Purchase


When('preencho o nome como {string}', function (name) {
PurchasePage.fill_name(name)
});


When('seleciono a bandeira do cartão como {string}', function (card) {
PurchasePage.select_card(card)
});


When('marco a opção {string}', function (string) {
    //Nao estamos usando o parametro que é recebido no bloco
    PurchasePage.select_remember()
});


When('clico no botão {string}', function (string) {
//Nao estamos usando o parametro que é recebido no bloco
    PurchasePage.buy_flight()

});


Then('se exibe a mensagem de agradecimento  {string}', function (string) {
expect(page.locator(ConfirmationPage.message)).toHaveText('Thank you for your purchase today!!')
});


Then('se contem a informação {string}]como {string}', function (anount, price) {
//encontra a linha em que esta escrita a quantia e o preço
    const line_price= page.locator('tr').filter({has: page.locator('td',{ hasText: amount})})
//na linha que contem o texto amount verifica se contem o preço
    expect(line_price).toContainText(price)
});

// Esquema de Cenário- Verifica a mensagem contendo as duas cidades que recebe como parâmetro
Then('verifico o texto Flights from {string} to {string}', function (origin, destination) {
    expect(page.locator(ReservePage.title)).toHaveText (`Flights from'${origin} to ${destination}:`)

});

