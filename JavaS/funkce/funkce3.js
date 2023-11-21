let tlacitko2 = document.querySelector("#tlacitko2")
let podnadpis = document.getElementById("podnadpis")
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
tlacitko2.addEventListener("click", prevadeni)

function prevadeni() {
    if (input1.value === "F") {
        let cisloA = input2.value
        cisloA = parseInt(cisloA)
        let vysledek = (9 / 5) * cisloA + 32
        console.log(vysledek)
        podnadpis.innerText = vysledek
    } else if (input1.value === "C") {
        let cisloB = input2.value
        cisloB = parseInt(cisloB)
        let vysledek2 = (cisloB - 32) / 1.8
        console.log(vysledek2)
        podnadpis.innerText = vysledek2
    } else {
        podnadpis.innerText = "Nelze"
    }
}
