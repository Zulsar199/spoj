// 6. ugugdsun toonii suuliin tsifriig ol

// let number = window.prompt("duriin too oruulna uu");
// function suuliinTsifr(number) {
//   let tsifr = Number(number) % 10;
//   console.log("suuliin tsifr ni " + tsifr);
// }
// suuliinTsifr(Number(number));

// 7. ugugdsun toonii aravtiin ornii tsifriig ol
let number = window.prompt("duriin too oruulna uu");
function suuliinTsifr(number) {
  let tsifr = ((Number(number) % 100) - (Number(number) % 10)) / 10;
  console.log("aravtiin ornii tsifr ni " + tsifr);
}
suuliinTsifr(Number(number));
