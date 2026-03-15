const password = document.getElementById("password")
const lengthSlider = document.getElementById("length")
const lengthValue = document.getElementById("lengthValue")
const strengthText = document.getElementById("strength")

lengthSlider.addEventListener("input",()=>{
lengthValue.textContent = lengthSlider.value
})

function generatePassword(){

let length = lengthSlider.value
let chars = ""

if(document.getElementById("uppercase").checked){
chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

if(document.getElementById("lowercase").checked){
chars += "abcdefghijklmnopqrstuvwxyz"
}

if(document.getElementById("numbers").checked){
chars += "0123456789"
}

if(document.getElementById("symbols").checked){
chars += "!@#$%^&*()_+"
}

let generatedPassword=""

for(let i=0;i<length;i++){
let random = Math.floor(Math.random()*chars.length)
generatedPassword += chars[random]
}

password.value = generatedPassword

checkStrength(generatedPassword)

}

function copyPassword(){
navigator.clipboard.writeText(password.value)
alert("Password Copied!")
}

function checkStrength(pass){

if(pass.length < 8){
strengthText.textContent = "Strength: Weak"
strengthText.style.color="red"
}
else if(pass.length < 14){
strengthText.textContent = "Strength: Medium"
strengthText.style.color="orange"
}
else{
strengthText.textContent = "Strength: Strong"
strengthText.style.color="green"
}

}