const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const country = document.getElementById('country');
const city = document.getElementById('city');
const address = document.getElementById('address');
const mobile = document.getElementById('mobile');
const terms = document.getElementById('terms');

const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const error = document.getElementById('error');
const emailError = document.getElementById('emailError');
const countryError = document.getElementById('countryError');
const cityError = document.getElementById('cityError');
const addressError = document.getElementById('addressError');
const phoneError = document.getElementById('phoneError');
const termsError = document.getElementById('termsError');

form.addEventListener('submit', function (e) {
    e.preventDefault()
    formValidation();
});

function formValidation() {
    if (userName.value === "") {
        error.style.visibility = 'visible';
    } else {
        error.style.visibility = 'hidden';
    }


    if (email.value === "") {
        emailError.style.visibility = 'visible';

    } else if (!emailValidation(email.value)) {
        emailError.style.visibility = 'visible';
    } else {
        emailError.style.visibility = 'hidden';
    }

 if(password.value === ""){
    passwordError.style.visibility = "visible";
 }else{
    passwordError.style.visibility = "hidden";
 }
 
 if(country.value === "country"){
    countryError.style.visibility = 'visible';
 } else{
    countryError.style.visibility = 'hidden';
 }
  
if(city.value === "city"){
    cityError.style.visibility = 'visible';
} else{
    cityError.style.visibility = 'hidden';
}

if(address.value === ""){
    addressError.style.visibility = 'visible';
} else{
    addressError.style.visibility = 'hidden';
}
 if(mobile.value === ""){
    phoneError.style.visibility = "visible"
 }else{
    phoneError.style.visibility = "hidden"
 }
 
 if(terms.checked == false){
    termsError.style.visibility = 'visible'
 } else{
    termsError.style.visibility = 'hidden'
 }
 checkPasswordsMatch(password, confirmPassword);

}


function emailValidation(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
} 

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        confirmPasswordError.style.visibility = 'visible';
    } else{
        confirmPasswordError.style.visibility = 'hidden';
    }
  }