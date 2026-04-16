export default class HomePage {
   // Construtor com o mapeamento dos elementos/atributos
    constructor(page){
        this.page=page // o objeto do playwright interno recebe o objeto do playeright externo
        this.title='h1'
        this.origin='[name="fromPort"]'
        this.destination='[name="toPort"]'
        this.btnFindFlights='.btn_primary'
        this.url= 'https://blazedemo.com'

    }
    //Mapear as ações

    async select_origin(city_origin) {
        await this.page.locator(this.origin).selectOption(city_origin)

    }
    async select_destiny(city_destination) {
        await this.page.locator(this.destination).selectOption(city_destination)

    }
    async click_find_flights(){
        await this.page.locator(this.btnFindFlights).click()
    }

    // Jeito "Rebelde"- Verificação dentro do mapeamento

    async verify_welcome_message (){
        // Espera o seletor indicado carregar, que seria o texto que serve de título da página
        await this.page.waitForSelector (this.title) 
        // Extrai o texto que estiver no elemento e guardar a constante page_title
        const page_title = await this.page.textContent(this.title)
        
        if(!page_title.includes('Welcome to the Simple Travel Agency!')) {
            // o que fazer quando falha
            throw new Error('Titulo da Home ausente ou diferente do esperado')
        }
            

    }
}