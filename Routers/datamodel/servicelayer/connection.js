
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/lauda',{useNewUrlParser: true,useUnifiedTopology: true}) 
const datavar2=mongoose.connection
datavar2.on('error',console.error.bind(console,'conn error:'))
datavar2.once('open', function() {
    console.log('connection start')
  });
  const schem=new mongoose.Schema(
    {
        "data": String,
      }
  )

  const datamodel=mongoose.model('abk',schem)
  
  module.exports= datamodel
  
