let input = document.getElementById("inputBox");
let button = document.querySelectorAll("button");

let string ="";
let arr = Array.from(button);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input. value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string ="";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.slice(0,-1);
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    });
});