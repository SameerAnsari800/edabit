/*  You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

Examples
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100
Notes
N/A    */ 

function  points (x,y) {
    return (x+y)*2+y
}

console.log("points(1, 1) ➞ "+ points(1,1));
console.log("points(7,5) ➞ "+ points(7,5));
console.log("points(38,8) ➞ "+ points(38,8));
console.log("points(1, 2) ➞ "+ points(1,2));
console.log("points(2,1) ➞ "+ points(2,1));
console.log("points(2,2) ➞ "+ points(2,2));
console.log("points(69,420) ➞ "+ points(69,420));




