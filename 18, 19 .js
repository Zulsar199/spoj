// 18. ugugdsun 2 buhel toonii ihiig ol

// let num1 = window.prompt("1r too oruulna uu");
// let num2 = window.prompt("2r too oruulna uu");

// function ihToo(num1, num2) {
//   if (Number(num1) > Number(num2)) {
//     console.log(num1 + "ni ih baina");
//   } else if (Number(num1) < Number(num2)) {
//     console.log(num2 + "ni ih baina");
//   } else {
//     console.log(num1 + " bolon " + num2 + " ni tentsuu baina");
//   }
// }
// ihToo(Number(num1), Number(num2));

// 19. ugugdsun 2 toonii bagiig ol

let num1 = window.prompt("1r too oruulna uu");
let num2 = window.prompt("2r too oruulna uu");

function bagaToo(num1, num2) {
  if (Number(num1) > Number(num2)) {
    console.log(num2 + "ni baga baina");
  } else if (Number(num1) < Number(num2)) {
    console.log(num1 + "ni baga baina");
  } else {
    console.log(num1 + " bolon " + num2 + " ni tentsuu baina");
  }
}
bagaToo(Number(num1), Number(num2));
