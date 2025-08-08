//iterating objects
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rp: 'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const myArray = [1,2,3,4,5];
for (const key in myArray) {
//    console.log(myArray[key])
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('IN', "India")


// for (const key in map) {
//     console.log(key)
// }//not possible