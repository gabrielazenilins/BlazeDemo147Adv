const { Before, After} = require ('@cucumber/cucumber')

Before(async function (){
    await this.open_browser ()
})

After (async function (){
    await this.close_browser()
})