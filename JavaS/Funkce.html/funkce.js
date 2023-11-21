function plusminus(n) {
    if (n < 0) {
        console.log("-")
    } else if (n > 0) {
        console.log("+")
    } else {
        console.log("Nic")
    }
}
plusminus(8)
plusminus(-6)
plusminus(0)

function plusJedna(x) {
    let vysledek = x + 1
    console.log(x, "plus jedna je", vysledek)
}
plusJedna(5)
plusJedna(9)

function person_info(name, height, money) {
    if (height < 150) {
        a = "je malý"
    } else {
        a = "je vysoký"
    }
    if (money < 1000) {
        b = "je chudý"
    } else {
        b = "je bohatý"
    }
    console.log(name, a, b)
}
person_info("Bob", 120, 2000)
