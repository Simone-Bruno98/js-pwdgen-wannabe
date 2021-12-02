// variabili

const year = "2021";
let name= prompt("Please write your name here", "Name")
let surname= prompt("Please write your surname here", "Surname")
let favouritecolor= prompt("Please write here your favourite color", "Favourite Color")

password = name+surname+favouritecolor+year

console.log(password)
console.log(
    `
    ${name} ${surname} ${favouritecolor}
    asdasdasd
    `
)
password = document.getElementById("s").innerHTML
document.getElementById('generatedpassword').innerHTML = 'password';