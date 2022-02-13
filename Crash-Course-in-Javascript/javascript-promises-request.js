//web api & requests

//API Application Programming Interface

//Get information is placed in URL then server will create responce(JSON)
//JSON contains properies adn status codes 200 is good


//curl & browser example
//curl https://catfact.ninja/fact
//Response
/* 
Http/1.1.200 -->good

Request example
GET

ASYNC functions 

install request module
npm nstall request@2.x.x //x for more recent versions
*/

const request = require('request') //gets request from npm 

var APP = {
    url: "https://catfact.ninga/fact",
    catfact: ""
}
handleRequest = (err,response) =>{
    if(err){
        console.log(err)
    }else {
        APP.catfact = JSON.parse(response.body).fact //creates object
        //fix
        console.log("In handler print" +APP.catfact)
    }
}



request(APP.url, handleRequest) //once request is ready calls handleRequest
//
console.log("Print Catfact"+ APP.catfact) //get nothing because this is asyc
//how to fix -> include in handler function 

//Test auth -> https://reqres.in
//takes in JSON object return token 

//example

const request = require('request')//use external library in js

var APP = {
    url: "https://regres.in/api/login",
    token: ""
}
options= {
    uri: APP.url,
    method: 'POST',
    json: {
        "email":"eve,hot@reqres.in",
        "password" : "citySlicka"
    }
}
handleRequest1 = (err, response) =>{
    if(err){
        return console.log(err)
    }else{
        APP.token = response.body.token
        console.log("in handler Token "+ APP.token)
        //bad practice
        //handle request
        handleRequest2 = (err, response) => {
                if(err){
                    console.log(err)
                } 
        }
    }
}
request(options, handleRequest1)

//promises so not nested handlers within handlers

/* 
function passsed to the promise must have 2 parameters which
are special functioal pointer

let promise = new Promise(function(resolve,reject){
    //executor
})

resolve called when the function successfully completes

reject called if theres an error

resolve and reject are defined by js engine

two internal properties

state- initally "pending", then changes to either "fulfilled " or "rejected"

Result- value of my choosing, initally undefined

executeor is executed asyc 
*/
let promise = new Promise(function(resolve,reject){ //functin is the executor
    setTimeout(()=>resolve("Done"), 5000) //if resolve fires before the reject then reject will never fire, will exit 
    //so if resolve fires after 1000 and reject fires after 500
    setTimeout(()=>resolve("Done"), 5000) //in ms,takes 5seconds to print Done
})

promise.then( //.then takes two parameters
    //then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
    function(result){ //is the value of internal result value "done"
        console.log("In consumer"+ result)
    }, //when resolve is called
    function(error){
        
    } //when reject is called
)


//when resolved is called 
//state: fulfilled
//result:Done

//when reject is called 
//state: 
//result:Done

//another way to do this
promise.then( 
    (result)=>console.log("In consumer"+ result)
).catch(
    (error)=> console.log("In consumer"+ error)
)

