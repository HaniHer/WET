
let podnadpis = document.getElementById("podnadpis")

let tlacitko1 = document.querySelector("#tlacitko1")
tlacitko1.addEventListener("click", zmenNadpis1)
function zmenNadpis1() {
    podnadpis.innerText = "student"
    podnadpis.style.color = "red"
    podnadpis.style.fontSize = "100px"  
}
let tlacitko2 = document.querySelector("#tlacitko2")
tlacitko2.addEventListener("click", zmenNadpis2)
function zmenNadpis2() {
    podnadpis.innerText = "studentka"
    podnadpis.style.color = "red"
    podnadpis.style.fontSize = "100px"  
}

let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let input3 = document.querySelector("#input3")

let podnadpis2 = document.getElementById("podnadpis2")
let podnadpis3 = document.getElementById("podnadpis3")
let podnadpis4 = document.getElementById("podnadpis4")
let tlacitko3 = document.querySelector("#tlacitko3")
tlacitko3.addEventListener("click", zmenNadpis3)
function zmenNadpis3() {
    let textInputu1 = input1.value
    podnadpis2.innerText = textInputu1
    let textInputu2 = input2.value
    podnadpis3.innerText = textInputu2
    let textInputu3 = input3.value
    podnadpis4.innerText = textInputu3
}
