const express=require('express')
const router=express.Router()
const controller=require('./controller')
const URI = require("uri-js");

router.get('/:link',getLink)
router.post('/',postLink)

async function getLink(req,res,next){
    let link = await controller.getLink(req.params.link)
    res.redirect(link)
}

async function postLink(req,res,next){    
    if (!URI.parse(req.body.link).host) {//verifico que sea un url valido
        res.json({"message":'Ingrese URL valido',err:true})
    }else{
        let key = await controller.crearLink(req.body.link)
        res.json({"link":req.protocol+"://"+req.hostname+req.originalUrl+"/"+key,err:false})
    }
}

module.exports=router