let cislo = 15

// pro porovnání píšeme 3x =
// jedním = přiřazujeme hodnotu

if (cislo === 10) {
    console.log("Číslo je 10")
} else if (cislo === 5){
    console.log("Číslo je 5")
} else {
    console.log("Číslo není 10 ani 5")
}

// alert("Pozor!!!") - vyskakuje nad strankou
let input = prompt("Zadej číslo")
input = parseInt(input) 
// input = parseInt(input) - dává věci do čísla (celého)
// let input = parseInt(prompt("Zadej číslo")) - v jedné větě
// vyskočí kolonka nad strankou
console.log(input)
// tímto to co napíšeme skočí do konzole


