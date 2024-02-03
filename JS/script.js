// this part selects all the star, via an id and sets a class of animate-bounce to each of them.
const star = document.querySelectorAll('#star');

// document.addEventListener('onload', ()=> {
    for(let i = 0; i < star.length; i++){
        star[i].classList.add('animate-bounce');
    }
// });

// with the help of an event listener on the menu button, this part listens for a click event on the
// menu button, an then drops down the menu/nav for mobile view.
const menu = document.querySelector('#menu');
const menulist = document.querySelector('#menulist');

menu.addEventListener('click', ()=> {
    if(menulist.classList.contains('hidden')){
        menulist.classList.replace('hidden','flex');
        menu.classList.replace('block','hidden');
    }
    else {
        menulist.classList.replace('flex','hidden');
    }
});

// this is to close the menu/navbar.
const closemenu = document.querySelectorAll('#closemenu');

closemenu.addEventListener('click', ()=> {
    if(menulist.classList.contains('flex')){
        menulist.classList.replace('flex','hidden');
        menu.classList.replace('hidden','block');
    }
    else{
        menulist.classList.replace('hidden','flex');
    }
});

const a = document.querySelector('#team-name');
const b = document.querySelector('#telephone');
const c = document.querySelector('#email');
const d = document.querySelector('#project-name');

document.addEventListener('submit', (e) => {
    e.preventDefault

    checkInput();
});

function checkInput() {
    const team = a.value.trim();
    const telephone = b.value.trim();
    const email = c.value.trim();
    const project = d.value.trim();

    if(team == ''){
        small.innerHTML.value === 'Please enter your team name'
    }
}