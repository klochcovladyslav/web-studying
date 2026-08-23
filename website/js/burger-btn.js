let burgerBtn = document.querySelector('.burger-btn-box');
let listBox = document.querySelector('.list-header-box');
let burgerSpans = document.querySelectorAll('.burger-span');

for (let i = 0; i < burgerSpans.length; i++) {
    let burgerSpan = burgerSpans[i];
    burgerBtn.addEventListener('click', () => {
        listBox.classList.toggle('list-header-box-toggle');
        burgerSpan.classList.toggle('burger-span-' + [i + 1] + '-toggle')
    })
}
