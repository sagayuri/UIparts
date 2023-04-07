const showRankUpper = document.querySelector('.show_rank--upper');
const showRankLower = document.querySelector('.show_rank--lower');
const rankListUpper = document.querySelector('.rankList--upper');
const rankListLower = document.querySelector('.rankList--lower');

function switchByWidth() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        showRankUpper.classList.add('js-show');
    } else {
        showRankUpper.classList.remove('js-show');
    }
}

window.onload = switchByWidth;
window.onresize =switchByWidth;



