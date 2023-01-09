const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);
const menuBottomBar = $$("#bottom-bar");
const menuMyaccount = $$(".top-bar__actions-account__menu");
const menuMyaccountBtn = $$(".top-bar__actions-account");
const menuMobileBtn = $$(".bottom-bar__mobile");
const menuMobile = $$('.bottom-bar__list')
const filterBtn = $$('.side-bar__filter')
const filterMobile = $$('.side-bar')
const valueRange = $$('#side-bar__price-range');
const valueLabel = $$('.side-bar__value-range');
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

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    $$(".tab-item.active").classList.remove("active");
    $$(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});

//value range
function CountValueRange (){
  valueLabel.innerHTML = '$ ' + valueRange.value;
}
// pagination page 

// filterBtn.onclick = () =>{
//   filterMobile.classList.toggle('open')
// }

// accordion
var acc = document.getElementsByClassName("faq__accordion-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
     
    } else {
  
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}