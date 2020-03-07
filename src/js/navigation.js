import $ from 'jquery';

export default {
  navBottom: () => {
    $('li').on('mouseenter', (e) => {
      const bottom = $(`#${e.target.dataset.id}`).find('.nav__list--border');
      $(bottom).stop(true, false).animate({ width: '100%' }, 300);
    }).on('mouseleave', (e) => {
      const bottom = $(`#${e.target.dataset.id}`).find('.nav__list--border');
      $(bottom).stop(true, false).animate({ width: '0%' }, 300);
    });
  },
  menuBtn: () => {
    $('.nav__menu').on('click', () => {
      $('.nav__list').slideToggle(500);
    });
  },
};
