const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const buttonPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.getElementById('l-form');
const registerForm = document.getElementById('r-form');

const email= document.getElementById('email');
const password = document.getElementById('password');
const errorElement = document.getElementById('error')

const rUsername = document.getElementById('r-username')
const rEmail= document.getElementById('r-email');
const rPassword = document.getElementById('r-password');
const rPasswordConfirm = document.getElementById('r-passwordConfirm');

const rErrorElement = document.getElementById('r-error')
const agree = document.getElementById('agree');

const homeLink = document.getElementById('home-link')
const aboutLink = document.getElementById('about-link')
const contactLink = document.getElementById('contact-link')

registerLink.addEventListener('click', () =>{ 
    wrapper.classList.add("active");
})

loginLink.addEventListener('click', () =>{ 
    wrapper.classList.remove("active");
})

buttonPopup.addEventListener('click', () => {
    wrapper.classList.add("active-popup");
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove("active-popup");
})

homeLink.addEventListener('click', () => {
    wrapper.classList.add("active-popup")
})

aboutLink.addEventListener('click', () => {
    wrapper.classList.add("active-popup")
})

contactLink.addEventListener('click', () => {
    wrapper.classList.add("active-popup")
})

loginForm.addEventListener('submit', (e) => {
    let emailVal = email.value;
    // console.log(emailVal)
    // console.log(emailVal[emailVal.length-1])
    let messages = []
    if(email.value === '' || email.value === null){
        messages.push('Email is required')
    }
    if(email.value.includes(' ')){
        messages.push('Not a valid email')
    }
    if(!email.value.includes('@')){
        messages.push('Not a valid email')
    }
    if(!email.value.includes('.')){
        messages.push('Not a valid email')
    }
    if(emailVal[emailVal.length-1] === "."){
        messages.push('Not a valid email')
    }
    if(password.value.length < 6){
        messages.push('Password cannot be less than 6 characters')
    }
    if(password.value.length > 17){
        messages.push('Password cannot be longer than 17 characters')
    }
    if(password.value === "password"){
        messages.push('Password cannot be password')
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join('\n');
    }
})

registerForm.addEventListener('submit', (e) => {
    let messages = [];
    let rEmailVal = rEmail.value;
    if(!rEmail.value.includes('@') || !rEmail.value.includes('.')){
        messages.push('Not a valid email');
    }
    if(rEmail.value.includes(' ')){
        messages.push('Not a valid email');
    }
    if(rEmailVal[rEmailVal.length-1] === "."){
        messages.push('Not a valid email');
    }
    if(rPassword.value.length < 6){
        messages.push('Password cannot be less than 6 characters')
    }
    if(rPassword.value.length > 17){
        messages.push('Password cannot be longer than 17 characters')
    }
    if(rPassword.value === "password"){
        messages.push('Password cannot be password')
    }
    if(rPasswordConfirm.value.length < 6){
        messages.push('Password cannot be less than 6 characters')
    }
    if(rPasswordConfirm.value.length > 17){
        messages.push('Password cannot be longer than 17 characters')
    }
    if(rPasswordConfirm.value === "password"){
        messages.push('Password cannot be password')
    }
    if(rPassword.value !== rPasswordConfirm.value){
        messages.push('Passwords do not match')
    }
    
    if(!agree.checked){
        messages.push('You have to agree to the terms and conditions')
    }
    if(messages.length > 0){
        e.preventDefault();
        rErrorElement.innerText = messages.join('\n');
    }
})
