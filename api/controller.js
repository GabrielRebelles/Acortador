const {customAlphabet}=require('nanoid')
const {insertRedis,getValue}=require('./db')

//3.199.999 combinations:
const nanoid = customAlphabet('1234567890abcdefghij', 5)

async function getLink(id){
    return getValue(id).then((data)=>data)
    .catch(()=>{
        return 'ID no encontrado'
    })
}

async function crearLink(id) {
    let key = nanoid()

    //The id cannot be repeated:
    let cont=0
    do{
        cont++
        await getValue(key)
        .then(async()=>{key=nanoid()})
        .catch(()=>{cont=15})
    }while(cont<15)

    insertRedis(key,id)
    return key
}


module.exports={crearLink,getLink}