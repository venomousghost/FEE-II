function printName(func,name){
    func(name);
    console.log('Hello,'+ name);
    func(name);
    console.log('World!');
    func(name);
    console.log('!'); 
}