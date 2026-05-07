Playwright E2E Tests – BlazeDemo (Versão Avançada)

Este repositório apresenta uma implementação avançada de automação de testes E2E para a aplicação web BlazeDemo.

O projeto reproduz o mesmo cenário de compra de passagens da versão básica, porém utilizando uma abordagem mais estruturada e escalável, baseada em BDD e boas práticas de arquitetura de testes.

📚 Contexto
Este projeto foi desenvolvido como prática e evolução de estudos em automação de testes, explorando uma abordagem mais robusta para o mesmo cenário E2E.

Aplica conceitos como BDD (Gherkin/Cucumber) e Page Object Model, com foco em organização, clareza e manutenção dos testes.

🛠️ Tecnologias
JavaScript
Playwright
Cucumber
Gherkin
Page Object Model (POM)

🧠 Abordagem de Testes
O projeto segue uma abordagem mais estruturada e escalável:

BDD (Behavior-Driven Development) com sintaxe Gherkin
Step definitions utilizando Cucumber
Separação das interações em Page Objects
Organização voltada para reutilização e manutenção
Clareza na relação entre cenários de negócio e implementação dos testes

📌 Cobertura de Testes
Atualmente, o projeto cobre o fluxo de reserva de voos no BlazeDemo:

Seleção de origem e destino
Busca de voos disponíveis
Escolha do voo
Preenchimento do formulário de compra
Finalização da reserva
Validação da mensagem de confirmação e valor da compra

O projeto inclui:

Um cenário positivo
Um Scenario Outline com dados de exemplo (abordagem DDT)
Estrutura inicial de Page Objects para as páginas da aplicação

🔗 Relação com o Projeto Básico
Este projeto implementa o mesmo cenário da versão básica disponível em:
[BlazeDemo147 (versão básica)](https://github.com/gabrielazenilins/BlazeDemo147)


No entanto, em vez de evoluir o mesmo código, este repositório foi criado para explorar uma abordagem diferente e mais estruturada de automação de testes.

Principais diferenças:

Uso de BDD com Gherkin e Cucumber
Aplicação do Page Object Model (POM)
Separação de responsabilidades entre features, steps e páginas
Maior escalabilidade para suítes de testes maiores
