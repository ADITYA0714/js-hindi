console.log('Project 5');
let typed = "";
window.addEventListener('keypress',(e)=>{
    console.log(e);
    typed += e.key;
    document.querySelector('.key').innerHTML = typed;
})