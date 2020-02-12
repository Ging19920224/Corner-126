import axios from 'axios';
import menu from './foodMenu.js';

const foodMenu = {
  noodle: {
    menu: [],
    type: 'noodle',
  },
  rice: {
    menu: [],
    type: 'rice',
  },
  soup: {
    menu: [],
    type: 'soup',
  },
  vegetables: {
    menu: [],
    type: 'vegetables',
  },
  all: {
    menu: [],
    sum: '',
  },
};

axios.get('../data/image.json').then((response) => {
  const arr = response.data;
  foodMenu.all.menu = response.data;
  foodMenu.all.sum = foodMenu.all.menu.length;
  foodMenu.noodle.menu = arr.reduce((prev, current) => {
    if (current.type === 'noodle') {
      prev.push(current);
    }
    return prev;
  }, []);
  foodMenu.rice.menu = arr.reduce((prev, current) => {
    if (current.type === 'rice') {
      prev.push(current);
    }
    return prev;
  }, []);
  foodMenu.vegetables.menu = arr.reduce((prev, current) => {
    if (current.type === 'vegetables') {
      prev.push(current);
    }
    return prev;
  }, []);
  foodMenu.soup.menu = arr.reduce((prev, current) => {
    if (current.type === 'soup') {
      prev.push(current);
    }
    return prev;
  }, []);
  menu.createList(foodMenu.noodle);
  menu.createList(foodMenu.rice);
  menu.createList(foodMenu.soup);
  menu.createList(foodMenu.vegetables);
}).catch(() => {
  // console.log(error);
});

export default {
  foodMenu,
}