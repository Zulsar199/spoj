// 20. ugugdsun 3 toonii ihiig ol

// let num1 = window.prompt("1r too oruulna uu");
// let num2 = window.prompt("2r too oruulna uu");
// let num3 = window.prompt("3r too oruulna uu");

// function ihToo(num1, num2, num3) {
//   if (Number(num1) > Number(num2) && Number(num1) > Number(num3)) {
//     console.log(num1 + "ni ih baina");
//   } else if (Number(num1) < Number(num2) && Number(num3) < Number(num2)) {
//     console.log(num2 + "ni ih baina");
//   } else if (Number(num1) < Number(num3) && Number(num2) < Number(num3)) {
//     console.log(num3 + "ni ih baina");
//   } else if (Number(num1) == Number(num3) && Number(num2) < Number(num3)) {
//     console.log(num1 + "ni ih baina");
//   } else if (Number(num1) == Number(num2) && Number(num3) < Number(num1)) {
//     console.log(num1 + "ni ih baina");
//   } else if (Number(num3) == Number(num2) && Number(num1) < Number(num2)) {
//     console.log(num2 + "ni ih baina");
//   } else {
//     console.log(" edgeer toonuud ni tentsuu baina");
//   }
// }
// ihToo(Number(num1), Number(num2), Number(num3));

// 21. ugugdsun 4 toonii bagiig ol

let num1 = window.prompt("1r too oruulna uu");
let num2 = window.prompt("2r too oruulna uu");
let num3 = window.prompt("3r too oruulna uu");
let num4 = window.prompt("4r too oruulna uu");

function bagaToo(num1, num2, num3, num4) {
  if (
    Number(num1) < Number(num2) &&
    Number(num1) < Number(num3) &&
    Number(num1) < Number(num4)
  ) {
    console.log(num1 + " ni baga baina");
  } else if (
    Number(num2) < Number(num1) &&
    Number(num2) < Number(num3) &&
    Number(num2) < Number(num4)
  ) {
    console.log(num2 + " ni baga baina");
  } else if (
    Number(num3) < Number(num2) &&
    Number(num3) < Number(num1) &&
    Number(num3) < Number(num4)
  ) {
    console.log(num3 + " ni baga baina");
  } else if (
    Number(num4) < Number(num2) &&
    Number(num4) < Number(num3) &&
    Number(num4) < Number(num1)
  ) {
    console.log(num4 + " ni baga baina");
  } else if (
    num1 == num2 &&
    Number(num1) < Number(num3) &&
    Number(num1) < Number(num4)
  ) {
    console.log(num1 + " ni baga baina");
  } else if (
    num1 == num3 &&
    Number(num1) < Number(num2) &&
    Number(num1) < Number(num4)
  ) {
    console.log(num1 + " ni baga baina");
  } else if (
    num1 == num4 &&
    Number(num1) < Number(num3) &&
    Number(num1) < Number(num2)
  ) {
    console.log(num1 + " ni baga baina");
  } else if (
    num2 == num3 &&
    Number(num2) < Number(num1) &&
    Number(num2) < Number(num4)
  ) {
    console.log(num2 + " ni baga baina");
  } else if (
    num2 == num4 &&
    Number(num2) < Number(num3) &&
    Number(num2) < Number(num1)
  ) {
    console.log(num2 + " ni baga baina");
  } else if (
    num3 == num4 &&
    Number(num3) < Number(num1) &&
    Number(num2) < Number(num1)
  ) {
    console.log(num3 + " ni baga baina");
  } else if (
    Number(num1) == Number(num2) &&
    Number(num2) == Number(num3) &&
    Number(num1) < Number(num4)
  ) {
    console.log(num3 + " ni baga baina");
  } else if (
    Number(num1) == Number(num2) &&
    Number(num2) == Number(num4) &&
    Number(num1) < Number(num3)
  ) {
    console.log(num1 + " ni baga baina");
  } else if (
    Number(num1) == Number(num3) &&
    Number(num3) == Number(num4) &&
    Number(num1) < Number(num2)
  ) {
    console.log(num1 + " ni baga baina");
  } else if (
    Number(num2) == Number(num3) &&
    Number(num3) == Number(num4) &&
    Number(num2) < Number(num1)
  ) {
    console.log(num2 + " ni baga baina");
  } else {
    console.log(" edgeer toonuud ni tentsuu baina");
  }
}
bagaToo(Number(num1), Number(num2), Number(num3), Number(num4));
