let burgerBtn = document.querySelector('.burger-btn-box');
let listBox = document.querySelector('.list-header-box')

burgerBtn.addEventListener('click', () => {
    listBox.classList.toggle('list-header-box-toggle');
}) 