$(document).ready(function(){
	$('.hero-container').slick({
			autoplay: true, // 自動再生
			autoplaySpeed: 4000, // 自動再生の速さ、単位はミリ秒
			arrows: false, // 左右のナビゲーションを無効にする
			dots: true, // スライド下にドットを表示する
			fade: true, // スライドの切り替えをフェードにする
			dotsClass:'dots-wrap',
	});
});