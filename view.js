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

    for(let i = 0; i < name.length; i++)
    {
        list.push({
            'NAME':name[i],
            'TEMPERATURE':temp[i],
            'MAX': max[i],
            'MIN': min[i]
        })
    }
    return list
}


/*

function getTable(model)
{
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model

    if(name.length === 1)
    {
        return [{
            'NAME':name,
            'TEMPERATURE':temp,
            'MAX': max,
            'MIN': min
        },    
    ]
    }
    if(name.length === 2)
    {
        return [
            {
            'NAME':name[0],
            'TEMPERATURE':temp[0],
            'MAX': max[0],
            'MIN': min[0]
            },
            {
            'NAME':name[1],
            'TEMPERATURE':temp[1],
            'MAX': max[1],
            'MIN': min[1]
            },     
    ]
    }

    
}
*/

function input_option(model)
{
    const {choosenOption} = model
    const message = 'Select action:'
    
    return inquirer.prompt([{
            name: 'choosenOption',
            type : 'list',
            message: message,
            default: choosenOption,
            choices: ['Add City','Update City','Delete City']
        }         
    ])
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
        }         
    ])

    
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
        }         
    ])
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