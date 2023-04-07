$('.items').pagination({
    itemElement : '> .item',
	displayItemCount : 10,
	paginationClassName: "pagerWrap",
	prevBtnText: "",
	nextBtnText: "",
});

const prevPage = document.querySelector('.prev-page');
const nextPage = document.querySelector('.next-page');
prevPage.insertAdjacentHTML('afterend', '<p class="pagerText">1位〜10位</p>');

const pagerText = document.querySelector('.pagerText');

prevPage.addEventListener('click', () => {
	pagerText.textContent = '1位〜10位';
});

nextPage.addEventListener('click', () => {
	pagerText.textContent = '11位〜20位';
});

console.log(prevPage);
