const {input_option, list_locations,input_locations} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view)
{
    while (true)
    {
        
        const {model, currentView} = state
        const {title, table} = currentView
        
        console.clear()
        console.log(title)
        printTable(table)
        
        const {choosenOption} = await input_option(model)
              
        if(choosenOption === 'Add City')
        {
            const {location} = await input_locations(model)

            const newModel = update(model,location,choosenOption)

            state = {
            ...state,
            model: newModel,
            currentView: view(newModel)
            }
        }
        else
        {
            const {location} = await list_locations(model)
            const newModel = update(model,location,choosenOption)

            state = {
            ...state,
            model: newModel,
            currentView: view(newModel)
            }
        }
    }  
}

module.exports = 
{
    app
}