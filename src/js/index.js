/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable import/no-dynamic-require */
import '../scss/index.scss';
import '../index.html';
import '@babel/polyfill';
import $ from 'jquery';
import data from './data';
import loading from './loading';
import nav from './navigation';
import header from './header';
import lightBox from './lightBox';
import popularity from './popularity';

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
