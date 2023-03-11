let fullImage = document.querySelector('#fullImage')

let blue = document.querySelector('.colorBlue')

let purple = document.querySelector('.colorPink')

let yellow = document.querySelector('.colorYellow')

let black = document.querySelector('.colorBlack')

let white = document.querySelector('.colorWhite')

let red = document.querySelector('.colorRed')

blue.onclick = () => {
    fullImage.setAttribute('src', 'img/iphone-14-blue.jfif')
}
purple.onclick = () => {
    fullImage.setAttribute('src', 'img/iphone-14-purple.jfif')
}
yellow.onclick = () => {
    fullImage.setAttribute('src', 'img/iphone-14-yellow.jfif')
}
black.onclick = () => {
    fullImage.setAttribute('src', 'img/iphone-14-midnight.jfif')
}
white.onclick = () => {
    fullImage.setAttribute('src', 'img/iphone-14-starlight.jfif')
}
red.onclick = () => {
    fullImage.setAttribute('src', 'img/iphone-14-red.jfif')
}
console.log(fullImage);