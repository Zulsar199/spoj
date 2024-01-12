// 14. uguggsun tsagiig honog tsagt shiljuul

// let garaas = window.prompt("tsagaa oruulna uu");

// function tsag(garaas) {
//   if (Number(garaas) < 0) {
//     console.log("eyreg utga oruulna uu");
//   } else {
//     let honog = Math.floor(Number(garaas) / 24);
//     let tsag = Number(garaas) - honog * 24;
//     console.log(
//       garaas + "tsag ni " + honog + "honog " + tsag + "tsag " + "bolno"
//     );
//   }
// }
// tsag(Number(garaas));

// 15. ugugdsun honog tsagiig tsagt shiljuul

let honog = window.prompt("honog oruulna uu");
let tsag = window.prompt("tsag oruulna uu");

function transform(honog, tsag) {
  let h = Number(honog) * 24;
  let sum = h + Number(tsag);
  console.log(honog + "honog " + tsag + "tsag ni " + sum + "tsag bolno");
}
transform(Number(honog), Number(tsag));
