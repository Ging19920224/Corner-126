const noodleList = document.querySelector('#noodle');
const riceList = document.querySelector('#rice');
const soupList = document.querySelector('#soup');
const vegetablesList = document.querySelector('#vegetables');

export default {
  createList: (obj) => {
    const { type } = obj;
    let dom = '';
    switch (type) {
      case 'noodle':
        dom = '<div class="position--absolute noodle"><img class="foodMenu__img" src="./images/noodles.png" alt="noodle"></div>';
        obj.menu.forEach((item) => {
          dom += `<a href="javascript:;" class="food-btn" data-id="${item.id}"><li class="noodle--bgc" data-id="${item.id}"><span class="foodName" data-id="${item.id}">${item.name}</span><span class="price position--sm" data-id="${item.id}">${item.price_s}</span><span class="price position--lg" data-id="${item.id}">${item.price_m}</span><span class="position--sm foodMenu__price position--absolute circle noodle--bgc" data-id="${item.id}">小</span><span class="position--lg foodMenu__price position--absolute circle noodle--bgc" data-id="${item.id}">大</span></li></a>`;
        });
        noodleList.innerHTML = dom;
        break;
      case 'rice':
        dom = '<div class="position--absolute rice"><img class="foodMenu__img" src="./images/rice.png" alt="rice"></div>';
        obj.menu.forEach((item) => {
          dom += `<a href="javascript:;" class="food-btn" data-id="${item.id}"><li class="rice--bgc" data-id="${item.id}"><span class="foodName" data-id="${item.id}">${item.name}</span><span class="price position--sm" data-id="${item.id}">${item.price_s}</span><span class="price position--lg" data-id="${item.id}">${item.price_m}</span><span class="position--sm foodMenu__price position--absolute circle rice--bgc" data-id="${item.id}">小</span><span class="position--lg foodMenu__price position--absolute circle rice--bgc" data-id="${item.id}">大</span></li></a>`;
        });
        riceList.innerHTML = dom;
        break;
      case 'soup':
        dom = '<div class="position--absolute rice"><img class="foodMenu__img" src="./images/soup.png" alt="soup"></div>';
        obj.menu.forEach((item) => {
          dom += `<a href="javascript:;" class="food-btn" data-id="${item.id}"><li class="soup--bgc" data-id="${item.id}"><span class="foodName" data-id="${item.id}">${item.name}</span><span class="price position--lg" data-id="${item.id}">${item.price_s}</span></li></a>`;
        });
        soupList.innerHTML = dom;
        break;
      case 'vegetables':
        dom = '<div class="position--absolute rice"><img class="foodMenu__img" src="./images/vegetables.png" alt="vegetables"></div>';
        obj.menu.forEach((item) => {
          dom += `<a href="javascript:;" class="food-btn" data-id="${item.id}"><li class="vegetables--bgc" data-id="${item.id}"><span class="foodName" data-id="${item.id}">${item.name}</span><span class="price position--lg" data-id="${item.id}">${item.price_s}</span></li></a>`;
        });
        vegetablesList.innerHTML = dom;
        break;
      default:
    }
  }
}