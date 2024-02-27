// Суммма чисел от 1 до 100 не кратных 3 
let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 !== 0) {
    sum += i;
  }
}

console.log(sum);


