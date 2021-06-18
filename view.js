const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle()
{
    return chalk.cyan(
        figlet.textSync
        (
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model)
{
    const list = []
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    let cantidadCiudades =  name.length 

    if (cantidadCiudades === 0)
    {
        list.push({
            'NAME':'',
            'TEMPERATURE':'',
            'MAX': '',
            'MIN': ''
        })
    }
    else
    {
        for(let i = 0 ; i < cantidadCiudades; i++)
        {
            list.push({
                'NAME':name[i],
                'TEMPERATURE':temp[i],
                'MAX': max[i],
                'MIN': min[i]
            })
        }
    }
    return list
}
   
function input_option(model)
{   
    const {name} = model
    const {choosenOption} = model
    let cantidadCiudades =  name.length 
    const message = 'Select action:'
    
    if (cantidadCiudades === 0)
    {  
        return inquirer.prompt([{
            name: 'choosenOption',
            type : 'list',
            message: message,
            default: choosenOption,
            choices: ['Add City']
        }])
    }
    else
    {
        return inquirer.prompt([{
            name: 'choosenOption',
            type : 'list',
            message: message,
            default: choosenOption,
            choices: ['Add City','Update City','Delete City']
        }])
    }
}

function list_locations(model)
{
    const {location} = model
    const {name} = model
    const message2 = ''
    
    return inquirer.prompt([{
        name: 'location',
        type : 'list',
        message: message2,
        default: location,
        choices: name
    }])   
}

function input_locations(model)
{
    const {location} = model
    const message3 = 'Location?'
    
    return inquirer.prompt([{
        name: 'location',
        type : 'str',
        message: message3,
        default: location,
    }])
}

function view(model)
{
    return{
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = 
{
    view,
    input_option,
    list_locations,
    input_locations
}