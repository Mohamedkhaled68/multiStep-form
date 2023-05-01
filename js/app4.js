const mainPackName = document.querySelector(".type");
const mainPackPrice = document.querySelector(".checkout-price");
const mainPacksDiv = document.querySelector('.choosen-packs')
const btn = document.querySelector('.btn button');
const btn2 = document.querySelector('.btn2 button');

const result = document.querySelector('.total-price')

mainPackName.innerHTML = localStorage.getItem('packName')
mainPackPrice.innerHTML = localStorage.getItem('packPrice')


btn.addEventListener('click', () => {
    location.assign('../pages/thanks.html')
})
btn2.addEventListener('click', () => {
    location.assign('../pages/thanks.html')
})

for (let  i = 0;  i < localStorage.length;  i++) {
    const customPackName = localStorage.getItem(`packName${i +  1}`)
    const customPackPrice = localStorage.getItem(`choosenPack${i +1}`)
    let one = document.createElement('div')
    if(customPackName == null &&  customPackPrice == null){
        continue
    }
    one.className = 'one'
    let choosenOne = document.createElement('p')
    choosenOne.className = 'choosen-one'
    let choosenPrice = document.createElement('span')
    choosenPrice.className = 'choosen-price'
    let nameTxt = document.createTextNode(`${customPackName}`)
    let priceTxt = document.createTextNode(`${customPackPrice}`)
    choosenOne.appendChild(nameTxt)
    choosenPrice.appendChild(priceTxt)
    one.appendChild(choosenOne)
    one.appendChild(choosenPrice)
    mainPacksDiv.appendChild(one)
}


let mainPrice = mainPackPrice.innerHTML.split('').filter((el) => !isNaN(el)).join('');


let otherPrices = mainPacksDiv.querySelectorAll('.one .choosen-price');

let arr = [];
otherPrices.forEach((el) => {
    arr.push(parseInt(extractNum(el)))
})

arr.push(parseInt(mainPrice));

let final = arr.reduce((acc, curr) => {
    return acc + curr
})


result.innerHTML = `+$${final}/mo`



function extractNum (element){
    return element.innerHTML.split('').filter((element) => !isNaN(element)).join('');
}



