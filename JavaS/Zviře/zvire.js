let tlacitko = document.querySelector("#tlacitko")
// # = pravý alt + x
// Vezme všechno, proto # určíme ID

let podnadpis = document.getElementById("podnadpis")
// vezme to jen podle ID

let input = document.querySelector("#input")

tlacitko.addEventListener("click", zmenNadpis)

let body = document.querySelector("body")

function zmenNadpis() {
    podnadpis.style.color = "red"
    podnadpis.style.fontSize = "100px"
    //nadpis.innerText = textInputu
    if (input.value === "liška") 
    {podnadpis.innerText = "What does the fox say?" 
    body.style.backgroundColor = "lightsalmon"} 
    else if (input.value === "vlk") 
    {podnadpis.innerText = "awww" 
    body.style.backgroundColor = "dimgray"} 
    else if (input.value === "beruška") 
    {podnadpis.innerHTML = "&#128030"
    body.style.backgroundColor = "red"} 
    else {podnadpis.innerText = "Toto zvíře neznám!!"}
}
