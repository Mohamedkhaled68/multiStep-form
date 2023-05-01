const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subBtn = document.querySelector('.btn button');
const subBtn2 = document.querySelector('.btn2 button');

window.onload = () => {
    name.focus()
    sessionStorage.clear()
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInp();
    activeBtn();
    activeBtn2();

});



//check if input is empty
function checkInp (){
    const nameValue = name.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()

    if (nameValue == ''){
        //make a function take input and error message
        showError(name, 'this field must be filled')
    }else if(nameValue.length < 3){
        //show the same error with diffirent message
        showError(name, 'enter invalid name')
    }else{
        //make a function show no error
        showNoError(name);
        sessionStorage.setItem('name', nameValue);
    }

    if (emailValue == ''){
        //make a function take input and error message
        showError(email, 'this field must be filled')
    }else if(!isEmail(emailValue)){
        showError(email, 'enter invalid email')
    }
    else{
        //make a function show no error
        showNoError(email)
        sessionStorage.setItem('email', emailValue);
    }



    if (phoneValue == ''){
        //make a function take input and error message
        showError(phone, 'this field must be filled')
    }else if(isNotANumber(phoneValue)){
        showError(phone, 'enter invalid number')
    }
    else{
        //make a function show no error
        showNoError(phone)
        sessionStorage.setItem('phone', phoneValue);
    }
}

function showError(inp, message) {
    const inpContainer = inp.parentElement
    const errorMessage = inpContainer.querySelector('.error-message')
    inp.classList.remove('pass')
    inp.classList.add('wrong')
    errorMessage.innerHTML = message;
}

function showNoError(inp) {
    const inpContainer = inp.parentElement
    const errorMessage = inpContainer.querySelector('.error-message')
    inp.classList.remove('wrong')
    inp.classList.add('pass')
    errorMessage.innerHTML = '';
}

function isEmail (inpValue) {
    return inpValue.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

function isNotANumber (inpValue) {
    return isNaN(inpValue)
}

function activeBtn() {
    if(sessionStorage.length == 3){
        subBtn.classList.remove('locked')
        subBtn.classList.add('unlocked');
        subBtn.addEventListener('click', () => {
            location.assign('../pages/second.html')
        })
    }
}


function activeBtn2() {
    if(sessionStorage.length == 3){
        subBtn2.classList.remove('locked')
        subBtn2.classList.add('unlocked');
        subBtn2.addEventListener('click', () => {
            location.assign('../pages/second.html')
        })
    }
}






