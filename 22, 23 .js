// 22. ugugdsun 4 toonii 80s ih toonuudiin niilberiig ol

// let numbers = window.prompt("4n too oruulna uu");
// console.log(numbers);

// let array = numbers.split(" ");
// console.log(array);

// let counter = 0;
// let sum = 0;
// while (counter < array.length) {
//   if (array[counter] > 80) {
//     sum += Number(array[counter]);
//   }
//   counter++;
// }
// console.log("sum is " + sum);

// 23. ugugdsun 4 toonii 5s baga toonuudiin urjveriig ol
// 5s baga too ydaj 1 baih

let numbers = window.prompt("4n too oruulna uu \nydaj 1 ni 5s baga baih");

let array = numbers.split(" ");
console.log(array);

let counter = 0;
let urjver = 1;
let tawaasBagaTooBaigaaYu = false;

while (counter < array.length) {
  if (array[counter] < 5) {
    tawaasBagaTooBaigaaYu = true;
    urjver *= Number(array[counter]);
    console.log("tawaasBagaTooBaigaaYu", tawaasBagaTooBaigaaYu);
  }
  counter++;
}

if (!tawaasBagaTooBaigaaYu) {
  console.log("ydaj 1 too ni 5s baga bh ");
} else {
  console.log("5s baga toonuudiin urjver ni " + urjver);
}
