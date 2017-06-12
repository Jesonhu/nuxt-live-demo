$(function() {
  $('.service-hook, .phone-hook').hover(
    function() {
      $(this).addClass('is-hover');
    },
    function() {
      $(this).removeClass('is-hover');
    }
  );

  $('.hd-input-hook').focus(function() {
    $(this).parent().addClass('is-focus');

    $(this).siblings().find('.hotkey-hook:gt(0)').hover(
       function() {
         $(this).addClass('is-hover')
         .siblings().removeClass('is-hover');
       },
     function() {
         $(this).removeClass('is-hover');
       }
     );

  }).blur(function() {
    $(this).parent().removeClass('is-focus');
  });

  // 菜单导航
  hdNav();
  function hdNav() {
    const screenWidth = $(window).width();
    const $topItem = $('.hd-tab-nav .item-hook');

    $('.full-screen-hook').css({
      'width': `${screenWidth}px`,
      'left': -(screenWidth / 2) + 'px'
    });

    $topItem.mouseenter(
      function() {
        $(this).addClass('is-hover')
          .siblings().removeClass('is-hover');
    }).mouseleave(
      function() {
        $(this).removeClass('is-hover');
      }
    );
  };

  let hdTabWrap = $('.hd-tabwrap-hook');
  let hdTabMain = $('.hd-tab-hook');
  let hdOffsetTop = hdTabMain.offset().top;

  $(window).scroll(function() {
    let winScrollTop = $(this).scrollTop();

    if (winScrollTop >= hdOffsetTop) {
      hdTabWrap.addClass('fixed');
      hdTabMain.stop().animate({'paddingTop': `10px`}, 80);
    } else {
      hdTabWrap.removeClass('fixed');
      hdTabMain.css('paddingTop', 0);
    }
  })
});

$(window).ready(function(){
      floorRecommed()
      function floorRecommed() {
         $('.recomment-list-hook').find('.recomment-item-hook:gt(3)')
             .addClass('marginTop');
      }
});