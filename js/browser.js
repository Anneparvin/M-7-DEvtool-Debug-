console.log('i m nyut ');
// Alert box...
const showAlert = ()=>{
    const num =Math.random()*10;
    console.log(num);
    if(num>5){
        alert('please wait...');
    }
}

// confirm box.. .
const askSomething = ()=>{
const decision = confirm('Please wait...');
console.log(decision); 
if(decision === true){
    alert('help me...');
}
else{
    console.log('confirm message');
}
}
// promopt box...

const getUserInfo = ()=>{
const name = prompt('tell us your name...');
console.log(name); 
if(!!name){
    console.log('WELCOME here',name);
}
}
