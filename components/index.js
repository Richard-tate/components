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
  var y = document.querySelector(".hidden_content");
  if (x.style.display === "block", y.style.display === 'none' ) {
    x.style.display = "none", y.style.display = 'block';
  } else {
    x.style.display = "block", y.style.display ='none';
  }
} 

const nav3 = document.createElement('nav');
nav3.classList.add('navbar');
nav3.style.backgroundColor = '#303030';
nav3.style.color = 'white';
document.querySelector('.third').appendChild(nav3);

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

const content3 = document.createElement('p');
content3.classList.add('hidden_content');
content3.innerHTML = "This a full navbar that sets the text display to none and displays the nav bar when the button is clicked." +" "+
" This uses the same if statement but adds an extra 'var' to it that is reversed from the other one so that the text shows when navbar is closed but not when its open.";
document.querySelector('.third').appendChild(content3);

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


const content = document.createElement('h2');
content.classList.add('sidebar_content');
content.innerHTML= 'This is a side nav with no animation.';
document.querySelector('.first').appendChild(content);

const text = document.createElement('p');
text.classList.add('first_text');
text.innerHTML = 'You create this effect by switching the display setting to "block" from "none" and vice-versa. Feel free to click the button and try it out.';
document.querySelector('.first').appendChild(text);

const text_ = document.createElement('p');
text_.classList.add('first_text_');
text_.innerHTML= " You need to add a event listener to the button, that passes the function on the click event attached to the button which changes the css display.  " +
"The function should select the class of the sidenav and change it's display form it's starting display which is none and change it to block, it does this with an 'IF' statement." +
" Like this: if (x.style.display === 'block') {x.style.display = 'none';} else {x.style.display = 'block';}} . This not the only way to get effect but is how this one was done. ";
document.querySelector('.first').appendChild(text_);
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

const content_ = document.createElement('h2');
content_.classList.add('top_content');
content_.innerHTML= 'This is a top nav bar with no animation.';
document.querySelector('.second').appendChild(content_);

const text2 = document.createElement('p');
text2.classList.add('second_text');
text2.innerHTML = " As with the side nav you need to add an eventlistener to the button and pass it the function that changes the display to block to show nav bar and back again on click of button the main difference is on the css settings which" +" "+
"alter's how the nav bar looks in this case the width is set 100% but the height is set to 10%. this nav bar does have a push down effect unlike the side nav. click it to see for yourself. ";
document.querySelector('.second').appendChild(text2);

const main = document.createElement('section');
main.classList.add('section_');
document.querySelector('body').appendChild(main);

const main_h1 = document.createElement('h1');
main_h1.classList.add('main_h1');
main_h1.innerHTML= 'All of these examples where made from the javascriptDOM !';
document.querySelector('.section_').appendChild(main_h1);