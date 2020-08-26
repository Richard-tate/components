const container = document.querySelector('.container');
const container_2 = document.querySelector('.container_2');
const demo = document.querySelector('#demo');

const con3 =document.createElement('div');
con3.classList.add('container_3');
demo.appendChild(con3);

const box_3 = document.createElement('div');
box_3.classList.add('third');
box_3.style.maxWidth = '400px';
box_3.style.maxHeight = '400px';
document.querySelector('.container_3').appendChild(box_3);

const bar1 = document.createElement('header');
bar1.classList.add('header_3');
bar1.style.position = 'relative';
bar1.style.backgroundColor = '#303030';
bar1.style.height = '44px';
bar1.style.width = '100%';
document.querySelector('.third').appendChild(bar1);

const btn3 = document.createElement("button");
btn3.innerHTML="<span class='hamburger'></span>";
btn3.classList.add('toggle_btn3');
document.querySelector('.header_3').appendChild(btn3);

const toggle_nav3 = document.querySelector(".toggle_btn3");
toggle_nav3.addEventListener('click', nav_toggle3 );

function nav_toggle3() {
  var x = document.querySelector(".navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

const nav3 = document.createElement('nav');
nav3.classList.add('navbar');
nav3.style.backgroundColor = '#303030';
nav3.style.color = 'white';
document.querySelector('.third').appendChild(nav3);

//first box //

const box = document.createElement('div');
box.classList.add('first');
box.style.maxWidth = "400px";
box.style.maxHeight = "400px";
container.appendChild(box);

const bar = document.createElement('header');
bar.classList.add('header');
bar.style.position = 'relative';
bar.style.backgroundColor = '#303030';
bar.style.height = '44px';
bar.style.width = '100%';
document.querySelector('.first').appendChild(bar);

const btn = document.createElement("button");
btn.innerHTML="<span class='hamburger'></span>";
btn.classList.add('toggle_btn');
document.querySelector('.header').appendChild(btn);

const toggle_nav = document.querySelector(".toggle_btn");
toggle_nav.addEventListener('click', nav_toggle );

function nav_toggle() {
  var x = document.querySelector(".side_nav_bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

const ul3 = document.createElement('ul');
const list_1 = document.createElement('li');
const list_2 = document.createElement("li");
const list_3 = document.createElement('li');
const list_4 = document.createElement('li');
        list_1.innerHTML="<a href='#'>placeholder</a>";
        list_2.innerHTML = "<a href='#'>placeholder</a>";
        list_3.innerHTML = "<a href='#'>placeholder</a>";
        list_4.innerHTML = "<a href='#'>placeholder</a>";
        ul3.appendChild(list_1);
        ul3.appendChild(list_2);
        ul3.appendChild(list_3);
        ul3.appendChild(list_4);
document.querySelector('.navbar').appendChild(ul3);

const nav = document.createElement('nav');
nav.classList.add('side_nav_bar');
nav.style.backgroundColor = '#303030';
nav.style.color = 'white';
document.querySelector('.first').appendChild(nav);

const ul = document.createElement('ul');
const list1 = document.createElement('li');
const list2 = document.createElement("li");
const list3 = document.createElement('li');
const list4 = document.createElement('li');
        list1.innerHTML="<a href='#'>placeholder</a>";
        list2.innerHTML = "<a href='#'>placeholder</a>";
        list3.innerHTML = "<a href='#'>placeholder</a>";
        list4.innerHTML = "<a href='#'>placeholder</a>";
        ul.appendChild(list1);
        ul.appendChild(list2);
        ul.appendChild(list3);
        ul.appendChild(list4);
document.querySelector('.side_nav_bar').appendChild(ul);

//second box and nav //

const box_ = document.createElement('div');
box_.classList.add('second');
box_.style.maxWidth = "400px";
box_.style.maxHeight = "400px";
container_2.appendChild(box_);

const foo = document.createElement('header');
foo.classList.add('header_2');
foo.style.position = 'relative';
foo.style.backgroundColor = '#303030';
foo.style.height = '44px';
foo.style.width = '100%';
document.querySelector('.second').appendChild(foo);

const btn_ = document.createElement("button");
btn_.innerHTML="<span class='hamburger'></span>";
btn_.classList.add('toggle_btn_');
document.querySelector('.header_2').appendChild(btn_);

const toggle_nav_ = document.querySelector(".toggle_btn_");
toggle_nav_.addEventListener('click', nav_toggle_ );

function nav_toggle_() {
  var x = document.querySelector(".nav_bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

const nav_ = document.createElement('nav');
nav_.classList.add('nav_bar');
nav_.style.width ="100%";
nav_.style.height = '10vh';
nav_.style.backgroundColor = '#303030';
nav_.style.color = 'white';
document.querySelector('.second').appendChild(nav_);

const ul2 = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement("li");
const li3 = document.createElement('li');
const li4 = document.createElement('li');
        li1.innerHTML="<a href='#'>placeholder</a>";
        li2.innerHTML = "<a href='#'>placeholder</a>";
        li3.innerHTML = "<a href='#'>placeholder</a>";
        li4.innerHTML = "<a href='#'>placeholder</a>";
        ul2.appendChild(li1);
        ul2.appendChild(li2);
        ul2.appendChild(li3);
        ul2.appendChild(li4);
document.querySelector('.nav_bar').appendChild(ul2);


