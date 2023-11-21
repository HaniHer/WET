let tlacitko1 = document.querySelector("#tlacitko1")
let podnadpis = document.getElementById("podnadpis")
let obrazek = document.createElement("#obrazek")
tlacitko1.addEventListener("click", gene, přepni)

function gene() {
    let cislo = Math.floor(Math.random() * 5 + 1)
    console.log(cislo)
    if (cislo === 4) {
        podnadpis.innerText = "Budeš bohatý"
    } else if (cislo === 2) {
        podnadpis.innerText = "Budeš slavný"
    } else if (cislo === 3) {
        podnadpis.innerText = "Budeš dlouho žít"
    } else {
        podnadpis.innerText = "Budeš štastný"
    }
}
function přepni() {
    if (obrazek.getAttribute("src") == "sušenka1.jfif") {
        obrazek.src = "sušenka2.jfif"
    } else {
        obrazek.src = "sušenka2.jfif"
    }
}
