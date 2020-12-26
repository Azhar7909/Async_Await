// Syncronous And Asyncronous
console.log("Hello world");

setTimeout(function() {
    console.log("this message will be display late");
},5000);

console.log("Soon");


// CallBack Function
// Simple
function AlertGreeting(message, GreetingFunction) {
    GreetingFunction(message)
}

function GreetingFunction(mes) {
    alert(mes)
}

setTimeout(function() {
    AlertGreeting("Hello Dear",GreetingFunction)
},5000)
// Complex
function AlertGreetingFunction(msg,GreetingFunction) {
    if (msg === "Good Morning") {
        GreetingFunction(msg)
    } else if (msg === "Good AfterNoone") {
        GreetingFunction(msg)
    } else if (msg === "Good Evening") {
        GreetingFunction(msg)
    } else{
        GreetingFunction(msg)
    }
}
AlertGreetingFunction("Good Night",GreetingFunction)



// Promises
// Simple
let promise = new Promise ( function (res , rej) {
    console.log("New Promise created");
    res()
})
promise.then(function() {
    console.log("Promise resolve");
})
// Detail
function Success () {
    console.log("Success");
}
function Failure() {
    console.log("Failed");
}

function CheckUserInput(userInput) {
    new Promise ( function (res, rej) {
        if (userInput) {
            Success()
            res()
        } else {
            Failure()
            rej()
        }
    })
}
CheckUserInput(false);
// More Details
const anyFunction = () =>{
    return Math.floor(Math.random() * 10) % 2 === 0? true : false ;
}
const resolveFunction = () =>{
    console.log("resolveFunction Run Successfully")
}
const rejectFunction = () =>{
    console.log("rejectFunction Run Successfully")
}

const result = new Promise((res, rej) => {
    setTimeout( () => (anyFunction()? res() : rej()),2000);
})
result.then(resolveFunction).catch(rejectFunction);
console.log("Hello world");