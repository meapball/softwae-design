// splash screen

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
            document.getElementById('login-page').style.display = 'block';
        }, 2300);

    }, 0); // Added a function for setTimeout
});

// login

const loginPage = document.getElementById('login-page');
const signupPage = document.getElementById('signup-page');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    loginPage.style.display = 'block';
    signupPage.style.display = 'none';
});

signupLink.addEventListener('click', function (event) {
    event.preventDefault();
    loginPage.style.display = 'none';
    signupPage.style.display = 'block';
});

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Implement login functionality here
    console.log('Login clicked');
});

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Implement signup functionality here
    console.log('Sign Up clicked');
});
