const request = require('request')

var APP = {
    url: "https://catfact.ninjs/fact",
    catfact:""
}

let webRequests = new Promise(function(resolve, reject){

handleRequest = (err, response) => {
    if(err){
        reject(err)
        return console.log(err)
    }
        APP.catfact = JSON.parse(response.body).fact 
        //method parses a JSON string, constructing the JavaScript value or object described by the string.
        resolve(APP.catfact)
    }
    request(APP.url, handleRequest)
})

webRequests.then(
    (result)=>{console.log(result)}
).catch((error)=>{console.log("got error"+ error)}
    )


chain = new Promise(function(resolve,reject){
    setTimeout(()=>resolve(1),1000)
}).then(function(result){ //each return goes to the next promise
    console.log("Level 1 result"+result)
    return result *2
}).then(function(result){
    console.log("Level 2 result"+ result)
    return result*2
}).then((result)=>{
    console.log("Lebel 3 result"+result)
}) //promise chaining

//ASYNC/AWAIT

/*

//async keyword means that function returns a promise

async function simleFunction() {
    return 1;
}

//js engine will equivalent

async function simpleFunction() {
    return Promise.resolve(1)
}

//return value gets automatially wrapped in a resolve
*/

async function simpleFuction(){
    return 1
}

simpleFuction.then((result)=>{
    console.log("we got 1"+ result)
})

async function simpleFuction(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Promise complete"),1000)
    })
    /*
    promise.then(function(result){
    })
    instead of this
    */
   let result = await promise //result of the promise will be stored here
   console.log(result)
   return promise //have to return promise
}

console.log(simpleFuction()) //returns a promise


simpleFuction().then((result) => {
    console.log("function fire with result"+result) // result will be undefined
})

const request = require('request')


var url = "https://catfact.ninja/fact"

async function getCatFact() {
    let webRequest = new Promise(function(resolve,reject){
        handleRequest = (err,response)=>{
            if(err){
                reject(err)
            }
            resolve(JSON.parse(response.body).fact) //only get the fact from response
        }
        request(url,handleRequest) //why this order?
    })
    try{
    catFact = await webRequest
    }catch(err){
        console.log(err)
    }
    console.log(catFact)
}

getCatFact()

/** 
 * export and import
 * export used to export objects and primitives that can be used by other programs
 * two types of exports
 * 
 * named and default
 * 
 * named exports
 * must use same as the oject or primitive that is export
 * 
 * default export
 *  can import default exports with any name
 * 
 * can have multiple name exports in a module but only one default export
*/

