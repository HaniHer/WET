let cislo1 = prompt("První číslo")
cislo1 = parseInt(cislo1) 


console.log(cislo1)

let cislo2 = prompt("Druhé číslo")
cislo2 = parseInt(cislo2) 

console.log(cislo2)

SudeCislo = 2
SudeCislo = 4
SudeCislo = 6
SudeCislo = 8
SudeCislo = 0

if (cislo1 < cislo2) {
    console.log("Druhé číslo je větší")
}  else if (cislo2 < cislo1 ) {
    console.log("První číslo je větší")
} else {
    console.log("Čísla se rovnají")
}

if (cislo1 === SudeCislo) {
    console.log("Je sude")
} else {
    console.log("Je liche")
}
