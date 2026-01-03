let x: number = 12;
console.log(x);

function greet(firstName : string){
    console.log('helllo' +firstName);
}

function Sum(x:number,y:number): number{
    return x+y;
}

interface User{
    firstName:string,
    lastName:string,
    age:number,
    email?:string   //? indicate any type
};

function great(user : User){
    console.log('hi there ' +user.firstName);
}

function check(age : number) : boolean{
    if(age > 18){
        return true;
    }
    else{
        return false;
    }
}
console.log(Sum(1,3));
greet("Rishab");
console.log(check(20))

enum they are 
// we assign random value to enum but each and everyone

enum Direction {
    Up,
    Down,
    Left,
    Right
}

// use enum like Direction,not directly use the keyword Up in the code

function doSomething(keyPressed:Direction){
    if(keyPressed == Direction.Left){

    }
}


console.log(doSomething(Direction.Left))
console.log(doSomething(Direction.Down));

// they are useful sending clear message like status code
// like success code = 200 ,then we can write re

// enum ResponseStatus {
//     Succes = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/",(req,res) => {
//     res.status(ResponseStatus.NotFound).json({}) //clean code using enum and understandable
// })

//generics
function printsome<hi>(par : hi[]){
    return par[1];
}

const el = printsome<string>(['harkirat','singh']);
const ele2 = printsome<number | string>([1,2,'hariya']); //we can or cannot use <>
const bol_ele = printsome([true,false]);
console.log(ele2);
console.log(bol_ele);
