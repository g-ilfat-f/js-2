'use strict';

const products = [
    { id: 1, img: 'img/1.jpg', title: 'Notebook', price: 45000 },
    { id: 2, img: 'img/2.jpg', title: 'Mouse', price: 1600 },
    { id: 3, img: 'img/3.jpg', title: 'Keyboard', price: 2200 },
    { id: 4, img: 'img/4.jpg', title: 'Gamepad', price: 4500 },
];

const renderProduct = (title, price, img) =>
    `<div class="product-item">
    <img class="product-img" src="${img}" width="230" height="200">
    <h3 class="product-title">${title}</h3>
    <p class="product-price">${price}</p>
    <button class="buy-btn">Купить</button>
    </div>`;

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.img)).join('');
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);

