window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 200);
})


function toggleMenu() {
    var menuToggle = document.querySelector('.icon-menu');
    var menu = document.querySelector('.menu')
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}