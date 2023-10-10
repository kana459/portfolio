
jQuery(function () {

  //Flag管理
  var spFlag = false;

  //ローディング処理
  window.addEventListener('load', function () {
          // jQuery('html,body').animate({
          //     scrollTop: 0
          // }, '1');
     
      over_effect();
      setTimeout(() => {
        $('.lds-grid').addClass('fadeout');
        setTimeout(() => {
            $('#loading').addClass('fadeout');
            setTimeout(() => {
                $('#loading').fadeOut();
            }, 200);
        }, 100);
      }, 300);


      //URLのハッシュ値を取得
      var urlHash = location.hash;
      // //ハッシュ値があればページ内スクロール
      if (urlHash) {
          // スクロールを0に戻す
          $('body,html').animate({
              scrollTop: 0 
          }, "1");
          setTimeout(function () {
              // ロード時の処理を待ち、時間差でスクロール実行
              scrollToAnker(urlHash);
          }, 100);
      }

      //通常のクリック時
      $('a[href^="#"]').click(function () {
          //ページ内リンク先を取得
          var href = $(this).attr("href");
          //リンク先が#か空だったらhtmlに
          var hash = href == "#" || href == "" ? 'html' : href;
          //スクロール実行
          scrollToAnker(hash);
          //リンク無効化
          return false;
      });


      // 関数：スムーススクロール
      // 指定したアンカー(#ID)へアニメーションでスクロール
      function scrollToAnker(hash) {
          var target = $(hash);
          var position = target.position().top + -100;

          $('body,html').stop().animate({
              scrollTop: position
          }, 700);
      }

  });


  //スマホFlag取得
  if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) || navigator.userAgent.indexOf('BlackBerry') > 0 || navigator.userAgent.indexOf('IEMobile') > 0) {
      spFlag = true;
  }


  /*----------------------
     ToggleMenu
  ------------------------*/

  //マウスオーバー
  function over_effect() {
      if (!spFlag) {
          $(".ov").addClass("oe");
      }
  }

  // ヘッダースクロール
  $(document).ready(function(){
    $(window).on('scroll', function(){
      headerscroll();
    });
  });

  function headerscroll(){
    var scroll = $(window).scrollTop(); 
    if (scroll >= 100){
      $('#header').addClass('down'); 
    }else{
        $('#header').removeClass('down'); 
      }
    }
  


})