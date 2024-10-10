// //function
// //1.simple function:
// function first(){
//     console.log("this is the first function");
// }

// function second(call){
//     console.log("this is the second function");
//     call();
// }
// //function calling
// second(first);

//3 synchronous:
console.log("started");
function myfunc(){
    console.log("myfunc working");
}
myfunc();
console.log("ends");

//setTimeout;
//callback function
//delay
console.log("Image Searching");
for(let i=0;i<=1000;i++){
    console.log("loop is running");
}
setTimeout(()=>{
    console.log("image rendered");

},2000);
console.log("Work done");

//setInterval:
console.log("Image Searching");
for(let i=0; i<=1000;i++){
    console.log("Loop is running");
}
let a = setInterval(()=>{
    console.log("image rendered");

});
clearInterval(a);
console.log("Work done");