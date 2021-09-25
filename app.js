const path =require('path')
const express= require('express')
const app=express();


const helloServer=require('./routes/helloServer')
// body parse we use it in the echange betxeen the serrver and the client
const bodyparser= require('body-parser')

   //the first line is abou exchangin json request the second is about text
app.use(bodyparser.json())
app.use(bodyparser.text())

// this will help us to add data strin in url like /exemple/id=5
app.use(bodyparser.urlencoded({extended:false}))


//this will create static url in the client side to access the data file
console.log(path.join(__dirname,'/data'))
app.use('/data', express.static(path.join(__dirname,'/data')))



app.use((req,res,next)=>{
    // ALL THE THREE LINE DEFINE THE SETTING OF THE LINK EXCHANGED WITH THE CLIENT
    res.setHeader('Access-Controle-Allow-Origin','*')
    res.setHeader('Access-Controle-Allow-Header','Origin, X-Request-With, Content-Type, Accept, Authorization')

  // FOR EXAMPLE IN THIS LINE WE EFINE THE OPERATION ALOWED IN THE EXCHANGED LINK BETWEEN THE CLIEN AND THE SERVER
    // IF WE REMOVE GET THE CLIENT NEVER CAN SEE THE RECORD IN THE SERVER OR POST THE CLIENT SIDE CANT ADD RECORD ECT;;;
   res.setHeader('Access-Controle-Allow-Method','GET,POST,PATCH,PUT,OPTIONS,DELETE')


    next();

})

app.use(helloServer)


//this page we will use it in other page then we should do this
module.exports=app