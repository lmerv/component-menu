
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".navigation__menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);
// function test(){
//   console.log('hello world john');
// };

// let menuMobileWindowSize = function() {

//   var open__menu = document.getElementById('burger-open');
//   var close__menu = document.getElementById('burger-close');
//   var nav__menu = document.getElementById('menu-nav');

//   console.log('resize');
//     if( window.matchMedia("(min-width: 900px)").matches )
//     {
//       console.log('test resize)');
//       nav__menu.style.display = '';
//     }
// };

// let mobileMenuOpenScript = function() {
//   var open__menu = document.getElementById('burger-open');
//   var close__menu = document.getElementById('burger-close');
//   var nav__menu = document.getElementById('menu-nav');

  
//   open__menu.onclick = function() {
//     // console.log('Open that menu');
  
//     nav__menu.style.display = '';
//     open__menu.style.display = 'none';
//     close__menu.style.display ='';
//   };

//   close__menu.onclick = function() {
//     // console.log('Close that menu');
//     nav__menu.style.display = 'none';
//     open__menu.style.display = '';
//     close__menu.style.display ='none';
//   };
// };

// window.onload = function() {
//   mobileMenuOpenScript();
// };

// window.onresize = function() {
//   menuMobileWindowSize();
// };
//# sourceMappingURL=main.js.map
