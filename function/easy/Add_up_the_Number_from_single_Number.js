/* Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
Notes
Expect any positive number between 1 and 1000 */ 

// fist type of solution 

// function addUp(num) {
//     const answer =0;
//     for(let i =0;i<=num;i++) {
//     answer+=i;
// }
// return answer;
// }


// console.log("addUp(4) ➞ "+ addUp(4));
// console.log("addUp(13) ➞ "+ addUp(13));
// console.log("addUp(600) ➞ "+ addUp(600));




// second type of solution 


function addUp1(num1) {
    return num1*(num1+1)/2;
}
console.log("addUp(4) ➞ "+ addUp1(4));
console.log("addUp(13) ➞ "+ addUp1(13));
console.log("addUp(600) ➞ "+ addUp1(600));



