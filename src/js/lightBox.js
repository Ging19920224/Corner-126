import $ from 'jquery';

let imgHeight;
let imgWidth;
let id = 0;

function getImg(id, foodMenu) {
  const obj = foodMenu.filter((item) => item.id == id);
  const { type } = obj[0];
  const domM = `<a href="javascript:;" class="close-btn"><i class="fas fa-times-circle"></i></a><img src="${obj[0].imgUrl}"><p class="foodLightBox__name text--center mt--10">${obj[0].name}</p><p class="text--center mt--10"><span class="foodLightBox__price">小碗 $ ${obj[0].price_s}</span><span class="foodLightBox__price">大碗 $ ${obj[0].price_m}</span></p>`;
  const domS = `<a href="javascript:;" class="close-btn"><i class="fas fa-times-circle"></i></a><img src="${obj[0].imgUrl}"><p class="foodLightBox__name text--center mt--10">${obj[0].name}</p><p class="text--center mt--10"><span class="foodLightBox__price">小碗 $ ${obj[0].price_s}</span></p>`;
  switch (type) {
    case 'noodle':
      $('.show__food').append(domM);
      break;
    case 'rice':
      $('.show__food').append(domM);
      break;
    case 'soup':
      $('.show__food').append(domS);
      break;
    case 'vegetables':
      $('.show__food').append(domS);
      break;
    default:
  }
}

export default {
  setSize: (screenHeight, screenWidth) => {
    switch (true) {
      case (screenHeight <= 414 && screenHeight > 320):
        imgWidth = '500px';
        imgHeight = '360px';
        break;
      case (screenHeight <= 320):
        imgWidth = '400px';
        imgHeight = '320px';
        break;
      case (screenWidth <= 480 && screenWidth > 320):
        imgWidth = '100%';
        imgHeight = '340px';
        break;
      case (screenWidth <= 320):
        imgWidth = '100%';
        imgHeight = '60%';
        break;
      default:
        imgWidth = '700px';
        imgHeight = '500px';
        break;
    }
  },
  open: (foodMenu) => {
    $('.food-btn').on('click', (e) => {
      $('.foodLightBox').css('opacity', '1').css('z-index', '99').css('width', imgWidth)
      .css('height', imgHeight);
      id = Number(e.target.parentNode.dataset.id);
      getImg(id, foodMenu);
      $('.food-btn').off('click');
    });
  },
  nextImg: (foodMenu, sum) => {
    $('.next-btn').on('click', () => {
      if (id >= sum - 1) id = -1;
      id += 1;
      $('.show__food').html('');
      getImg(id, foodMenu);
    });
  },
  prevImg: (foodMenu, sum) => {
    $('.prev-btn').on('click', () => {
      if (id <= 0) id = sum;
      id -= 1;
      $('.show__food').html('');
      getImg(id, foodMenu);
    });
  }
}
