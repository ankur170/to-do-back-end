const serviceprovider=require('./datamodel/servicelayer/service')
const express=require('express')
const router=express.Router()
router.get('/data/:param',async(req,res)=>{
    let k=req.params.param
    let p= await serviceprovider.insertdata({"data":k})
    res.send(p)
})

module.exports=router