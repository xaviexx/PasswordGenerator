const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("first-bottom-el")
let secondPassword = document.getElementById("second-bottom-el")

function passwordGen() {
    firstPassword.textContent = ""
    for (let i = 0; i < 15; i++) {
        let randomCharacter = numbers()
        firstPassword.textContent += randomCharacter
    } secondPassword.textContent = ""
    for (let i = 0; i < 15; i++) {
        let randomCharacter = numbers()
        secondPassword.textContent += randomCharacter
}

}

function numbers() {
    let randomNumbers = Math.floor(Math.random()* characters.length)
    return characters[randomNumbers]
}