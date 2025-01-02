// calculator project using javaScript

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');


let string = "";
let arr = Array.from(buttons); // this will make array of buttons variables
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string) // eval is an inbuilt function
            input.value = string; 
        }

        else if (e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;

        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
