// // 1.1
// let i;
// for (i = 1; i <= 10; i++){
//   numbersAll(i);
// }
// function numbersAll(i) {
//   if (i % 2 === 0 ){
//     console.log("\n is even");
//   } else {
//     console.log("\n is odd");
//   }
// }

// // 1.2
// let favoriteMovie = {
//   id: 1,
//   nameOfMovie: "BAPS",
//   runTime: "91 minutes",
//   genre: "Comedy",
//   characters: [
//     {
//       name: "Mickey",
//       age: "25",
//       items: [{ itemName: "Spatula" }, { itemName: "Shopping Bag" }],
//     },
//     {
//       name: "Niecy",
// age: "25",
// items: [{ itemName: "FlatIron" }, { itemName: "Shopping Bag" }],
// },
// ],
// };
// console.log(favoriteMovie.nameOfMovie);
// console.log(favoriteMovie.runTime);
// console.log(favoriteMovie.characters);
// console.log(favoriteMovie.characters[0].name);
// console.log(favoriteMovie.characters[0].items[0].itemName);

// // 2.1
// var imageOne = document.querySelector('#imageOne');
// var imageTwo = document.querySelector('#imageTwo');
// fetch('https://rickandmortyapi.com/api/character')
// .then(res => res.json())
// .then(json => rmDisplay(json))
// function rmDisplay (json){
//   let one = json.results[0].image;
//   let two = json.results[1].image;
//   imageOne.src = one;
//   imageTwo.src = two;
// }

// 2.2
const fetch = require("node-fetch");
const request = async () => {
  const response = await fetch("https://swapi.dev/api/people/1");
  const json = await response.json();
  console.log(json);
  return "this should print last";
};
request()
  .then(console.log)
  .catch((err) => console.log(err));
