const hour = document.querySelector('#hour');
const mins = document.querySelector('#mins');
const secs = document.querySelector('#secs');

// this function selects all the star, via an id and sets a class of animate-bounce to each of them.
const star = document.querySelectorAll('#star');

// document.addEventListener('onload', ()=> {
    for(let i = 0; i < star.length; i++){
        star[i].classList.add('animate-bounce');
    }
// });

// with the help of an event listener on the menu button, this part listens for a click event on the
// menu button, an then drops-down/displays the menu/nav for mobile view.
const menu = document.querySelector('#menu');
const menuList = document.querySelector('#menulist');

menu.addEventListener('click', ()=> {
    if(menuList.classList.contains('hidden')){
        menuList.classList.replace('hidden','flex');
        menu.classList.replace('block','hidden');
    }
    else {
        menuList.classList.replace('flex','hidden');
    }
});

// this function closes the menu/navbar.
const closeMenu = document.querySelector('#closemenu');

closeMenu.addEventListener('click', ()=> {
    if(menuList.classList.contains('flex')){
        menuList.classList.replace('flex','hidden');
        menu.classList.replace('hidden','block');
    }
    else{
        menuList.classList.replace('hidden','flex');
    }
});