// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();  //Named IIFE

// We use iife becoz sometime due to pollution of global scope our cruical fn is effect to remove it we use iife 

//writing above fn as arrow fn
((name)=>{
    console.log(`DB CONNECTED NEXT ${name}`);
})("aditya"); //Unnamed IIFE

//Whenever you have to write two iife one after another always always remember to use ; at last of first iife funtion

// Real Project Use Cases of IIFE
// 1. Avoiding Global Namespace Pollution

// Example  - > (function() {
//   const apiKey = "SECRET_KEY";
//   // Only accessible inside this function
//   console.log("API initialized");
// })();

// 2. Initializing Code Immediately
// When you want some setup logic to run as soon as the script loads.
// Example - > (function() {
//   document.querySelector("#themeToggle").addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//   });
// })();

// For IIfe fn you must use ; at the end of the fn; bacuse iife start to invoke but doesn't know where to stop