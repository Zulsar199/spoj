// 26. ugugdsun 3 toon dotroos 5tai tentsuu toonuudiin toog ol

// let numbers = window.prompt("3n too oruulna uu");

// let array = numbers.split(" ");
// console.log(array);

// function f5(numbers) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] = 5) {
//       sum++;
//     }
//   }
//   return sum;
// }

// sum = f5(array);

// console.log("tavtai tentsuu " + sum + "too bn");

// 27. ugugdsun 4 toonoos 3d huvaagddag toonuudiin toog ol

let numbers = window.prompt("4n too oruulna uu");
let array = numbers.split(" ");

function d3(numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length; i++){
    if (numbers[i] % 3 == 0){
      sum++
    }
  }
  return sum;
}
sum = d3(array);
console.log("3d huvaagddag " + sum + " too baina");

// 28. ugugdsun 4 toonii 11d huvaagddaggui toonuudiin niilber

// function s(paramArray) {
//   let sum = 0;
//   for (let i = 0; i < paramArray.length; i++) {
//     if (Number(paramArray[i]) % 11 != 0) {
//       sum += Number(paramArray[i]);
//     }
//   }
//   return sum;
// }

// let numbers = window.prompt("4n too oruulna uu");
// let array = numbers.split(" ");

// sum = s(array);
// console.log("11d huvaagddaggui toonuudiin niilber " + sum);
