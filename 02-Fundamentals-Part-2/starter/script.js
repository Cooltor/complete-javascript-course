'use strict'

/*
function logger() {

    console.log('My name is Jonas')

}

// Calling / running / invoking the function
logger()
logger()


function fruitProcessor(apples, oranges) {

    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice

}


const superJuice = fruitProcessor(3, 9)
console.log(superJuice);

console.log(fruitProcessor(8, 5));



function calcAge1(birthYear) {

    const age = 2037 - birthYear
    return age

}

const age1 = calcAge1(1986)


const calcAge2 = function (birthYear) {

    return 2037 - birthYear

}

const age2 = calcAge2(1986)

console.log(age1, age2);




// arrow function

const calcAge3 = birthYear => 2037 - birthYear

const age3 = calcAge3(1986)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstname) => {

    const age = 2037 - birthYear
    const retirement = 65 - age
    //return retirement
    return `${firstname} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1986, 'Romain'));
console.log(yearsUntilRetirement(1998, 'Bobby'));




function cutFruitPieces(fruit) {

    return fruit * 4

}



function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    console.log(apples, oranges)
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
    return juice

}


console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {

    return 2037 - birthYear

}

const yearsUntilRetirement = function (birthYear, firstname) {

    const age = calcAge(birthYear)
    const retirement = 65 - age

    if (retirement > 0) {

        return retirement

    } else {

        return -1

    }

}

console.log(yearsUntilRetirement(1950, 'Mike'))
console.log(yearsUntilRetirement(1986, 'Romain'))





const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

const years = new Array(1991, 1986, 2012, 2022)
console.log(years);

console.log(friends[0]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay'
console.log(friends);



const Romain = {
    firstName: 'Romain',
    lastNmae: 'Dubus',
    Age: 2022 - 1986,
    job: 'developper web',
    friends: ['Alex', 'Benji', 'Cathy', 'Thomas']
}

const interestedIn = prompt('What do you know about Romain? Choose between firstName, lastName, age, job, and friends')

console.log(Romain[interestedIn]);


if (Romain[interestedIn]) {

    console.log(Romain[interestedIn]);

} else {

    console.log('Wrong request! ');

}

Romain.location = 'France'

console.log(Romain.location);

console.log(`${Romain.firstName} has ${Romain.friends.length} friends, and his best friends is ${Romain.friends[0]}`);



const romain = {
    firstName: 'Romain',
    lastNmae: 'Dubus',
    birthYear: 1986,
    job: 'developper web',
    friends: ['Alex', 'Benji', 'Cathy', 'Thomas'],
    hasDriverLicense: true,

    //calcAge: function (borthYear) {

    //    return 2037 - 1986

    //}

    //calcAge: function () {

    //    return 2037 - this.birthYear

    //}

    calcAge: function () {

        this.age = 2037 - this.birthYear

        return this.age

    },

    getSummary: function () {

        return `${this.firstName} is a ${this.calcAge()}-year old ${romain.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }

}



console.log(romain.calcAge(1986))

console.log(romain.age);  // GOOD IDEA TO NOT REPEAT YOURSELF


console.log(romain.getSummary());


*/


