const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const navbar = document.querySelector('.navbar')
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('change');
} );