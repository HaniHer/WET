let tlacitko = document.querySelector("#tlacitko")
// # = pravý alt + x
// Vezme všechno, proto # určíme ID

let nadpis = document.getElementById("nadpis")
// vezme to jen podle ID

let input = document.querySelector("#input")

tlacitko.addEventListener("click", zmenNadpis)


 
function zmenNadpis() {
    let textInputu = input.value
    nadpis.style.color = "red"
    nadpis.style.fontSize = "100px"
    //nadpis.innerText = textInputu
    if (input.value === "otázka") 
    {nadpis.innerText = "42"} 
    else {nadpis.innerText = textInputu}
}



// . říká co s tim chceme dělat
// nadpis.style.fontSize = "100px" - změna velikosti
