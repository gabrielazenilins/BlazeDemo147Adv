
// export default class HomePage { //padrao para type = module
class HomePage { //padrão para type = commonjs


    constructor(page){
        this.page = page
        this.title = 'h1'
        this.origin = '[name="fromPort"]'
        this.destination = '[name="toPort"]'
        this.btnFindFlights = 'btn btn-primary'
        this.url = 'https://www.blazedemo.com'
    }

    // Actions

    async select_route(city_origin, city_destination){
        await this.page.locator(this.origin).selectOption(city_origin)
        await this.page.locator(this.destination).selectOption(city_destination)

    }
   

    // Click using selector (no parameter)
    async click_find_flights(){
        await this.page.locator(this.btnFindFlights).click()
    }

    // Click using button text (parameter)
    async click_find_flights_by_text(button_text){
        await this.page.getByRole('button', { name: button_text }).click()
    }

    // Validation (your "rebel" style)
    async verify_welcome_message(){
        await this.page.waitForSelector(this.title)

        const page_title = await this.page.textContent(this.title)

        if(!page_title.includes('Welcome to the Simple Travel Agency!')){
            throw new Error('Home title missing or incorrect')
        }
    }
}

module.exports = HomePage //padrão quando tpe = commonjs