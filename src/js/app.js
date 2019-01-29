import sayHello from './lib/sayHello.js';
import './components/burger';
import './components/tabs';
import slick from 'slick-carousel';
import setLang from './components/translate.js';
sayHello();
//Set lang
var language = window.navigator ? (	 window.navigator.language
  || window.navigator.systemLanguage
  || window.navigator.userLanguage
) : 'en';

language = language.substr(0, 2).toLowerCase();

if (language !== 'ru') { language = 'en'; }
setLang(language);

/* toggle language */
$('.js-toggle-lang').click(function() {
  let language = $(this).data('lang');
  if (language !== 'ru') {setLang('ru');} else {setLang('en');}
});

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=443271375714375';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


$('.js-popup-open').each(function () {
  $(this).on('click', function (e) {
    e.preventDefault();

    let popup = $(this).attr('data-popup-target')

    openPopup(`[data-popup="${popup}"]`)
  })
});

$('.js-popup-close').each(function () {
  $(this).on('click', function (e) {
    e.preventDefault();
    let closeTarget = $(this).closest('.js-popup')
    let closesiblings = $(this).siblings('.popup__content')
    //if(closesiblings.children().hasClass('slick-initialized')) {
      //unsetModalSlider()
    //}
    

    hidePopup(closeTarget)
  })
});

function openPopup(id) {
  $(id).addClass('is-active');
  $(id).find('.popup__item').fadeIn().addClass('is-active');
  // $(id).children($('.popup__item')).addClass('is-active');
  console.log(id)
  $('body').css('overflow', 'hidden');
}

function hidePopup(id) {
  $(id).removeClass('is-active');
  $(id).find('.popup__item').fadeOut().removeClass('is-active');
  $('body').css('overflow', 'auto');
};



$('.js-popup').on('click', function (e) {
  if ($(e.target).closest('.popup__item').length) {
    return;
  };
  hidePopup($('.js-popup'));
  //unsetModalSlider()
})


$('.apartament-img').on('click', function () {
  let popup = $(this).parents('.apartament-content.is-active');
  let dataPopup = popup.attr('data-popup-target');

  openPopup(`[data-popup="${dataPopup}"]`);
})


$('.js-features-web').on('click', function(){
  let popup = $(this).attr('data-popup-target');
  let content = $('.popup__content');

  openPopup(`[data-popup="${popup}"]`);
  let gallerrySlider = $('.js-gallery-slider');
if(content.children().hasClass('slick-initialized')){
  return
}else{
  gallerrySlider.slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}
  
    
})



