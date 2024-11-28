// $(document).click(function(e) {
//   if(!$(e.target).closest('.pc-nav').length) {
//     $('.menu-parent_a').removeClass('show2');
//     } 
// });

$(document).ready(function(){
    $("#nav-button").on("click", function(){
        // $(".sp-nav").slideToggle("show");
        $(".nav-button, .sp-nav").toggleClass("show");

    });
});

// $(document).on('click',function(e) {
//   if(!$(e.target).closest('.menu-parent_a,.menu-child_ul').length) {
//       // ターゲット要素の外側をクリックした時の操作
//       $(this).next().removeClass('show2');
//   } else {
//       // ターゲット要素をクリックした時の操作
//       $(this).next().addClass('show2');
//   }
//   });
// $(document).ready(function(){
  
//   $('.menu-parent_a').on("click", function(){
//       $(".menu-child").stop().toggleClass("show2");

//   });
// });

// $(function () {
//   $('.menu-child').css("display", "none");
//   $('.menu-parent_a').on('click', function () {
//     $(this).next().slideToggle();
//   })
//   $('.ac-parent').not($(this)).next('.menu-child').slideUp();
// });

$(function () {
  $('.menu-child').css("display", "none");
  $('.menu-parent_a').on('click', function () {
    //openクラスをつける
    $(this).toggleClass('show2', 800);
    //クリックされていないac-parentのopenクラスを取る
    $(".menu-parent_a").not(this).removeClass("show2");
    $(this).next().slideToggle();
    $('.menu-parent_a').not($(this)).next('.menu-child').slideUp();
  })
  
});

$(document).click(function(e) {
  if(!$(e.target).closest(".menu-parent").length) {
    $('.menu-parent_a').removeClass('show2');
    } 
});


// $(function() {
 
//   // メニュー（親） にマウスhoverした時
//   $('.menu-parent').hover(function() {
 
//     // メガメニュー（弟）をスライドダウンで表示
//     $(this).find('.menu-child').stop().slideDown(400);
 
//   // メニュー（親） にマウスhoverを外した時
//   }, function() {
 
//     // メガメニュー（弟）をスライドアップで非表示
//     $(this).find('.menu-child').stop().slideUp(50);
 
//   });
//      // メガメニュー（兄）以外の場所をクリックしたらメガメニュー（子）がスライドアップ
//      $(document).on('click touchend', function (e) {
//       if (!$(e.target).closest('.menu-parent_a').length) {
//         $('.menu-child').slideUp(100);
//       }
//     });
// });