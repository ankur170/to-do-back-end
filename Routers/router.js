const serviceprovider=require('./datamodel/servicelayer/service')
const express=require('express')
const router=express.Router()
router.get('/data/:param',async(req,res)=>{
    let k=req.params.param
    let p= await serviceprovider.insertdata({"data":k})
    res.send(p)
})

router.get('/imp/:par',async(req,res)=>{
    console.log("chall gyaa")
    let s=req.params.par
    let u=await serviceprovider.add_imp(s)
    res.send(u)
})

module.exports=router