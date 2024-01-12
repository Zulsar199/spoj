// 24. ugugdsun 3 toon dahi tegsh toonuudiin niilberiig ol

// let numbers = window.prompt("3n too oruulna uu");

// let array = numbers.split(" ");
// console.log(array);

// let counter = 0;
// let sum = 0;
// while (counter < array.length) {
//   if (array[counter] % 2 == 0) {
//     sum += Number(array[counter]);
//   }
//   counter++;
// }
// console.log("sum is " + sum);


// 25. ugugdsun 3 toonii sondgoi toonuudiin urjveriig ol ydaj 1 sondgoi bga

let numbers = window.prompt("3n too oruulna uu");

let array = numbers.split(" ");
console.log(array);

let counter = 0;
let urjver = 1;
let sondgoiTooBgaYu = false
while (counter < array.length) {
  if (array[counter] % 2 == 1) {
    urjver *= Number(array[counter]);
    sondgoiTooBgaYu = true
  }
  counter++;
}
if(!sondgoiTooBgaYu){
  console.log("ydaj 1 sondgoi too oruulna uu");
} else{console.log("sondgoi toonii urjver " + urjver);}
