import '../scss/index.scss';
import '../index.html';
import '@babel/polyfill';
import $ from 'jquery';
import data from './data.js';
import loading from './loading.js';
import nav from './navigation.js';
import header from './header.js';
import lightBox from './lightBox.js';
import popularity from './popularity.js';

const jpg = 'person1.jpg';
const png = 'rice.png';
require('../images/' + jpg);
require('../images/' + png);

let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
const titles = [$('#environment'), $('#about'), $('#food-menu'), $('#evaluation'), $('#contact')];

function appear(target) {
  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    const scrollBottom = scrollTop + screenHeight;
    const targetTop = target.offset().top;
    const targetHeight = target.height();
    const targetBottom = targetTop + targetHeight;
    const h2Bottom = $(target).find('h2');
    if ((scrollBottom >= targetTop) || (scrollTop === targetBottom)) {
      target.animate({ opacity: 1 }, 1500);
      h2Bottom.addClass('change');
    }
  });
}

$(document).ready(() => {
  loading.loading();
  nav.navBottom();
  nav.menuBtn();
  setInterval(header.HeaderBtn, 2000);
  titles.forEach((item) => {
    appear(item);
  });
  lightBox.setSize(screenHeight, screenWidth);
  lightBox.open(data.foodMenu.all.menu);
  lightBox.nextImg(data.foodMenu.all.menu, data.foodMenu.all.sum);
  lightBox.prevImg(data.foodMenu.all.menu, data.foodMenu.all.sum);
  lightBox.closeBtn(data.foodMenu.all.menu);
  popularity.setCount(screenWidth);
  popularity.setBaseWidth();
  popularity.setWidth(screenWidth);
  popularity.next(screenWidth);
  popularity.prev(screenWidth);
  $('a[href^="#"]:not([href="#"])').on('click', (e) => {
    const navHeight = $('nav').height() + 20;
    let target = $(e.target.parentNode.hash);
    if (!e.target.parentNode.hash) {
      target = $(e.target.parentNode.parentNode.hash); 
    }
    $('html,body').animate({ scrollTop: target.offset().top - navHeight }, 800);
  });
  $(window).resize(() => {
    screenWidth = window.screen.width;
    screenHeight = window.screen.height;
    lightBox.setSize(screenHeight, screenWidth);
    popularity.reset();
    popularity.setCount(screenWidth);
    popularity.setBaseWidth();
    popularity.setWidth(screenWidth);
    popularity.next(screenWidth);
    popularity.prev(screenWidth);
  });
});