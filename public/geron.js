"use strict";
// 1
let products = [
    {
        category: "Смартфоны",
        price: 259990,
        count: 11
    },
    {
        category: "Смартфоны",
        price: 319990,
        count: 8
    },
    {
        category: "Смартфоны",
        price: 299990,
        count: 9
    },
    {
        category: "Ноутбуки",
        price: 499990,
        count: 6
    },
    {
        category: "Ноутбуки",
        price: 359990,
        count: 8
    }
];
let smartphones = products.filter((e) => e.category === "Смартфон");
let laptops = products.filter((e) => e.category === "Ноутбуки");
smartphones.sort((a, b) => {
    return b.price - a.price;
});
laptops.sort((a, b) => {
    return b.price - a.price;
});
console.log(smartphones);
console.log(laptops);
const addProducts = (product) => {
    if (product.category == "Смартфоны") {
        smartphones.push(product);
    }
    else {
        laptops.push(product);
    }
};
addProducts({
    category: "Ноутбуки",
    price: 799990,
    count: 9
});
console.log(laptops);
let percentage = 0;
for (let i = 0; i < products.length; i++) {
    if (products[i].category == "Смартфоны") {
        products[i].price = (products[i].price * 0.1) + products[i].price;
        console.log(products[i]);
    }
    else {
        products[i].price = (products[i].price * 0.2) + products[i].price;
        console.log(products[i]);
    }
}
