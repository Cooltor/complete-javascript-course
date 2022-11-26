"use strict"




/*
function calcAverage(sc1, sc2, sc3) {

    const avg = (sc1 + sc2 + sc3) / 3
    return avg

}

const dolphinsScore = calcAverage(85, 54, 71)
const koalasScore = calcAverage(23, 34, 27)

console.log(dolphinsScore, koalasScore);


function checkWinner(dolphinsAvg, koalasAvg) {

    if (dolphinsAvg >= koalasAvg * 2) {

        const res = `Dolphins win (${dolphinsAvg} vs ${koalasAvg})`
        console.log(res);

    } else if (koalasAvg >= dolphinsAvg * 2) {

        const res = `Koalas win (${koalasAvg} vs ${dolphinsAvg})`
        console.log(res);

    } else {

        const res = `No winner`
        console.log(res);

    }

}

checkWinner(dolphinsScore, koalasScore)



function calcTip(bill) {

    if (bill >= 50 && bill <= 300) {

        const tip = bill * 0.15
        console.log(`The tip is ${tip}`)
        return tip

    } else {

        const tip = bill * 0.2
        console.log(`The tip is ${tip}`)
        return tip
    }

}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip([2])]

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(total);



const mark = {

    fullName: 'Mark Miller',
    mass: '78',
    height: '1.69',

    calcBMI: function () {

        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

const john = {

    fullName: 'John Smith',
    mass: '92',
    height: '1.95',

    calcBMI: function () {

        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

mark.calcBMI()
console.log(mark.bmi)

john.calcBMI()
console.log(john.bmi);

if (mark.bmi > john.bmi) {

    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)

} else if (mark.bmi < john.bmi) {

    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)

}

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []
const totals = []



for (let i = 0; i < bills.length; i++) {

    if (bills[i] >= 50 && bills[i] <= 300) {

        const tip = bills[i] * 0.15
        const total = bills[i] + tip

        tips.push(tip)
        totals.push(total)


    } else {

        const tip = bills[i] * 0.2
        const total = bills[i] + tip

        tips.push(tip)
        totals.push(total)

    }

}


console.log(tips)
console.log(totals);


