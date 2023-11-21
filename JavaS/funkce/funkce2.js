let tlacitko1 = document.querySelector("#tlacitko1")
let podnadpis = document.getElementById("podnadpis")
let input1 = document.querySelector("#input1")

let tlacitko2 = document.querySelector("#tlacitko2")
let input2 = document.querySelector("#input2")

tlacitko1.addEventListener("click", prevadeni1)
tlacitko2.addEventListener("click", prevadeni2)

function prevadeni1() {
    let cisloA = input1.value
    cisloA = parseInt(cisloA)
    let vysledek = (9 / 5) * cisloA + 32
    console.log(vysledek)
    podnadpis.innerText = vysledek
}
function prevadeni2() {
    let cisloB = input2.value
    cisloB = parseInt(cisloB)
    let vysledek2 = (cisloB - 32) / 1.8
    console.log(vysledek2)
    podnadpis.innerText = vysledek2
}
