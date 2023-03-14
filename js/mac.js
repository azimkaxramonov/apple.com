let white = document.querySelector('.white')
let spacegrey = document.querySelector('.space_grey')
let pricecolor = document.querySelector('.macprice a')
let macimg = document.querySelector('.macwork img')
white.onclick = () => {
    macimg.setAttribute('src', 'img/mbp14-spacegray-select-202110 1.svg')
    white.classList.toggle('active')
    if (spacegrey.classList.contains('active')) {
        spacegrey.classList.remove('active')
    } if (pricecolor.innerHTML == 'white') {
        pricecolor.innerHTML = 'white'
    } else {
        pricecolor.innerHTML = 'white'
    }

}

spacegrey.onclick = () => {
    macimg.setAttribute('src', 'img/mbp14-silver-select-202110 1.svg')
    spacegrey.classList.toggle('active')
    if (white.classList.contains('active')) {
        white.classList.remove('active')
    } if (
        pricecolor.innerHTML == 'spacegrey'
    ) {
        pricecolor.innerHTML = 'Space Grey'
    } else {
        pricecolor.innerHTML = 'Space Grey'
    }


}

let color = document.querySelector('mac')


let btns = document.querySelectorAll('.memory button')
let price = document.querySelector('.text')

let pricememory = {
    '512 GB SSD': "1999$",
    '1 TB SSD': "2199$"
}
btns.forEach((btn) => {
btn.onclick = () => {
let pricechange = price.innerHTML

price.setAttribute('h2', pricememory[pricechange])



}

})

console.log(price);
