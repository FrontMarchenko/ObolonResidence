import sayHello from './lib/sayHello.js';
import './components/burger';
sayHello();


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
        console.log(closeTarget );
        

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



$('.js-popup').on('click',function(e){
  if ($(e.target).closest('.popup__item').length) {
    return;
  };
  hidePopup($('.js-popup'));
})


