const $a = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const menuBottomBar = $a('#bottom-bar')
const menuMyaccount = $a('.top-bar__actions-account__menu')
const menuMyaccountBtn = $a('.top-bar__actions-account');
//open menu
function OpenMenu() {
    menuMyaccount.classList.toggle('open')
}
//close menu
function CloseMenu() {
    menuMyaccount.classList.remove('open')
}
//scroll bar
window.onscroll = () => {
    if (window.scrollY > 150) {
        menuBottomBar.classList.add('fixed')
    } else {
        menuBottomBar.classList.remove('fixed')
    }
}
//slide ảnh 
$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        items: 1,
        dots:true,
        dotsEach:true,
    })

});
