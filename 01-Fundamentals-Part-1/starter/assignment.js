/*
let country = "France";
let continent = "Europe";
let population = 64000000;

console.log(country, continent, population);



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



let dolphinsAverage = (120 + 108 + 89) / 3
let koalasAverage = (120 + 108 + 89) / 3

console.log(dolphinsAverage);


if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins win!`);
}
else if (dolphinsAverage < koalasAverage && koalasAverage >= 100)
    console.log('Koalas win!');
else if ((dolphinsAverage === koalasAverage) && dolphinsAverage >= 100) {
    console.log('Its a draw');
}
else {
    console.log("No winner");
}

*/

const bill = 430

const tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill

console.log(tip)

const value = bill + tip

console.log("The bill was " + bill + ", the tip was " + tip + ", and the total value " + value + ".")
