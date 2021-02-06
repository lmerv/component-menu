// Main.js
// on doit le passer par babel pour ecma 

let hamburgerIcon = function()
{
  var hamburger = document.querySelector('.navigation__icon')
  var menu = document.querySelector('.navigation__menu')
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('menu--open');
    menu.classList.toggle('is--open')
  });
};

let subMenu = function() 
{
  var subMenuClose = document.querySelectorAll('.submenu--close');
  subMenuClose.forEach
  (
    item => 
    {
      item.addEventListener
      (
        'click', event => 
        {
          if(item.hasAttribute('class', 'submenu--close')) {
            item.removeAttribute('class', 'submenu--close');
          } else {
            item.setAttribute('class', 'submenu--close');
          }          
        }
      )
    }
  )
}

let menuMobileWindowSize = function() 
{
    if( window.matchMedia("(min-width: 798px)").matches )
    {
      document.querySelector('.navigation__icon').classList.add('icon--hidden');
      document.querySelector('.navigation__menu').classList.remove('navigation--vertical');
      document.querySelector('.navigation__menu').classList.add('navigation--horizontal');
      } else {
      document.querySelector('.navigation__icon').classList.remove('icon--hidden');
      document.querySelector('.navigation__menu').classList.add('navigation--vertical');
      document.querySelector('.navigation__menu').classList.remove('navigation--horizontal');
    }  
};

window.onload = function() {
  hamburgerIcon();
  subMenu();
  menuMobileWindowSize();
};

window.onresize = function() {
  menuMobileWindowSize();
};

//# sourceMappingURL=main.js.map
