let vek = prompt("Kolik Vám je let?")
vek = parseInt(vek) 


console.log(vek)


if (vek < 0) {
    console.log("Lžeš!!!")
}  else if (vek < 18 ) {
    console.log("Můžeš si objednat jen kolu")
} else if (vek > 20){
    console.log("Můžeš si objednat pivo")
} else {
    console.log("Můžeš si objednat pivo, pokuď nejsi američan")
}