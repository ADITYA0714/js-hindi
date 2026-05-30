// const coding = ["js","ruby","python","cpp","java"]

// const values = coding.forEach(function (item){
//     console.log(item);
//     return item 
// })

// console.log(values);// O/P:-Undefined mean ForEach do not return a value 

// +++++++++++++++++++++++ Filter +++++++++++++++++++++++++++++++++++++++++

const myNums = [1,2,3,4,5,6,7,8,9];

// const newNums = myNums.filter((num)=> num>5)//explicit return if we do not use {}
// //But if we use {} then we must use return example
// const newwNums =  myNums.filter((num)=>{
//     return num>5
// })
// console.log(newNums);
// console.log(newwNums);

// +++++++++++++++++++++ ForEach +++++++++++++++++++++++++++++++++++++++++

const newNums = [];
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num);
    }
})
console.log(newNums);

const book = [
  { title: "The Silent River", genre: "Mystery", publishYear: 2015 },
  { title: "Code of Shadows", genre: "Thriller", publishYear: 2018 },
  { title: "Dreaming in Binary", genre: "Science Fiction", publishYear: 2021 },
  { title: "Whispers of the Past", genre: "Historical Fiction", publishYear: 2012 },
  { title: "The Last Algorithm", genre: "Fantasy", publishYear: 2024 },
  { title: "Garden of Echoes", genre: "Fantasy", publishYear: 2010 },
  { title: "Fragments of Tomorrow", genre: "Dystopian", publishYear: 2019 },
  { title: "Beyond the Horizon", genre: "Adventure", publishYear: 2016 },
  { title: "Voices in the Fog", genre: "Horror", publishYear: 2013 },
  { title: "Patterns of the Mind", genre: "Fantasy", publishYear: 2022 }
];

const userBooks = book.filter((bk)=>bk.genre=='Fantasy');

console.log(userBooks);