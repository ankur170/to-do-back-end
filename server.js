const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
const service=require('./datamodel/service')
const getdata=async(req,res)=>{

res.send(await service.searchdata())
}

app.get('/data',getdata)


app.listen(3335,()=>console.log('server started'))