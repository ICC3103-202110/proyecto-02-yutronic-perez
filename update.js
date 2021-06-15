function update(model,location,choosenOption)
{
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model

    if (choosenOption === 'Add City')
    {
        name.push(location)
        temp.push(27) //INSERTAR API
        max.push(31)  //INSERTAR API          
        min.push(22)//INSERTAR API

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
                temp[i] = 1000 //INSERTAR API
                max[i] = 2300 //INSERTAR API
                min[i] = 3450 //INSERTAR API
                
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

/*
function temperature(model,name,temp,min,max)
{
  const temp = Math.floor(Math.random()*(40-0+1)+0)
  const max = Math.floor(Math.random()*(40-temp+1)+temp)
  const min = Math.floor(Math.random()*(temp-0+1)+0)
}

function update(name,temp,min,max,model)
{
    const newTemp = temp
    const newMax = leftUnit
    const newRightValue = ConvertTo(leftUnit,rightUnit,leftValue)
    const newRightUnit = rightUnit
    return {
        ...model,
        leftValue: newLeftValue,
        leftUnit: newLeftUnit,
        rightValue: newRightValue,
        rightUnit: newRightUnit,
    }

}
*/


module.exports = {
    update
}