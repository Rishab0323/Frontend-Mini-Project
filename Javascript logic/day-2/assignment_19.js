let num = 3;
let arr1 =[1,4,6,9,5,7];
for(let i=0;i<arr1.length;i++){
    if(arr1[i] > num){
        num = arr1[i];
    }
}
console.log(num);

str = 'abcdabcdefgggh' 
ans = 'abcdef'
ans1 = 'efgh'

for(let i=0;i<str.length;i++){
    let curChar = str[i];
    if(ans.indexOf(curChar) == -1){
        ans += curChar;
        console.log('string is',ans);
    }
    if(ans1.indexOf(curChar) == -1){
        ans1 += curChar;
        console.log('string  2 is',ans1);
    }
}


function countryName(country){
    let index = 0;
    for(let i=0;i<country.length;i++){
        let indexLen = country[index].length;
        let curLen = country[i].length;
        if(curLen > indexLen){
            index = i;
        }
    }
    return country[index];
}

let country = ['indiaaa','chinaa','germany'];
console.log(countryName(country));


function count_vowel(str){
    let count =0;
    for(let i=0;i<str;i++){
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'o' || str.charAt(i) == 'i' || str.charAt(i) == 'u' ){
            count ++;
        }
    }
    return count;
}

str = 'name'
console.log(count_vowel(str));

// arrow function
let mul = (a,b) => {
    return a*b;                     //arrow fun return gives valid
}

let val = mul(2,3);
console.log(val);

let arr =[3,6,9]
const avg = (arr) => {
    let curavg = 0
    for(let i=0;i<arr.length;i++){
        curavg += arr[i];
    }
    return curavg = curavg/arr.length;    //without return statement it was returning undefined
}

console.log(avg(arr));

const iseven = (num) =>{
    if(num %2 == 0){
        return 'even';
    }
    else{
        return 'not even';
    }
}

console.log(iseven(3));