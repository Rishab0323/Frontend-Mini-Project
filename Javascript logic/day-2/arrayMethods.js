// //forEach method
let arr = [9,2,8,4,5,6];

// arr.forEach((ele) => {
//     if(ele %2 == 0){
//         console.log(`the element ${ele}is even` );
//     }
// })

// //map()
// let newArr = arr.map((ele) => {
//     return ele  + 2;
// })
// console.log(newArr);

// //filter()
// let newArr1 = arr.filter((ele) => {
//     return ele % 2 != 0 
// })
// console.log(newArr1);

// //reduce()
// let resArr = arr.reduce((res,val) => {
//     return res / val;
// })
// console.log(resArr);

let fin = arr.reduce((max,cur) => {
    if(cur > max){
        return cur;
    }
    else{
        return max;
    }
})
// console.log(arr);
console.log(fin)

//find all ele are multiple of 10
let arr1 = [10,20,30,40,50]
let fina = arr1.every((ele) => {
    return ele % 10 == 0 })
console.log(fina);


let minval = arr.reduce((min,cur) => {
    if(min > cur){
        min = cur;
    }
    return min;
})
console.log(minval);

//spread ... in js
str = "Rishab"
console.log(...str);