import {Given, When, Then, And} from '@cucumber/cucumber'
import HomePage from '../pages/home.page'
import ReservePage from '../pages/reserve.page'
import PurchasePage from '../pages/purchase.page'
import ConfirmationPage from '../pages/confirmation.page'


Given('que estou no site Blazedemo', function ({page}) {
    page.goto(HomePage.url) //Abre o browser nesta URL
    HomePage.verify_welcome_message() //Confirma se aparece a mensagem


});


When('seleciono a origem como {string}', function (origin) {
    HomePage.select_origin(city_origin)
});

And ('seleciono o destino como {string', function (destination){
    HomePage.select_destination(destination)
});

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

Then('verifico o texto {string}', function (message_origin_destination) {
    ReservePage.verify_destination(message_origin_destination)
});


And('se a URL contem {string}', function (string) {

});


When('seleciono o voo {string} da companhia {string}', function (string, string2) {

});


Then('verifico se a url contem {string}', function (string) {

});


When('preencho o nome como {string}', function (string) {

});


When('seleciono a bandeira do cartão como {string}', function (string) {

});


When('marco a opção {string}', function (string) {

});


When('clico no botão {string}', function (string) {

});


Then('verfico se a url contem {string}', function (string) {

});

Then('se exibe oa mensagem de agradecimento  {string}', function (string) {

});


Then('se contem a informação "Amount"como {string}', function (string) {

});


Then('verifico o texto Flights from {string} to {string}', function (string, string2) {

});

