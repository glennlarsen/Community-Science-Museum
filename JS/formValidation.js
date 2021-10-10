const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const formSuccess = document.querySelector("#confirmation");
const button = document.querySelector(".cta-contact");
const overlayClose = document.querySelector(".close-button");


function validateName() {
    if (checkLength(name.value, 1) === true) {
        name.style.border = "1px solid green";
        nameError.style.display = "none";
    } else if (name.value === '') {
        name.style.border = "1px solid grey";
        nameError.style.display = "none";
    } else {
        name.style.border = "1px solid red";
        nameError.style.display = "block";
    }
}

function validateNameInput() {
    if (checkLength(name.value, 1) === true) {
        name.style.border = "1px solid green";
        nameError.style.display = "none";
    } else if (name.value === '') {
        name.style.border = "1px solid grey";
        nameError.style.display = "none";
    } else {
        name.style.border = "1px solid red";
    }
}

function validateEmail() {

    if (checkEmail(email.value) === true) {
        email.style.border = "1px solid green";
        emailError.style.display = "none";
    } else if (email.value === '') {
        email.style.border = "1px solid grey";
        emailError.style.display = "none";
    } else {
        email.style.border = "1px solid red";
        emailError.style.display = "block";
    }
}

function validateEmailInput() {

    if (checkEmail(email.value) === true) {
        email.style.border = "1px solid green";
        emailError.style.display = "none";
    } else if (email.value === '') {
        email.style.border = "1px solid grey";
        emailError.style.display = "none";
    } else {
        email.style.border = "1px solid red";
    }
}

function validatePhone() {
    if (checkPhone(phone.value) === true) {
        phone.style.border = "1px solid green";
        phoneError.style.display = "none";
    } else if (phone.value === '') {
        phone.style.border = "1px solid grey";
        phoneError.style.display = "none";
    } else {
        phone.style.border = "1px solid red";
        phoneError.style.display = "block";
    }
}

function validatePhoneInput() {
    if (checkPhone(phone.value) === true) {
        phone.style.border = "1px solid green";
        phoneError.style.display = "none";
    } else if (phone.value === '') {
        phone.style.border = "1px solid grey";
        phoneError.style.display = "none";
    } else {
        phone.style.border = "1px solid red";
    }
}

function validateMessage() {
    if (checkLength(message.value, 9) === true) {
        message.style.border = "1px solid green";
        messageError.style.display = "none";
    } else if (message.value <= 9) {
        message.style.border = "1px solid grey";
        messageError.style.display = "none";
    } else {
        message.style.border = "1px solid red";
        messageError.style.display = "block";
    }
}

function validateMessageInput() {
    if (checkLength(message.value, 9) === true) {
        message.style.border = "1px solid green";
        messageError.style.display = "none";
    } else if (message.value <= 9) {
        message.style.border = "1px solid grey";
        messageError.style.display = "none";
    } else {
        message.style.border = "1px solid red";
    }
}

function validateForm(event) {
    event.preventDefault();

    if (checkLength(name.value, 1) === true && checkEmail(email.value) === true &&
        checkPhone(phone.value) === true && checkLength(message.value, 9) === true) {
        formSuccess.style.visibility = "visible";
        formSuccess.style.opacity = "1";
        name.style.border = "1px solid grey";
        email.style.border = "1px solid grey";
        message.style.border = "1px solid grey";
        phone.style.border = "1px solid grey";
        button.disabled = true;
        button.style.opacity = .4;
        form.reset();
    } else {
        formSuccess.style.display = "none";
    }

}

function buttonEnable() {
    if (checkLength(name.value, 1) === true && checkEmail(email.value) === true &&
        checkPhone(phone.value) === true && checkLength(message.value, 9) === true) {
        button.style.opacity = 1;
        button.disabled = false;
    } else {
        button.style.opacity = .4;
        button.disabled = true;
    }
}

name.addEventListener("blur", validateName);
name.addEventListener("input", validateNameInput);
email.addEventListener("blur", validateEmail)
email.addEventListener("input", validateEmailInput)
phone.addEventListener("blur", validatePhone);
phone.addEventListener("input", validatePhoneInput);
message.addEventListener("blur", validateMessage);
message.addEventListener("input", validateMessageInput);
form.addEventListener("submit", validateForm);
form.addEventListener("input", buttonEnable);


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function checkPhone(phone) {
    const regExp = /^(0047|\+47|47)?[2-9]\d{7}$/;
    const patternMatches = regExp.test(phone);
    return patternMatches;
}

overlayClose.onclick = function () {
    formSuccess.style.visibility = "hidden";
    formSuccess.style.opacity = "0";
}

formSuccess.onclick = ("click", (e) => {
    if (e.target.classList.contains("overlay")) {
        formSuccess.style.visibility = "hidden";
        formSuccess.style.opacity = "0";
    }
});

