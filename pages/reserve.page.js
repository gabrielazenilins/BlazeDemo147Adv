export default class ReservePage {

    constructor(page){
        this.page = page
        this.title = 'h3'
        this.url = '/reserve\.php/'
        
    }

    async select_flights(flight, airline){
        await this.page.getByRole('row',{name: `Choose This Flight ${flight} ${airline}`}).getByRole('button').click()
    }
    //Eu nao menciono aqui no constructor origin e destination para forçar a continuidade de bater o nome
    async verify_destination(origin, destination){
        await this.page.waitForSelector(this.title)
        const titleSection = await this.page.textContent(this.title)

        if(!titleSection.includes(`Flights from ${origin} to ${destination}:`)){
            throw new Error('Titulo da pagina Reserve ausente ou diferente do esperado')

        }

    }
    async verify_destination(message_origin_destination){
        await this.page.waitForSelector(this.title)
        const titleSection = await this.page.textContent(this.title)

        if(!titleSection.includes(`Flights from ${origin} to ${destination}:`)){
            throw new Error('Titulo da pagina Reserve ausente ou diferente do esperado')

        }

    }

        async verify_url(){
        await this.page.waitForSelector(this.title)
        //const titleSection = await this.page.textContent(this.title)

        if(!this.page.toHaveURL(this.url)){
            throw new Error('URL da pagina Reserve ausente ou diferente do esperado')
        }
        }

    }

