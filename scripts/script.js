// get input field value by id
let input = document.getElementById('inputField')
console.log(input);

// get all btns by query 
let buttons = document.querySelectorAll('button')
console.log(buttons);


// set default value of input
let valueString = "";

// create an array with btns we got that
let buttonsArr = Array.from(buttons)
    console.log(buttonsArr);


// run a forEach loop on the button array  to get each an every button separately
buttonsArr.forEach(button => {
    // add an event for every buttons
    button.addEventListener('click', (e) => {
        console.log(e.target)
    })
} )



