const users = [
    {
        name: 'Asabeneh',
        country: 'Finland',
        age: 100
    },
    {
        name: 'Asabeneh',
        country: 'Finland',
        age: 100
    },
    {
        name: 'Asabeneh',
        country: 'Finland',
        age: 100
    }
];
let user = {};
const signupForm = document.querySelector('.signup-form')
const loginForm = document.querySelector('.login-form')
const signupButton = document.querySelector('.signup-button');
const loginButton = document.querySelector('.login-button');
const linkToLogin = document.querySelector('.link-to-login');
const linkToSignup = document.querySelector('.link-to-signup');
const hideSignupForm = () => {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';

}

signupForm.addEventListener('input', (e) => {
    let name = e.target.attributes.name.value;
    user[name] = e.target.value;
    console.log('What is in here ?');
    console.log(e.target.value)


});

signupButton.addEventListener('click', (e) => {
    console.log('what is happening?')
    e.preventDefault();
    users.push(user);
    console.log(users);
    hideSignupForm()
})

linkToLogin.addEventListener('click', hideSignupForm);

linkToSignup.addEventListener('click', (e) => {
    e.preventDefault()
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';

});
console.log(users)

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.pathname = "/html/users.html";
})