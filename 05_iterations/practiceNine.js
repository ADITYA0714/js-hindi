const books = [
  { title: "The Silent River", genre: "Fantasy", publishYear: 2015, pages: 320 },
  { title: "Code of Shadows", genre: "Thriller", publishYear: 2018, pages: 280 },
  { title: "Dreaming in Binary", genre: "Horror", publishYear: 2021, pages: 410 },
  { title: "Whispers of the Past", genre: "Thriller", publishYear: 2012, pages: 350 },
  { title: "The Last Algorithm", genre: "Thriller", publishYear: 2024, pages: 290 },
  { title: "Garden of Echoes", genre: "Fantasy", publishYear: 2010, pages: 500 },
  { title: "Fragments of Tomorrow", genre: "Horror", publishYear: 2019, pages: 370 },
  { title: "Beyond the Horizon", genre: "Fantasy", publishYear: 2016, pages: 260 },
  { title: "Voices in the Fog", genre: "Horror", publishYear: 2013, pages: 310 },
  { title: "Patterns of the Mind", genre: "Fantasy", publishYear: 2022, pages: 330 }
];

const bkReduce = books.reduce((bkTotal,currPage)=>{
    return bkTotal+currPage.pages;
},0)
console.log(bkReduce);

const bkEarliest = books.reduce((bkEarly,publish)=>{
    return Math.min(bkEarly, publish.publishYear);
},Infinity);
console.log(bkEarliest)

const genreCnt = books.reduce((acc,bk)=>{
    if(!acc[bk.genre]){
        acc[bk.genre]=0;
    }
    acc[bk.genre]++;
    return acc;
},{});
console.log(genreCnt); 

const longestBook = books.reduce((acc,bk)=>{
    return Math.max(acc, bk.pages);
},Number.MIN_VALUE);
console.log("Longest Book : "+longestBook);

const avgPages = books.reduce((acc,bk)=>{
    return (acc + bk.pages);
},0);
console.log("Avg Pages : "+avgPages/books.length);

const titleComb = books.reduce((acc,bk)=>{
    return acc + (acc?", ":"")+bk.title;
},"")
console.log(titleComb);

const bkAfter = books.reduce((acc,bk)=>{
    if(bk.publishYear>2015)
        acc++;
    return acc
},0)
console.log(bkAfter);

const sumOfPageByGenre = books.reduce((acc,bk)=>{
    if(!acc[bk.genre]){
        acc[bk.genre] = 0
    }
    acc[bk.genre] += bk.pages;
    return acc
},{})
console.log(sumOfPageByGenre);

const shortTitle = books.reduce((shortest,bk)=>{
    return bk.title.length < shortest.title.length ? bk : shortest;
},books[0])
console.log(shortTitle);