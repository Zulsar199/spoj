// 44. Гараг
// Долоо хоногийн дугаар өгөгдөхөд харгалзах гарагийг англиар хэвлэ.
// Эхний үсгийг л томоор бичнэ.

// Input
// Натурал тоо. 1<=n<=7.

// Output
// Гараг.

// let too = Number(window.prompt("garagiin too oruulna uu"));

// function weekdays(a) {
//   switch (a) {
//     case 1:
//       console.log("monday");
//       break;
//     case 2:
//       console.log("tuesday");
//       break;

//     case 3:
//       console.log("wednesday");
//       break;

//     case 4:
//       console.log("thursday");
//       break;

//     case 5:
//       console.log("friday");
//       break;

//     case 6:
//       console.log("saturday");
//       break;
//     default:
//       console.log("sunday");
//   }
// }

// if (
//   too !== 1 &&
//   too !== 2 &&
//   too !== 3 &&
//   too !== 4 &&
//   too !== 5 &&
//   too !== 6 &&
//   too !== 7
// ) {
//   console.log("1es 7 hurtel natural too bh");
// } else {
//   weekdays(too);
// }

// 45. Улирал
// Өгөгдсөн сар аль улиралд хамаарах вэ.
// Улирлыг англиар бичихдээ эхний үсгийг томоор бичнэ үү.

// 2-р сарыг хаварт тооцно уу.

// Input
// Натурал тоо. 1<=n<=12.

// Output
// Улирлын нэр англиар.
let too = Number(window.prompt("saraa oruulna uu"));

function season(a) {
  if (11 <= a && a <= 12 && a == 1) {
    console.log("winter");
  } else if (2 <= a && a <= 4) {
    console.log("spring");
  } else if (5 <= a && a <= 7) {
    console.log("summer");
  } else {
    console.log("autumn");
  }
}

if (
  too !== 1 &&
  too !== 2 &&
  too !== 3 &&
  too !== 4 &&
  too !== 5 &&
  too !== 6 &&
  too !== 7 &&
  too !== 8 &&
  too !== 9 &&
  too !== 10 &&
  too !== 11 &&
  too !== 12
) {
  console.log("1es 12 hurtel natural too bh");
} else {
  season(too);
}
