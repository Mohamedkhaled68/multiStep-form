const switcher = document.getElementById('switcher');
const yearlyPlan = document.querySelectorAll('.yearlyPlan');
const price = document.querySelectorAll('.card-container .price')
const cards = document.querySelectorAll('.cards')
const btn = document.querySelector('.btn button')
const btn2 = document.querySelector('.btn2 button')
const pricesPerYear = ['$90/yr', '$120/yr', '$150/yr']
const pricesPerMonth = ['$9/mo', '$12/mo', '$15/mo']



btn.addEventListener('click', () => {
    location.assign('../pages/third.html')
})
btn2.addEventListener('click', () => {
    location.assign('../pages/third.html')
})


window.addEventListener('load', ()=> {
    localStorage.removeItem('packPrice')
    localStorage.removeItem('packName')
    for(i = 0; i < price.length; i++){
        price[i].setAttribute(`data-price`, price[i].innerHTML)
        localStorage.setItem(`pricePereny ${i + 1}`, price[i].innerHTML)
        localStorage.removeItem(`choosenPack${i + 1}`)
        localStorage.removeItem(`packName${i + 1}`)
    }
})




switcher.addEventListener('change', () => {
    yearlyPlan.forEach((el) => {
        el.classList.toggle('disable')
    })
    
    if (switcher.checked) {
        year.classList.remove('choosen');
        const month = document.querySelector('.toggler #month');
        month.classList.add('choosen');
        for(let i = 0; i < price.length; i++){
            price[i].innerHTML = pricesPerMonth[i]
            price[i].setAttribute(`data-price`, price[i].innerHTML)
            localStorage.setItem(`pricePereny ${i + 1}`, price[i].innerHTML)
        }
    }else{
        month.classList.remove('choosen')
        const year = document.querySelector('.toggler #year')
        year.classList.add('choosen')
        for(let i = 0; i < price.length; i++){
            price[i].innerHTML = pricesPerYear[i]
            price[i].setAttribute(`data-price`, price[i].innerHTML)
            localStorage.setItem(`pricePereny ${i + 1}`, price[i].innerHTML)
        }
    }
    
});

cards.forEach((el) => {
    el.addEventListener('click', () => {
        removeAllChoose();
        el.classList.add('choose')
        btn.classList.remove('locked');
        btn.classList.add('unlocked');
        btn2.classList.remove('locked');
        btn2.classList.add('unlocked');
        const packPrice = el.querySelector('.price');
        const packName = el.querySelector('h3')
        localStorage.setItem('packPrice', packPrice.innerHTML);
        localStorage.setItem('packName', packName.innerHTML);
    })
})
function unCheck() {
    switcher.checked = false;
    month.classList.remove('choosen')
    const year = document.querySelector('.toggler #year')
    year.classList.add('choosen')
}

window.addEventListener('load', unCheck, false);


function removeAllChoose () {
    cards.forEach((el) => {
        el.classList.remove('choose')
    })
}

