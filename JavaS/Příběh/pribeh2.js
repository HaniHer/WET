let podnadpis = document.getElementById("podnadpis")

////////////////

let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input1")
let input3 = document.querySelector("#input1")

let podnadpis2 = document.getElementById("podnadpis2")
let tlacitko3 = document.querySelector("#tlacitko3")
tlacitko3.addEventListener("click", zmenNadpis3)
function zmenNadpis3() {
    let textInputu1 = input1.value
    podnadpis2.innerText = textInputu1
}
tlacitko3.addEventListener("click2", zmenNadpis4)
function zmenNadpis4() {
    let textInputu1 = input1.value
    podnadpis3.innerText = textInputu1
}
