let x: number = 12;
console.log(x);

function greet(firstName : string){
    console.log('helllo' +firstName);
}

function Sum(x:number,y:number): number{
    return x+y;
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