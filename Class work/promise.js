let p = new Promise((resolve, reject) => {
    let like = true;
    setTimeout(() => {
        if (like) {
            resolve("Yeah, This is a resolve");
        } else {
            reject("Naah!! you're ugly");
        }
    }, 2000);
});

console.log(p);

p.then((value) => {
    console.log(value);
}).catch((err) => {  // Corrected parentheses here
    console.log("Rejected: " + err);
});
