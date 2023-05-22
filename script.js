let string = "";
// to select all the buttons 
let buttons = document.querySelectorAll('.button');
// to store string in a array form
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // to evaluate = button 
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        //to evaluate C button
        else if(e.target.innerHTML == 'C'){
            string="";
            document.querySelector('input').value=string;
        }
        // other buttons to perform operations
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})