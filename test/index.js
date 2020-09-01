const container = document.querySelector(".container");
const Header = document.createElement('header');
const Nav_btn = document.createElement('button');
const right_side = document.createElement('section');


Header.classList.add('Header');
Header.style.width = '100%';
Header.style.height = '50px';
Header.style.backgroundColor = '#303030';
container.appendChild(Header);

Nav_btn.classList.add('Nav_btn');
Nav_btn.innerHTML = '<span class="hamburger"></span>';
Nav_btn.style.width = '22px';
Nav_btn.style.height = '22px';
Nav_btn.style.position = 'relative';
Nav_btn.style.top = '1em';
Nav_btn.style.left = '-1em';
Nav_btn.style.float = 'right';
Nav_btn.style.background = 'transparent';
Nav_btn.style.border = 'none';
Nav_btn.style.cursor = 'pointer';
Header.appendChild(Nav_btn);

const nav = document.createElement('div');
nav.classList.add('navbar');
container.appendChild(nav);

const toggleNav = document.querySelector('.Nav_btn');
toggleNav.addEventListener('click', openNav);

function openNav() {
    var x = document.querySelector('.navbar');
    if(x.style.display === 'block') {
       x.style.display = 'none';
    }else{
        x.style.display = 'block';
    }
}

function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
        '<a href="#">Home</a>',
        '<a href="#">Products</a>',
        '<a href="#">About</a>',
        '<a href="#">Contact</a>'  
    ],

    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;

    // Add it to the page
    document.querySelector('.navbar').appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = listData[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}

// Usage
makeList();