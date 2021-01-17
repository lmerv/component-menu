function test(){
  console.log('hello world john');
};

let menuMobileWindowSize = function() {

  var open__menu = document.getElementById('burger-open');
  var close__menu = document.getElementById('burger-close');
  var nav__menu = document.getElementById('menu-nav');

  console.log('resize');
    if( window.matchMedia("(min-width: 900px)").matches )
    {
      console.log('test resize)');
      nav__menu.style.display = '';
    }
};

let mobileMenuOpenScript = function() {
  var open__menu = document.getElementById('burger-open');
  var close__menu = document.getElementById('burger-close');
  var nav__menu = document.getElementById('menu-nav');

  
  open__menu.onclick = function() {
    // console.log('Open that menu');
  
    nav__menu.style.display = '';
    open__menu.style.display = 'none';
    close__menu.style.display ='';
  };

  close__menu.onclick = function() {
    // console.log('Close that menu');
    nav__menu.style.display = 'none';
    open__menu.style.display = '';
    close__menu.style.display ='none';
  };
};

window.onload = function() {
  mobileMenuOpenScript();
};

window.onresize = function() {
  menuMobileWindowSize();
};
//# sourceMappingURL=main.js.map
