const elements = document.querySelectorAll('.more');

Array.from(elements).forEach((el) =>{
    const btn = el.querySelector('.more__btn');
    const content = el.querySelector('.more__content');

    btn.addEventListener('click', () =>{

        if(!content.classList.contains('open')){
            content.style.maxHeight = content.scrollHeight + 'px';
            content.classList.add('open');
            btn.textContent = '閉じる';
        } else {
            content.style.maxHeight = '200px';
            content.classList.remove('open');
            btn.textContent = 'もっと見る';
        }
    });
});
