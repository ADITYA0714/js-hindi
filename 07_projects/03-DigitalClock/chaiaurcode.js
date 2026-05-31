const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock');
let localTime,lcTime;

setInterval(function refreshDate(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);
