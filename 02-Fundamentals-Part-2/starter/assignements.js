"use strict"





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