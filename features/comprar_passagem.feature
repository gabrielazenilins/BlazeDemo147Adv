Feature: Compra de Passagem
    Scenario: Compra com Sucesso 
        Given que estou no site Blazedemo
        When  seleciono a origem como "São Paolo" e o destino como "London"
        Then verifico o texto "Flights from São Paolo to London:"
        And se a URL contem "reserve"
        When seleciono o voo "9696" da companhia "Aer Lingus"
        Then verifico se a url contem "purchase"
        When preencho o nome como "Charlie Brown"
        And seleciono a bandeira do cartão como "amex"
        And marco a opção "remember me"
        And clico no botão "Purchase Flight"
        Then verfico se a url contem "confirmation"
        And se exibe oa mensagem de agradecimento  "Thank you for your purchase today!"
        And se contem a informação "Amount"como "555 USD"
