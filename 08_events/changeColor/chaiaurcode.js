const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const bodyy = document.querySelector('body')

const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

let colorInterval;
start.addEventListener('click',()=>{
    if(!colorInterval){
    colorInterval = setInterval(function(){
        bodyy.style.backgroundColor = getRandomColor();
    },2000);
}
})
stop.addEventListener('click',()=>{
    clearInterval(colorInterval);
    colorInterval = null;
})