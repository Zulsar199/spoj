// 39. 2iin ugugdsun toon zergiig ol

// let z = window.prompt("too oruulna uu");

// function zereg(number) {
//   a = 2 ** Number(number);
//   console.log("2iin " + z + " zereg ni " + a);
// }
// zereg(Number(z));

// 40. a тооны n зэрэг
// Өгөгдсөн тооны n зэргийг ол.

// Input
// Нэг мөрөнд Int төрлийн эерэг 2  тоо зайгаар тусгаарлагдан өгөгдөнө.

// a^n
function add(n1, n2) {
  let sum = 1;
  for (let i = 0; i < n2; i++) {
    sum *= Number(n1);
  }
  return sum;
}

let numbers = window.prompt("2 too oruulna uu");
let array = numbers.split(" ");

if (array[1] % 1 !== 0 || array[1] < 0) {
  console.log("2dahi too eyreg buhel baihiig anhaarna uu");
} else {
  sum = add(Number(array[0]), Number(array[1]));
  console.log(
    Number(array[0]) + "iin " + Number(array[1]) + " zereg ni " + sum
  );
}
