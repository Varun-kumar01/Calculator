let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.slice(0,-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    });
    let isKeyPressed = false;
    document.addEventListener('keydown', (e) =>{
        if (isKeyPressed){
            return;
        }
        isKeyPressed = true;

        let keyPressed = e.key;

        if( keyPressed == '='){
            string = eval(string);
            input.value = string;
        }
        else if(keyPressed == 'AC'){
            string = "";
            input.value = string;
        }
        else if(keyPressed == 'DEL'){
            string = string.slice(0,-1);
            input.value = string;
        }
        else{
            string += keyPressed;
            input.value = string;
        }
        isKeyPressed = false;
    });
});