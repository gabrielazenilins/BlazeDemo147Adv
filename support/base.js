const {setBaseConstructor} = require('@cucumber/cucumber')
const {chromium, firefox, webkit} = require('@playwright/test')
const HomePage = require('../pages/home.page')
const ReservePage = require('../pages/reserve.page')
const PurchasePage = require('../pages/purchase.page')
const ConfirmationPage = require('../pages/confirmation.page')

class Base{
    async open_browser(){
        const browsers = {chromium, firefox, webkit}
        const browser_name = process.env.BROWSER || 'chromium'
        
        this.browser = await browsers[browser_name].launch({ headless: process.env.HEADLESS !== 'false'})
        this.context = await this.browser.newContect({baseURL: 'https://www.blazedemo.com'})
        this.page = await this.context.newPage()
    
        this.homePage = new HomePage(this.page)
        this.reservePage = new ReservePage(this.page)
        this.purchasePage = new PurchasePage(this.page)
        this.confirmationPage = new ConfirmationPage(this.page)
    }

    async close_browser(){
        if (this.context) await this.context.close()
        if (this.browser) await this.browser.close()    
    }
}

setBaseConstructor(Base)