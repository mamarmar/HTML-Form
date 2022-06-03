const form = document.querySelector("form");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone");
const recommendation = document.getElementById("phone-charges");
const checkboxMsg = document.getElementById("checkbox-msg");
const password = document.getElementById("password");
const pswConfirm = document.getElementById("psw-confirm");
const button = document.querySelector("button");
const mailError = document.getElementById("mail-error");
const phoneError = document.getElementById("phone-error");
const pswError = document.getElementById("psw-error");
const pswMessage = document.getElementById("psw-message");
const pswLength = document.getElementById("length");
const letter = document.getElementById("letter");
const num = document.getElementById("number");
const symbol = document.getElementById("symbol");
const pswConfirmMsg = document.getElementById("psw-confirm-msg");

function showCheckboxMsg(a) {
    if (a == "yes") {
        checkboxMsg.hidden = false;
    } else if (a == "no") {
        checkboxMsg.hidden = true;
    }
}

function showPswMessage() {
    pswMessage.hidden = false;
}

function stylePswMessage() {
        pswMessage.style.color = "#868686"
}

function showPswConfirmMsg() {
    pswConfirmMsg.hidden = false;
}

mail.addEventListener("focus", () => {
    mail.style.borderColor = "#75baf0";
    mail.style.boxShadow = "1px 1px 1px 1px #cfe7fa";
    mailError.textContent = "";
})

mail.addEventListener("blur", () => {
    mail.style.borderColor = "#c1c5c8";
    mail.style.boxShadow = "none";
    if (!mail.validity.valid) {
        mailError.textContent = "Please enter a valid email address."
        mail.style.backgroundColor = "white";
        mail.style.borderColor = "red";
    } else if (mail.value.length == 0) {
        mail.style.backgroundColor = "white";
    } else {
        mailError.textContent = "";
        mail.style.backgroundColor = "#e8f0fe";
    }
})

phone.addEventListener("focus", () => {
    phone.style.borderColor = "#75baf0";
    phone.style.boxShadow = "1px 1px 1px 1px #cfe7fa";
    phoneError.textContent = "";
    recommendation.id = "phone-charges";
    recommendation.textContent = "Standard call, message or data rates may apply."
    showCheckboxMsg("yes");
})

phone.addEventListener("blur", () => {
    phone.style.borderColor = "#c1c5c8";
    phone.style.boxShadow = "none";
    if (!phone.validity.valid) {
        phoneError.textContent = "Enter your phone number."
        phone.style.backgroundColor = "white";
        phone.style.borderColor = "red";
        recommendation.textContent = "";
    } else if (phone.value.length == 0) {
        phone.style.backgroundColor = "white";
        recommendation.id = "phone-rec";
        recommendation.innerText = `We strongly recommend adding a phone number. This will help verify your account and keep it safe.`;
        showCheckboxMsg("no");
    } else {
        phoneError.textContent = "";
        phone.style.backgroundColor = "#e8f0fe"
    }
})

password.addEventListener("focus", () => {
    password.style.borderColor = "#75baf0";
    password.style.boxShadow = "1px 1px 1px 1px #cfe7fa";
    showPswMessage();
    stylePswMessage();
})

// Regular expressions password validation
password.addEventListener("input", () => {
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    if(password.value.match(lowerCaseLetters) && password.value.match(upperCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }
    let numbers = /[0-9]/g;
    if(password.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    if(password.value.length >= 8) {
        pswLength.classList.remove("invalid");
        pswLength.classList.add("valid");
    } else {
        pswLength.classList.remove("valid");
        pswLength.classList.add("invalid");
    }
    let symbols = /[!@#$%^&*]/g;
    if(password.value.match(symbols)) {
        symbol.classList.remove("invalid");
        symbol.classList.add("valid");
    } else {
        symbol.classList.remove("valid");
        symbol.classList.add("invalid");
    }
    if (password.validity.valid) {
        console.log("Valid password");
    }
})

password.addEventListener("blur", () => {
    password.style.borderColor = "#c1c5c8";
    password.style.boxShadow = "none";
    if (!password.validity.valid) {
        password.style.borderColor = "red";
    } else {
        password.style.borderColor = "#c1c5c8";
    }
})

pswConfirm.addEventListener("focus", () => {
    pswConfirm.style.borderColor = "#75baf0";
    pswConfirm.style.boxShadow = "1px 1px 1px 1px #cfe7fa";
})

pswConfirm.addEventListener("blur", () => {
    pswConfirm.style.borderColor = "#c1c5c8";
    pswConfirm.style.boxShadow = "none"; 
    if (!password.value.length == 0) {
        showPswConfirmMsg();
    }

})