let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item'); // Corrigido para querySelectorAll
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list')

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;


function setSlider() {

    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) { itemOld.classList.remove('active'); }


    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerText = '0' + (active + 1)

}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider()
    items[active].classList.add('active');
};

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider()
    items[active].classList.add('active');
};

// modal funções //
var modal = document.getElementById("contactModal");


var btn = document.getElementById("contactBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

