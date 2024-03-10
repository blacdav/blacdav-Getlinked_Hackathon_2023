// this function generally handles the form, checks for correctness, before allowing form submission.
// but then, i first had to catch each input via their individual Id.
// i also used call back functions to validate the form.
const a = document.querySelector('#team-name');
const b = document.querySelector('#telephone');
const c = document.querySelector('#email');
const d = document.querySelector('#project-name');
const f = document.querySelector('#category');
const g = document.querySelector('#group');
const h = document.querySelector('#agreed');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

// this function controls the visibilty of error messages when there is a wrong or invalid input.
const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error message to small tag
    small.innerText = message;
    
    // set border color if error detected
    formControl.classList.replace('border-none','border-red');
}

// this function confirnms the correctness of form input, before allowing for submission
const setSuccessFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error message to small tag
    small.innerText = message;
    
    // set border color if error detected
    small.classList.replace('text-red', 'text-green');
}

// this function checks the input, and ignores empty spaces before or after characters have been typed in.
const checkInput = () => {
    const team = a.value.trim();
    const telephone = b.value.trim();
    const email = c.value.trim();
    const project = d.value.trim();
    const category = f.value;
    const group = g.value;
    const agreed = h.value;

    // Conditional statement for team
    if(team === ''){
        setErrorFor(a, 'Please enter your team name');
    }
    else if(team.length > 12){
        setErrorFor(a, 'team name must be lessthan 12');
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

    // // Conditional statement for group
    if(group === ''){
        setErrorFor(g, 'please select your group');
    }
    else{
        setSuccessFor(g, '');
    }

    if(team && telephone && email && project && category && group) {
        form.submit();
    }
}