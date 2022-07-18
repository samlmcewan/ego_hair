const container = document.querySelector('#main-nav .container');

const containerMargin = window.getComputedStyle(container).getPropertyValue('margin-right');

const heroBtn = document.querySelector('.hero-btn');

if(heroBtn !== null) {
    heroBtn.style.marginRight = containerMargin;
}
