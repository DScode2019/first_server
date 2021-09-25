const helloserver=require('../Cotroller/helloServer')

const express=require('express')

const router =express.Router()

router.get("/helloServer",helloserver.helloServer)


module.exports=router