window.addEventListener('scroll', () => {
    const nav = document.getElementById('navigation');
    const navOffset = nav.offsetTop;
    const main = document.getElementById('main');

    if (window.pageYOffset > navOffset) {
        nav.classList.add('fixed');
        // main.style.marginTop = nav.offsetHeight + 'px';
    } else {
        nav.classList.remove('fixed');
        // main.style.marginTop = '0';
    }
});
