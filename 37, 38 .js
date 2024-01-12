// 37. 100n toog todorhoi davtalt ashiglan ugugdsun toon udaa nem

// let number = window.prompt(" duriin too oruulna uu");
//  function add(n){
//      let sum = 0;
//      for(i = 0 ; i < n; i++)
//           sum += 100;

//      return sum;
//  }
// sum = add(number);

// console.log(sum);

// 38. Өгөгдсөн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.

// Input
// Нэг мөрөнд Int төрлийн 2 тоо зайгаар тусгаарлагдан өгөгдөнө.
// Эхний тоо нь a тоо буюу тойрог тутамд нэмэгдэх тоо. 2 дахь тоо нь тойргийн тоо.

// Output
// Нийлбэр.
function add(n1, n2) {
  let sum = 0;
  for (let i = 0; i < n2; i++) {
    sum += Number(n1);
  }
  return sum;
}

let numbers = window.prompt("2 too oruulna uu");
let array = numbers.split(" ");

if (array[1] % 1 !== 0 || array[1] < 0) {
  console.log("2dahi too eyreg buhel baihiig anhaarna uu");
} else {
  sum = add(Number(array[0]), Number(array[1]));
  console.log(sum);
}
