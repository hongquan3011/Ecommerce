const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);
const menuBottomBar = $$("#bottom-bar");
const menuMyaccount = $$(".top-bar__actions-account__menu");
const menuMyaccountBtn = $$(".top-bar__actions-account");
const menuMobileBtn = $$(".bottom-bar__mobile");
const menuMobile = $$('.bottom-bar__list')
//open menu
function OpenMenu() {
  menuMyaccount.classList.toggle("open");
}
//close menu
function CloseMenu() {
  menuMyaccount.classList.remove("open");
}
//scroll bar
window.onscroll = () => {
  if (window.scrollY > 150) {
    menuBottomBar.classList.add("fixed");
  } else {
    menuBottomBar.classList.remove("fixed");
  }
};
//open menu mobile
menuMobileBtn.onclick = () =>{
  menuMobile.classList.toggle('open')
}

//tab product
const tabs = $$$(".tab-item");
const panes = $$$(".tab-pane");

const tabActive = $$(".tab-item.active");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $$(".tab-item.active").classList.remove("active");
    $$(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});

//slide ảnh
$("#banner").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  items: 1,
  dots: true,
  dotsEach: true,
});

$("#women-product").owlCarousel({
  loop: true,
  margin: 30,
  // nav: true,
  // navText: [
  //   "<div class='nav-button owl-prev'>‹</div>",
  //   "<div class='nav-button owl-next'>›</div>",
  // ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$("#men-product").owlCarousel({
  loop: true,
  margin: 30,
  // nav: true,
  // navText: [
  //   "<div class='nav-button owl-prev'>‹</div>",
  //   "<div class='nav-button owl-next'>›</div>",
  // ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$("#featured-product").owlCarousel({
  loop: true,
  margin: 30,
  // nav: true,
  // navText: [
  //   "<div class='nav-button owl-prev'>‹</div>",
  //   "<div class='nav-button owl-next'>›</div>",
  // ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$("#product-trend").owlCarousel({
  loop: true,
  margin: 30,
  // nav: true,
  // navText: [
  //   "<div class='nav-button owl-prev'>‹</div>",
  //   "<div class='nav-button owl-next'>›</div>",
  // ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
