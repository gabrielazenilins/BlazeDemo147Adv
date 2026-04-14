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

    Scenario Outline:Compra com Sucesso DDT 
        Given que estou no site Blazedemo
        When  seleciono a "<origem>" e o "<destino>"
        Then verifico o texto Flights from "<origem>" to "<destino>"
        And se a URL contem "reserve"
        When seleciono o voo "<voo>" da companhia "<companhia>" 
        Then verifico se a url contem "purchase"
        When preencho o nome como "<nome>" 
        And seleciono a bandeira do cartão como "<bandeira>"
        And marco a opção "remember me"
        And clico no botão "Purchase Flight"
        Then verfico se a url contem "confirmation"
        And se exibe o mensagem de agradecimento  "Thank you for your purchase today!"
        And se contem a informação "Amount"como "<preco>

        Examples:
        |   origem  | destino  | voo  |   companhia   | nome         |  bandeira       | preco  |
        | São Paolo | London   | 9696 | Aer Lingus    | Charlie Brown | Visa           |555 USD |
        | Portland  | Dublin   | 12   | Virgin America| Harry Potter | American Express|555 USD |  
        | Boston    | New York | 4346 |  Lufthansa    | John SMith   | Dinner's Club   |555 USD |