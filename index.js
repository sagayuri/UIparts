$(function() {
	$('.news-container').paginathing({//親要素のclassを記述
		perPage: 3,//1ページあたりの表示件数
		prevText:'前へ',//1つ前のページへ移動するボタンのテキスト
		nextText:'次へ',//1つ次のページへ移動するボタンのテキスト
		activeClass: 'navi-active',//現在のページ番号に任意のclassを付与できます
        pageNumbers: true,//何件中何ページ目かの表示
        firstLast: false,//最初へと最後への非表示
	})
});
