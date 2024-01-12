// 29 ugugdsun too 10s ih bol yes ugui bol no gj hevle

// let number = window.prompt("duriin 1 too oruulna uu");

// function too(number) {
//   if (Number(number) > 10) {
//     console.log("yes");
//   } else if (Number(number) < 10) {
//     console.log("no");
//   } else {
//     console.log("tentsuu");
//   }
// }
// too(Number(number));

// 30. ugugdsun too 5s baga bol yes ugui bol no gj hevle

// let number = window.prompt("duriin 1 too oruulna uu");

// function too(number) {
//   if (Number(number) > 5) {
//     console.log("no");
//   } else if (Number(number) < 5) {
//     console.log("yes");
//   } else {
//     console.log("tentsuu");
//   }
// }
// too(Number(number));

// 31. 3 too ugugdunu. too tegsh bol yes ugui bol no gej hvele 

let numbers = window.prompt("3n too oruulna uu");

let array = numbers.split(" ");
console.log(array);

let counter = 0;
let urjver = 1;
while (counter < array.length) {
  if (array[counter] % 2 == 0) {
    console.log("YES");
  }
  else {
    console.log("NO");
  }
  counter++;
}
