let count = 0;
var a = setInterval(()=>{
    count++;
    console.log('Message:${count}: Ghar k niche aaja gedi chliye');
    if (count >= 3){
        clearInterval(a);
        console.log("Execution Stop")
    }
});