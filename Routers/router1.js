const serviceprovider=require('./datamodel/servicelayer/service')
const express=require('express')
const router1=express.Router()
router1.get('/getall',async(req,res)=>{
    let k= await serviceprovider.getall()
    res.send(k)
})

module.exports=router1