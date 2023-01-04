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
$('#banner').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    lazyLoad:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    items: 1,
    dots: true,
    dotsEach: true,
});

$('#product').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      },
});

$('#product-trend').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
});
