/// export default class PurchasePage {//padrao para type = module
class PurchasePage {

    constructor(page){
        this.page = page
        this.url = '/purchase\.php/'
        this.name = '#inputName'
        this.card = '[name="cardType"]'
        this.remember = '#rememberMe'
        this.btn_purchase_flight = '.btn.btn-primary'
    }

//Mapear as ações, seguindo o padrão, não inclui verificação 

 async fill_name(name){
    await this.page.locator(this.name).fill(name)
 }
async select_card(card){
    await this.page.locator(this.card).selectOption(card)
}
async select_remember(){
    await this.page.locator(this.remember).check()
}
async buy_flight (){
    await this.page.locator(this.btn_purchase_flight).click()
}
    
}
module.exports = PurchasePage