function getTemperature(location)
{
    const request = require("request")

    const key = "7159c526ce448236df0dea7e3a80201d"
    const city = location

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`

    request(url, function(error, response, body){
        if(error)
        {
            console.log("error:", error)
        } 
        else
        {
            const weather = JSON.parse(body);
            
            var datos = `The weather in ${weather.name} is:
            -Temp min: ${weather.main.temp_min}ºC

            -Temp max: ${weather.main.temp_max}°C
            -Temp: ${weather.main.temp}`
            console.log(datos)
            
            //API Conectada
            //Falta retornar los valores.
        }
    })
}


function update(model,location,choosenOption)
{
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    if (choosenOption === 'Add City')
    {
        name.push(location)
        temp.push(26) //INSERTAR API
        max.push(31) //INSERTAR API          
        min.push(22)  //INSERTAR API

        return{
            ...model,
            name: name,
            temp: temp,
            max: max,                
            min: min,
            }
    }
    else if (choosenOption === 'Update City')
    {
        for(let i = 0; i< name.length; i++)
        {
            if (name[i] === location)
            {
                temp[i] = 100 //INSERTAR API
                max[i] = 101 //INSERTAR API
                min[i] = 99 //INSERTAR API
                
            }
        }
        return{
             ...model,
            name: name,
            temp: temp,
            max: max,                
            min: min,
        }
    }
    else
    {
        for(let i = 0; i< name.length; i++)
        {
            if (name[i] === location)
            {
                var remove = name.splice(i,1)
                var remove = temp.splice(i,1)
                var remove = max.splice(i,1)
                var remove = min.splice(i,1)
            }
        }
        return{
             ...model,
            name: name,
            temp: temp,
            max: max,                
            min: min,
        }
    }
}


module.exports = {
    update
}