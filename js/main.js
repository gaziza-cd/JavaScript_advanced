"use strict";
const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

// const renderProduct = (title, price) => {
//     return `<div class="product-item">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="by-btn">Добавить в корзину</button>
//               </div>`;
// }

// const renderProducts = (list) => {
//     const productList = list.map((item) => {
//         return renderProduct(item.title, item.price);
//     });

//     console.log(productList);
//     document.querySelector('.products').innerHTML = productList;
// }

// renderProducts(products);

const productsEl = document.querySelector(".products");

function renderProducts (item) {
    let productListDiv = "";
    products.forEach(function (item) {
        productListDiv +=renderProduct(item);
    });
    productsEl.insertAdjacentHTML("afterbegin", productListDiv)
}

const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
}

renderProducts(products);

let itemstyle = document.querySelectorAll('.product-item');

itemstyle.forEach(function (productitem) {
    productitem.style.backgroundColor = "lightgray"
});


