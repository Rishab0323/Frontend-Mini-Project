let num = 3;
let arr =[1,4,6,9,5,7];
for(let i=0;i<arr.length;i++){
    if(arr[i] > num){
        num = arr[i];
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

//arrow function
const mul = (a,b) => {
    console.log(a*b);
}