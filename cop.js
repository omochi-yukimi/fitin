

//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 40,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
},
function(){
         $("#mask").attr("class", "done");//描画が終わったらdoneというクラスを追加
}
);

$(window).on('load',function(){
    $("#load").delay(10000).fadeOut('slow');//ローディング画面を15秒（15000ms）待機してからフェイドアウト
  $("#load_logo").delay(10000).fadeOut('slow');//ロゴを15秒（15000ms）待機してからフェイドアウト
        stroke.play();//SVGアニメーションの実行
});


$(function() {
    $(".slideshow-fade li").css({
      "position": "relative",
      "overflow": "hidden"
    });
    $(".slideshow-fade li").hide().css({
      "position": "absolute",
      "top": 0,
      "left": 0
    });
    $(".slideshow-fade li:first").addClass("fade").show();
    setInterval(function() {
      var $active = $(".slideshow-fade li.fade");
      var $next = $active.next("li").length ? $active.next("li") : $(".slideshow-fade li:first");
      $active.fadeOut(1000).removeClass("fade");
      $next.fadeIn(1000).addClass("fade");
    }, 2000);
  });
  