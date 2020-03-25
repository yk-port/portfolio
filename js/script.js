$(function() {
  // scroll interaction
  $('.skill__body').scroll(function() {
    let skillFirstPos = $('.grid-wrap__content:first').position().left;
    let skillLastPos = $('.grid-wrap__content:last').position().left;
    let skillBodyWidth = Math.round($(this).width());
    let endPointSkillLast = skillBodyWidth - 180;

    // 一番右までスクロールしきったら、右方向矢印を消して左方向矢印のみにする
    if (skillLastPos === endPointSkillLast) {
      $('.scroll-arrow--right').css('visibility', 'hidden');
      $('.scroll-arrow--left').css('visibility', 'visible');
    // 一番左までスクロールしきったら、左方向矢印を消して右方向矢印のみにする
    } else if (skillFirstPos === 0) {
      $('.scroll-arrow--right').css('visibility', 'visible');
      $('.scroll-arrow--left').css('visibility', 'hidden');
    } else {
      $('.scroll-arrow--right').css('visibility', 'visible');
      $('.scroll-arrow--left').css('visibility', 'visible');
    }
  });

  // navクリック時のページ遷移のアニメーション制御
  $('#nav .menu a').on('click', function(e) {
    e.preventDefault();
    $('#contents-body').addClass('is-transition-close');
    let nextUrl = $(this).attr('href');
    setTimeout(function() {
      window.location = nextUrl;
    }, 500);
  });

  // profileページの項目選択時の制御
  $('#tab .label').on('click', function() {
    $('#tab .is-selected').removeClass('is-selected');
    $(this).addClass('is-selected');
    $('#profile-contents .is-show').removeClass('is-show');
    const index = $(this).index();
    $('#profile-contents .panel').eq(index).addClass('is-show');
  });

  // slickを使ったスライダー
  $('#portfolio-contents').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    // infinite: true,
    // arrows: false,
    // fade: true,
    // draggable: false,
  });
  // $('#portfolio-menu').slick({
  //   infinite: true,
  //   slidesToShow: 6,
  //   focusOnSelect: true,
  //   asNavFor: '#portfolio-contents',
  // });
});
