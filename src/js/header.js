import $ from 'jquery';

export default {
  HeaderBtn: () => {
    $('.header__btn__mask').css('transform', 'scale(2.5)');
    setTimeout(() => {
      $('.header__btn__mask').css('transform', 'scale(0.0)');
    }, 1000);
  },
};
