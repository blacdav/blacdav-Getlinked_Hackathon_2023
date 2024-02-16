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

// this function generally handles the form, checks for correctness, before allowing form submission.
// but then, i first had to catch each input via their individual Id.
// i also used call back functions to validate the form.
const a = document.querySelector('#team-name');
const b = document.querySelector('#telephone');
const c = document.querySelector('#email');
const d = document.querySelector('#project-name');
const f = document.querySelector('#category');
const g = document.querySelector('#group');
const form = document.querySelector('form');

document.getSelection()

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput()
});

// this function controls the visibilty of error messages when there is a wrong or invalid input.
const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error message to small tag
    small.innerText = message;
    
    // set border color if error detected
    formControl.classList.add('border-secondary');
}

// this function confirnms the correctness of form input, before allowing for submission
const setSuccessFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error message to small tag
    small.innerText = message;
    
    // set border color if error detected
    small.classList.replace('text-red', 'text-green')
}

// this function checks the input, and ignores empty spaces before or after characters have been typed in.
const checkInput = () => {
    const team = a.value.trim();
    const telephone = b.value.trim();
    const email = c.value.trim();
    const project = d.value.trim();
    const category = f.value.trim();
    const group = g.value.trim();

    // Conditional statement for team
    if(team === ''){
        setErrorFor(a, 'Please enter your team name');
    }
    else if(team.length > 12){
        setErrorFor(a, 'team name must be lessthan 12')
    }
    else{
        setSuccessFor(a, '');
    }

    // Conditional statement for telephone
    if(telephone === ''){
        setErrorFor(b, 'please enter your phone number');
    }
    else if(telephone.length < 11 || telephone.length > 11){
        setErrorFor(b, 'phone number must be 11 digits');
    }
    else{
        setSuccessFor(b, '');
    }

    // Conditional statement for email
    if(email === ''){
        setErrorFor(c, 'please enter your email');
    }
    else{
        setSuccessFor(c, '');
    }

    // Conditional statement for project name
    if(project === ''){
        setErrorFor(d, 'please enter your project name');
    }
    else{
        setSuccessFor(d, '');
    }

    // Conditional statement for category
    if(category === ''){
        setErrorFor(f, 'please select your category');
    }
    else{
        setSuccessFor(f, '');
    }

    // Conditional statement for group
    if(group === ''){
        setErrorFor(g, 'please select your group');
    }
    else{
        setSuccessFor(g, '');
    }
}