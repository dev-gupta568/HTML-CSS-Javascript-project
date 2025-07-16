let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");


slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input',()=>{
    slidervalue.textContent = inputslider.value;
});

genbtn.addEventListener('click',()=>{
    passBox.value = generatepassword();
});

let lowerchars = "abcdefghijklmnopqrstuvwxyzi";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberchars = "0123456789";
let symbolschar = "!@#$&*^%";

function generatepassword(){
    let genpassword = "";
    let allchar = "";

    allchar += lowercase.checked ? lowerchars : "";
    allchar += uppercase.checked ? upperchars : "";
    allchar += number.checked ? numberchars : "";
    allchar += symbols.checked ? symbolschar : "";

    if(allchar == "" || allchar.length == 0){
        return genpassword;
    }

    let i = 1;
    while(i <= inputslider.value){
        genpassword += allchar.charAt(Math.floor(Math.random() * allchar.length));
        i++;
    }
    return genpassword;   
}

copyicon.addEventListener('click',()=>{
    if(passBox.value !="" || passBox.value.length >=1){
    navigator.clipboard.writeText(passBox.value);
    copyicon.innerText = "check";
    copyicon.title = "Password copied";

    setTimeout(()=>{
        copyicon.innerText = "content_copy";
        copyicon.title ="";
    }, 3000)
    }
});













