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
        else if(choosenOption === 'Update City')
        {
            const {location} = await list_locations(model)
            console.log('perro5')
            const newModel = update(model,location,choosenOption)
            console.log('perro7')

            state = {
            ...state,
            model: newModel,
            currentView: view(newModel)
            }

        }
        else if(choosenOption === 'Delete City')
        {
            const {location} = await list_locations(model)
            const {name} = model

            for(let i = 0; i< name.length; i++)
            {
                if (name[i] === location)
                {
                    var remove = table.splice(i,1)
                }
            }
        }
        
       



    }  
}

module.exports = 
{
    app
}