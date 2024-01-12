// 41. Тэнцсэн, унасан
// Тоон дүн 3-аас их бол тэнцсэнд тооцно. Бусад тохиолдолд унана.
// Өгөгдсөн тоон дүн тэнцсэн эсэхийг тогтоо.

// Input
// Тоон дүн зөвхөн 2,3,4,5 гэсэн тоонуудын аль нэгээр өгөгдөнө.

// Output
// Тэнцсэн тохиолдолд "Tentssen", эсрэг тохиолдолд "Unasan" гэж хэвлэ.

// function grade(n1) {
//   for (let i = 2; i < n1; i++) {
//     if (i < 3) {
//       console.log("unasan");
//     } else {
//       console.log("tentssen");
//     }
//   }
// }

// let number = Number(window.prompt("dungee oruulna uu"));

// if (number != 2 && number != 3 && number != 4 && number != 5) {
//   console.log("dun bish bn");
// } else {
//   grade(number);
// }

// 42. 5-аас онц руу
// Өгөгдсөн тоон дүнг үсгэн дүн рүү шилжүүл.

// Input
// Тоон дүн нь 2,3,4,5-ын зөвхөн аль нэгээр өгөгдөнө.

// Output
// 5 байвал "Onts", 4 байвал "Sain", 3 байвал "Dund", 2 байвал "Muu" гэж хэвлэ.
// function grade(n1) {
//   if (n1 == 5) {
//     console.log("onts");
//   } else if (n1 == 4) {
//     console.log("sain");
//   } else if (n1 == 3) {
//     console.log("dund");
//   } else {
//     console.log("muu");
//   }
// }

// let number = Number(window.prompt("dungee oruulna uu"));

// if (number != 2 && number != 3 && number != 4 && number != 5) {
//   console.log("dun bish bn");
// } else {
//   grade(number);
// }

// 43. Тоон үнэлгээнээс үсгэнд
// Өгөгдсөн тоон үнэлгээг үсгэн үнэлгээнд шилжүүл.

// Input
// Тоон үнэлгээ 100-аас ихгүй эерэг бүхэл тоогоор өгөгдөнө.

// Output
// Тоон үнэлгээ 89-өөс их бол А, 79-өөс их В, 69-өөс их бол С,
// 59-өөс их бол D бусад тохиолдолд F үсгэн дүнг хэвлэ.

let too = window.prompt("dungee oruulna uu");

function grade(a) {
  if (a > 89) {
    console.log("A");
  } else if (a > 79 && a < 90) {
    console.log("B");
  } else if (a > 69 && a < 80) {
    console.log("C");
  } else if (a > 59 && a < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}

if (too > 100 || too < 0) {
  console.log("buruu dun bn");
} else {
  grade(Number(too));
}
