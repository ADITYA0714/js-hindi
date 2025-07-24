 const marvel_heros = ["Thor","Ironman","Spiderman"]
 const dc_heros = ["Superman","flash","batman"]

//  marvel_heros.push(dc_heros);
 
//  console.log(marvel_heros);
//  console.log(marvel_heros[3][1]);

 //array take any value in this case it took array inside a array, suppose u want to access dc_hereos values the we can do it by marvel_heros[3][1]


 marvel_heros.concat(dc_heros);
//  console.log(marvel_heros)//yet output remains same as above

//to make a new array we new to use concat in new variable
const allHeros= marvel_heros.concat(dc_heros);
// console.log(allHeros)


const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)
//using spread operator it did remain array every element is individual


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] 

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
//flat method destructure all the sub-array any number of array inside array into one new single array



// console.log(Array.isArray("Aditya"));//check whether array or not
// console.log(Array.from("Aditya"));//This convert any input into array
console.log("Aditya","Swati");
console.log(typeof("Aditya","Swati"));


console.log(Array.from({name:"Aditya"}));//(output) => [] As this needs to be mentioned array needs to be build based on keys or value


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));