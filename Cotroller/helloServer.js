

exports.helloServer=(req,res,next)=>{
    //console lo show the message into the terminal
     console.log("hello server")

    //to show the msg into the browser we should so this

    res.json('hello Server')
}
