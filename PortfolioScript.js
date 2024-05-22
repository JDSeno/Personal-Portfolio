// Open and Close of Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');

menu.onclick = () => {
  if (menu.classList.contains('bx-x')) {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
  } else {
    menu.classList.add('bx-x');
    navbar.classList.add('open');
  }
}


