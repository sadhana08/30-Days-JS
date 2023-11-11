const passwordInput = document.querySelector(".password-input");
const generateButton = document.querySelector(".generate-btn");
const copyPassword = document.querySelector(".copy-img");
const length = 8;

let alphabetCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabetSmall = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialChar = "!@#$%^&*{[}]-=~_+/<>|";
let allType = alphabetCaps + alphabetSmall + number +specialChar;

function generatePassword(){
    let password = "";
    password +=  alphabetCaps[Math.floor(Math.random()*alphabetCaps.length)];
    password +=  alphabetSmall[Math.floor(Math.random()*alphabetSmall.length)];
    password +=  number[Math.floor(Math.random()*number.length)];
    password +=  specialChar[Math.floor(Math.random()*specialChar.length)];

    while(password.length < length){
        password +=  allType[Math.floor(Math.random()*allType.length)];
    }
    return password;
}

function copy(){
    passwordInput.select();
    document.execCommand("copy");
}

generateButton.addEventListener("click", () => {
    passwordInput.value = generatePassword();
})

copyPassword.addEventListener("click", () => {
    copy();
})
