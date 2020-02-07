const connect=require('./connection')
const insertdata=async(g)=>{
    console.log('chay peelo')
    connect.create(g)
    console.log('aa gya')
   return(g)
}

const getall=async()=>{
    let p=await connect.find()
    console.log('le aa')
    return(p)
}

module.exports={insertdata,getall}