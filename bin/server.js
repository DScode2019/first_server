const http=require('http')
const app=require('../app')
const debug=require('debug')

// this method normlize the the port of connection and transform it ti integer and verify that is under 0
const normalize=val=>{
    var port=parseInt(val,10)
    if(isNaN(port)){
        return val;
    }
    if(port>=0){
        return port;
    }
    return false;
}

// this function verify i ther is an error when calling server
const Error=err=> {
    if(err.syscall()!=="listen"){
        throw err
    }


// if port is string then pipe else port
const bind =typeof  port==='string' ? 'pipe'+port:'port'+port
// this return port in use if the port is used from another app or other server use the same port or in require elevated privelage
switch (err.code) {
    case 'EACCES':
        console.log(bind+ " require elevated privileges")
        process.exit(1)
        break;
    case 'EADDRINUSE':
        console.log(bind+"port already in use")
        process.exit(1)
        break;
    default:
        throw err;
}

}
const onListening=()=>{
    const bind =typeof  port==='string' ? 'pipe'+port:'port'+port
    debug("Listening on"+bind )
}


const port=normalize(9898)
app.set(port)
//create server
const serveur=http.createServer()

//define the server event like error or listening in port the method define previously cant be executed without this line code
serveur.on('erreur',Error)

serveur.on('listenning',onListening)

// the server shuld listen to the port to communicate with the client side

app.listen(port,()=>console.log("App listening to the port" + port))

