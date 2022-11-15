/*
let country = "France";
let continent = "Europe";
let population = 64000000;

console.log(country, continent, population);
*/


//Challenge #1

let markMass = 78
let markHeight = 1.69

let johnMass = 95
let johnHeight = 1.88

let markBMI = markMass / markHeight ** 2
let johnBMI = johnMass / johnHeight ** 2

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI

console.log(markHigherBMI);


//Challenge #2

if (markHigherBMI = true) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI is higher than Mark's BMI`);
}
