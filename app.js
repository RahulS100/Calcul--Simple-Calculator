///dom objects and variables for this calculator project
//dom objects
const input_num = document.getElementById('in');
const keys = document.querySelectorAll('.keys');
const clear = document.getElementById('clear');
const calcul = document.getElementById('calcul');
const out_dom = document.getElementById('out');

//variables
let str_exp = '';
let out = 0;

//digit buttons handling events
keys.forEach((element, index)=> {
   element.addEventListener('click', ()=>{
    let check = keys[index].innerText;

       if(!keys[index].classList.contains('rem')) {
    str_exp += keys[index].innerText;
    input_num.value = str_exp;
       }
   }); ///click event listener end
});
///digit handling event ends here

//clear the input
clear.addEventListener('click', ()=> {
    input_num.value = '';
    out_dom.innerText = '';
    str_exp = '';
});

//calculate
calcul.addEventListener('click', ()=> {
    out = eval(str_exp);
    out_dom.innerText = out;
});