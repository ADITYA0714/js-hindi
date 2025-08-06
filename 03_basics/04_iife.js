// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

// We use iife becoz sometime due to pollution of global scope our cruical fn is effect to remove it we use iife 

//writing above fn as arrow fn
((name)=>{
    console.log(`DB CONNECTED NEXT ${name}`);
})("aditya");

//Whenever you have to write two iife one after another always always remember to use ; at last of first iife funtion