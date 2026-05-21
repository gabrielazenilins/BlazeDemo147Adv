const { Before, After, setDefaultTimeout} = require ('@cucumber/cucumber')
setDefaultTimeout(90000) //define o tempo limite de um comando em CcumberJS

Before(async function (){
    await this.open_browser ()
})

After (async function (){
    await this.close_browser()
})