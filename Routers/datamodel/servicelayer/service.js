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

const add_imp=async(h)=>{
    const filter={_id:h}
    const update={important:true}
    console.log(filter,update)
    const x=await connect.findOneAndUpdate(filter,update)
    return(x)
}

module.exports={insertdata,getall,add_imp}