$(function() {
	$('.items').paginathing({//親要素のclassを記述
		perPage: 10,//1ページあたりの表示件数
		prevText:'<img src="./img/btn_prev.png" alt="前へ">',//1つ前のページへ移動するボタンのテキスト
		nextText:'<img src="./img/btn_next.png" alt="次へ">',//1つ次のページへ移動するボタンのテキスト
		activeClass: 'navi-active',//現在のページ番号に任意のclassを付与できます
        pageNumbers: false,//何件中何ページ目かの表示
        firstLast: false,//最初へと最後への非表示
		liClass: 'page-item',
		insertAfter: null,
	})
});

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const naviActive = document.querySelector('.navi-active');
const apple = "りんご";

