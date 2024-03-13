const burger = document.querySelector('.burger');
const list = document.querySelector('.nav__list');

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    list.classList.toggle('active');
})

// STICKY
window.addEventListener('scroll', function () {
    nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 10)
})