Feature: Compra de Passagem
    Scenario: Compra com Sucesso 
        Given que estou no site Blazedemo
        When seleciono a origem como "São Paolo" e seleciono o destino como "London"
        And clico no botao
        Then verifico o texto "Flights from São Paolo to London:"
        And verifico se a url contem "reserve"
        When seleciono o voo "9696" da companhia "Aer Lingus"
        Then verifico se a url contem "purchase"
        When preencho o nome como "Charlie Brown"
        And seleciono a bandeira do cartão como "amex"
        And marco a opção "Remember me"
        And clico no botão "Purchase Flight"
        Then verifico se a url contem "confirmation"
        And se exibe a mensagem de agradecimento  "Thank you for your purchase today!"
        And se contem a informação "Amount" como "555 USD"

    Scenario Outline:Compra com Sucesso DDT 
        Given que estou no site Blazedemo
        When seleciono a origem como "<origin>" e seleciono o destino como "<destination>"
        And clico no botao "Find Flights"
        Then verifico o texto Flights from "<origin>" to "<destination>"
        And verifico se a url contem "reserve"
        When seleciono o voo "<flight>" da companhia "<airline>" 
        Then verifico se a url contem "purchase"
        When preencho o nome como "<name>" 
        And seleciono a bandeira do cartão como "<cardType>"
        And marco a opção "remember me"
        And clico no botão "Purchase Flight"
        Then verifico se a url contem "confirmation"
        And se exibe a mensagem de agradecimento  "Thank you for your purchase today!"
        And se contem a informação "Amount" como "<price>"

        Examples:
        |   origin  | destination  | flight  |   airline     | name            |  cardType         | price  |
        | São Paolo | London       | 9696    | Aer Lingus    | Charlie Brown   | Visa              |555 USD |
        | Portland  | Dublin       | 12      | Virgin America| Harry Potter    | American Express  |555 USD |  
        | Boston    | New York     | 4346   |  Lufthansa     | John Smith       | Diner's Club    |555 USD |
