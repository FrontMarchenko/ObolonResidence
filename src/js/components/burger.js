const burgerBtn = $('.js-burger');
const headerMenu = $('.js-header');
const body = $('body');
let windowTop = 0;

burgerBtn.on('click', function() {
  if ($(this).hasClass('is-active')) {
    body.removeClass('is-hidden');
    $(window).scrollTop(windowTop);
    $(this).removeClass('is-active');
    headerMenu.removeClass('is-open');
  } else {
    windowTop = $(window).scrollTop();
    $(this).addClass('is-active');
    headerMenu.addClass('is-open');
    body.addClass('is-hidden');
  }

});

$(window).resize(() => {
    let w = $(window).width();
    if(w >= 768) {
        burgerBtn.removeClass('is-active')
        headerMenu.removeClass('is-open')
        body.removeClass('is-hidden');
    }
});