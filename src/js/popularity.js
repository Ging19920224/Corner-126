import $ from 'jquery';

const popularityItem = document.querySelector('.popularity__item');
const allItem = document.querySelectorAll('.popularity__item');
const itemID = [];
allItem.forEach((item) => itemID.push(item.id));
const popularityItemNum = allItem.length;
let popularityItemWidth;
let popularityItemMR;
let getMR;
let baseWidth;
let addWidth;
let lessWidth;
let count = 1;

function setWidth(screenWidth) {
  if (screenWidth <= 480) {
    switch (count) {
      case 1:
        addWidth = baseWidth * 1;
        break;
      case 2:
        addWidth = baseWidth * 2;
        lessWidth = 0;
        break;
      case 3:
        addWidth = baseWidth * 3;
        lessWidth = baseWidth * 1;
        break;
      case 4:
        addWidth = baseWidth * 4;
        lessWidth = baseWidth * 2;
        break;
      case 5:
        addWidth = baseWidth * 5;
        lessWidth = baseWidth * 3;
        break;
      default:
    }
  } else {
    switch (count) {
      case 3:
        addWidth = baseWidth * 1;
        break;
      case 4:
        addWidth = baseWidth * 2;
        lessWidth = baseWidth * 0;
        break;
      case 5:
        addWidth = baseWidth * 3;
        lessWidth = baseWidth * 1;
        break;
      default:
    }
  }
}

export default {
  setBaseWidth: () => {
    popularityItemWidth = popularityItem.offsetWidth;
    popularityItemMR = window.getComputedStyle(popularityItem).getPropertyValue('margin-right').split('px');
    getMR = Number(popularityItemMR[0]);
    baseWidth = popularityItemWidth + getMR;
    addWidth = baseWidth * 1;
    lessWidth = 0;
  },
  setCount: (screenWidth) => {
    if (screenWidth <= 480) {
      count = 1;
    } else {
      count = 3;
    }
  },
  setWidth: (screenWidth) => {
    if (screenWidth <= 480) {
      switch (count) {
        case 1:
          addWidth = baseWidth * 1;
          break;
        case 2:
          addWidth = baseWidth * 2;
          lessWidth = 0;
          break;
        case 3:
          addWidth = baseWidth * 3;
          lessWidth = baseWidth * 1;
          break;
        case 4:
          addWidth = baseWidth * 4;
          lessWidth = baseWidth * 2;
          break;
        case 5:
          addWidth = baseWidth * 5;
          lessWidth = baseWidth * 3;
          break;
        default:
      }
    } else {
      switch (count) {
        case 3:
          addWidth = baseWidth * 1;
          break;
        case 4:
          addWidth = baseWidth * 2;
          lessWidth = baseWidth * 0;
          break;
        case 5:
          addWidth = baseWidth * 3;
          lessWidth = baseWidth * 1;
          break;
        default:
      }
    }
  },
  next: (screenWidth) => {
    $('#next').on('click', () => {
      setWidth(screenWidth);
      if (count < popularityItemNum) {
        itemID.forEach((item) => {
          $(`#${item}`).animate({ left: `-${addWidth}px` }, 600);
        });
        count += 1;
      }
    });
  },
  prev: (screenWidth) => {
    $('#prev').on('click', () => {
      setWidth(screenWidth);
      if (count > 1) {
        count -= 1;
        itemID.forEach((item) => {
          $(`#${item}`).animate({ left: `-${lessWidth}px` }, 600);
        });
      }
    });
  },
  reset: () => {
    itemID.forEach((item) => {
      $(`#${item}`).animate({ left: '0px' }, 600);
    });
    $('#next').off('click');
    $('#prev').off('click');
  },
};
