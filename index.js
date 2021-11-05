let num1='';
let num2='';
let operation='';
// function to take input from user 
const calc= e =>{
    if(operation==''){
        num1+=e.target.dataset.number
        display(num1)
    }
    else{
        num2+=e.target.dataset.number
        display(num2)
    }
}
// function to display in display box
function display(val){
    var disp_box=document.getElementById('disp-box')
        disp_box.value=val
}
// functions to update value of operation
function add(){
    operation='+'
}
function sub(){
    operation='-'
}
function product(){
    operation='*'
}
function divide(){
    operation='/'
}
// function to show result
function answer(){
    if(operation=='+'){
        const ans=Number(num1)+Number(num2)
        display(ans)
    }
    else if(operation=='-'){
        const ans=Number(num1)-Number(num2)
        display(ans)
    }
    else if(operation=='*'){
        const ans=Number(num1)*Number(num2)
        display(ans)
    }
    else if(operation=='/'){
        const ans=Number(num1)/Number(num2)
        display(ans)
    }
operation=''
}
// function for all clear
function reset(){
    location.reload();
}
//event listener to equals button
document.getElementById('answer').addEventListener('click',answer)

//event listener to listen for plus operation
document.getElementById('plus-operation').addEventListener('click',add)

// event listener for minus operation
document.getElementById('sub').addEventListener('click',sub)

//event listener for product
document.getElementById('product').addEventListener('click',product)

//event listener for divide
document.getElementById('divide').addEventListener('click',divide)

// event listener for reset
document.getElementById('reset').addEventListener('click',reset)
//event listener to take input from user 
let a=document.querySelectorAll('.btn_number');
a.forEach(action =>{
    action.addEventListener('click',calc)
})