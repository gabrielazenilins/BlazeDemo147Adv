export default class HomePage {
   // Construtor com o mapeamento dos elementos
    constructor(page){
        this.page=page // o objeto do playwright interno recebe o objeto do playeright externo
        this.title='h1'
        this.origin='[name="fromPort"]'
        this.destiny='[name="toPort"]'
        this.btnFindFlights='.btn_primary'
        this.url= 'https://blazedemo.com'

    }
    //Mapear as ações

    async select_origin(city_origin) {
        await this.page.locator(this.origin).selectOption(city_origin)

    }
    async select_destiny(city_destiny) {
        await this.page.locator(this.destiny).selectOption(city_destiny)

    }
    async click_find_flights(){
        await this.page.locator(this.btnFindFlights).click()
    }

// Jeito "Rebelde"- Verificação dentro do mapeamento
    async verify_welcome_message (){
        await expectFailure(title)
        
    }
}