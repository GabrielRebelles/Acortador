const redis = require("redis");
const config = require('../config')

const client= redis.createClient({
    host:config.redis.host,
    port:config.redis.port,
    password:config.redis.password,
})

async function getValue(key){
    return new Promise((res,rej)=>{
        client.get(key,(err,value)=>{
            if(!err&&value){
                res(value)
            }else{
                rej(err)
            }
        });
    }) 
}

async function insertRedis(key,value){
    client.set(key, value);
}


module.exports={insertRedis,getValue}