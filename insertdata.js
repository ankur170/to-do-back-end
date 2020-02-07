const express=require('express')
const app=express()
const cors=require('cors')
const connect=require('./datamodel/connection')
app.use(cors())

const service=require('./datamodel/service')
const getdata=async(req,res)=>{
const k=req.params.dat
res.status(200).send(await searchdata({data:k}))
console.log('pahuch gya')
}

app.get('/data/:dat',getdata)

const searchdata=async(g)=>{

    let f=await connect.create(g)
    console.log(g,f)
   return(g)
}


app.listen(3335,()=>console.log('server started'))
