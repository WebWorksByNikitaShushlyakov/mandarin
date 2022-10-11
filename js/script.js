const burger = document.querySelector('.burger');
const menuSide = document.querySelector('.menu_side');
burger.onclick = function(){
  menuSide.classList.toggle('menu_up');
}
