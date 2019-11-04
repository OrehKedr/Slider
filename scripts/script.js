let images = document.querySelectorAll('.slider img')
let current = 0

document.querySelector('.slider').onclick = slider
slider()

function slider(){
    images.forEach(img => img.classList.add('opacity0'));
    images[current].classList.remove('opacity0')
}

document.getElementById('btn-right').onclick = function(){
    current + 1 == images.length ? current = 0 : current++
    slider()
}

document.getElementById('btn-left').onclick = function(){
    current - 1 == -1 ? current = images.length-1 : current--
    slider()
}