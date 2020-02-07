import $ from 'jquery';

function loadingRotate() {
  $('.loading__mask').css('transform', 'rotateZ(180deg)');
}
function loadingDisappear() {
  $('.loading').animate({ opacity: '0' }, 1000).animate({ 'z-index': '-2' }, 500);
}

export default {
  loading: () => {
    $('.loading__mask').css('transform', 'rotateY(180deg)');
    setTimeout(loadingRotate, 1100);
    setTimeout(loadingDisappear, 2100);
  }
}