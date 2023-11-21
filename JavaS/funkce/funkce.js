function ukazka(pozdrav) {
    console.log(pozdrav)
    console.log("Nazdar")
}
ukazka("Dobrý den")
ukazka("Ahoj")

function scitani(cisloA, cisloB) {
    let vysledek = cisloA + cisloB
    console.log(vysledek)
}

scitani(3, 8)

function prevadeni(cisloC) {
    let vysledek = cisloC * 0.62137119
    return vysledek
}
prevadeni(5)

console.log(prevadeni(50))
let vysledekPrevodu = prevadeni(30)
console.log(vysledekPrevodu)
