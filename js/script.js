$(function() {
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
  $('.profile__title, ul.chronology__nav li').on('click', function() {
    let selectedId = $(this).attr('id');
    $('#profile-contents .is-show').removeClass('is-show');
    $('#profile-contents > div').each(function(content) {
      console.log($(content));

      if ( selectedId === $(content).data('profile')) {
        
        content.addClass('is-show');
      }
    });
  });
});