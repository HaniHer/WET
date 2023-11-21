let tlacitko1 = document.querySelector("#tlacitko1")
let input1 = document.querySelector("#input1")
intup1 = parseInt(input1)
console.log(tlacitko1)

let tlacitko2 = document.querySelector("#tlacitko2")
let input2 = document.querySelector("#input2")
intup2 = parseInt(input2)
console.log(tlacitko2)


tlacitko1.addEventListener("click", zmenNadpis)

nadpis.innerText = textInputu
let nadpis = document.getElementById("nadpis")


function zmenNadpis() {
    let textInputu = input.value
    //nadpis.innerText = textInputu
    if (input1 < intup2) 
    {nadpis.innerText = "Druhé číslo je větší"}
    else if (input1 > intup2 ) 
    {nadpis.innerText = "První číslo je větší"} 
    else {nadpis.innerText = "Čísla se rovnají"}
}