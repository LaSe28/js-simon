let numOutput = document.querySelector('#numbers')

let arrNum = []
let arrUserNum = []
let arrRightNum = []

let i = 0
while( arrNum.length < 5){
    let randomNum = Math.floor(Math.random()*99)+1
    if (!arrNum.includes(randomNum)){
        arrNum.push(randomNum)
    }
    i++
    console.log(randomNum)
    numOutput.innerHTML= `Vediamo se riesci a ricordare questi numeri:<br> <br>${arrNum}`;
}

setTimeout (timeToRemember, 30000)

function timeToRemember(){
    numOutput.innerHTML = `Vediamo se ti ricordi`
    setTimeout (answereTime, 2000)
    function answereTime(){
        let u = 0;
        while(arrUserNum.length < 5){
            let userNum = parseInt(prompt('Inserisci i numeri in ordine:'))
            arrUserNum.push(userNum)
            if(arrNum.includes(userNum)){
                arrRightNum.push(userNum)
                numOutput.classList.add('right-numbers')
                numOutput.innerHTML=`Numeri indovinati = ${arrRightNum.length} <br> <br>Eccoli:<br>${arrRightNum}`
            }
        }
    }
}


