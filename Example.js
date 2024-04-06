const fs = require('fs');
const os = require('os');

// EventEmitter method
const EventEmitter = require('events')
const myEmiter = new EventEmitter();

const sayHi =()=>{
    console.log("hello")
}

const sayHello=()=> {
    console.log("hello")
}

myEmiter.on('userJoined',sayHi)

myEmiter.emit('userJoined')

myEmiter.on('userJoined',sayHello)



//server method
console.log(`the server ahas been foe ${os.uptime()} seconds`)
console.log(os.userInfo());



    //File method
const data = "Hi! vanakam mapla";
fs.writeFile('./myFolder/file.txt',data, (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('folder created')
    }
})