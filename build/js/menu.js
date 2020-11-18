var nav = document.querySelector('.page-header');
var navToggle = nav.querySelector('.page-header__toggle');

nav.classList.remove('page-header--nojs');

navToggle.addEventListener('click',function () {
  if (nav.classList.contains('page-header--closed')) {
    nav.classList.remove('page-header--closed');
    nav.classList.add('page-header--opened');
  }else {
    nav.classList.remove('page-header--opened');
    nav.classList.add('page-header--closed');
  }
});
