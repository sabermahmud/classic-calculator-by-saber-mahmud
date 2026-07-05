// get input field value by id
let input = document.getElementById('inputField')
console.log(input);

// get all btns by query 
let buttons = document.querySelectorAll('button')
console.log(buttons);

let isResultDisplayed = false;

console.log(isResultDisplayed);


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
        // validation and operation

        if (e.target.innerHTML == '=') {
            //means if innerHTML of target of e is equal sign ? then this code will run  


            console.log("equal btn clicked")
            // we checked: is we get the btns innerHtml



            // is true then we set the innerHtml as a value of input and display that
            valueString = eval(valueString);
            input.value = valueString;

            // reassign the isResultDisplayed's value by true
            isResultDisplayed = true;
            console.log(isResultDisplayed);

            // hide the undefined value
            if (input.value == "undefined") {
                valueString = "";
                input.value = valueString;
            }




        }

        else if
            (e.target.innerHTML == 'AC') {
            valueString = "";
            input.value = valueString;
        }

        else if (e.target.innerHTML == 'DEL') {
            valueString = valueString.substring(0, valueString.length - 1);
            input.value = valueString;
        }



        else {
            // dabble condition: is result is displayed and is result is non a number ?
            // if innerHTML is a number and result has been displayed reset the function.
            if (isResultDisplayed == true && isNaN (e.target.innerHTML) == false) {
                valueString = "";
                input.value = valueString;
                isResultDisplayed = false
            }
            // if innerHTML is not a number and result is undisplayed too continue typing.
            // if the conditions will be false then set the innerHtml as a value of input and display that. now we got the number buttons separately and display that easily
            else {
                valueString += e.target.innerHTML;
                input.value = valueString;
            }
        }




    })
})



