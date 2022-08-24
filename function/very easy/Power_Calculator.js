/*  Create a function that takes voltage and current and returns the calculated power.

Examples
circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600
Notes
Requires basic calculation of electrical circuits (see Resources for info) */ 

function 
circuitPower(voltage,current){
    return voltage*current;
}
console.log("circuitPower(230, 10) ➞ " +circuitPower(230,10));
console.log("circuitPower(110,3) ➞ " +circuitPower(110,3));
console.log("circuitPower(480, 20) ➞ " +circuitPower(480,20));

