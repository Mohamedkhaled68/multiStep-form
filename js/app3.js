const price = document.querySelectorAll('.pack .price')
const checks = document.querySelectorAll('.pack .check')
const packs = document.querySelectorAll('.pack')
const btn = document.querySelector('.btn button')
const btn2 = document.querySelector('.btn2 button')
const storedPrices = [];
const keys = []

btn.addEventListener('click', () => {
    location.assign('../pages/last.html')
})
btn2.addEventListener('click', () => {
    location.assign('../pages/last.html')
})

window.addEventListener('load', () => {
    for(let i = 0; i < packs.length; i++){
        localStorage.removeItem(`choosenPack${i + 1}`)
        localStorage.removeItem(`packName${i + 1}`)
    }
})


for(let i = 0; i < 3; i++){
    let key = localStorage.getItem(`pricePereny ${i + 1}`)
    keys.push(key)
    storedPrices.push([keys[i]]);
}


price.forEach(() => {
    for(let i = 0; i < storedPrices.length; i++){
        price[i].innerHTML = `+${storedPrices[i]}`
    }
})



packs.forEach((el) => {
    el.addEventListener('click', (e) => {
        const ownCheck = el.querySelector('input')
        e.target.classList.toggle('choose')
        if(e.target.classList.contains('choose')){
            ownCheck.checked = true;
            const spans = el.querySelector('.price').innerHTML;
            const packName = el.querySelector('.n')
            localStorage.setItem(el.dataset.pr, spans)
            localStorage.setItem(packName.dataset.name, packName.innerHTML)
            btn.classList.remove('locked');
            btn.classList.add('unlocked');
            btn2.classList.remove('locked');
            btn2.classList.add('unlocked');
        }else{
            const spans = el.querySelector('.price').innerHTML;
            const packName = el.querySelector('.n')
            ownCheck.checked = false;
            localStorage.removeItem(el.dataset.pr, spans)
            localStorage.setItem(packName.dataset.name, packName.innerHTML)
        }
        
    })
    
})


function unCheck() {
    checks.forEach((el) => {
        el.checked = false;
    })
    packs.forEach((el)=>{
        el.classList.remove("choose")
    })
}
window.addEventListener('load', unCheck, false);



