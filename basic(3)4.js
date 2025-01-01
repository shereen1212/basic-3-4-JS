// 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2

let t = 1;
while (t <= 10) {
  console.log(t);
  t++;
}

// 3
let array = [1, 2, 3, 4, 5];
for (let s = 1; s < array.length; s++) {
  console.log(array[s]);
}

// 4

for (let n = 0; n <= 10; n += 2) {
  console.log(n);
}

// 5

let sum = 0;
for (let x = 1; x <= 10; x++) {
  sum += x;
}
console.log(sum);

// 6
let w = [1, 2, 3, 4, 5];
let max = w[0];
for (let a = 1; a < array.length; a++) {
  if (w[a] > max) {
    max = w[a];
  }
}

console.log(max);

// 7
let d = [5, 4, 3, 2, 1];
let smallest = d[0];
for (let y = 1; y < d.length; y++) {
  if (d[y] < smallest) {
    smallest = d[y];
  }
}
console.log(smallest);

// 11
let arr = [1, 2, 3, 4, 5];
let su = 0;
for (let i = 0; i < arr.length; i++) {
  su += arr[i];
}
let average = su / arr.length;
console.log(average);

// 12
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(factorial);

// 13
let limit = 20;
for (let num = 2; num <= limit; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}

// 14

// 15

let ar = [1, 2, 3, 4, 5];
let step = 2;
for (let i = 0; i < ar.length; i += step) {
  console.log(ar[i]);
}

// 16
let rr = [1, 2, 3, 4, 5];
for (let i = rr.length - 1; i >= 0; i--) {
  console.log(rr[i]);
}

// 17
let ara = [1, 2, 3, 4, 5];
let start = 2,
  end = 4;
for (let i = start; i <= end; i++) {
  console.log(ara[i]);
}

// 18
let aaa = [1, 2, 3, 4, 5];
let target = 4;
let found = false;
for (let i = 0; i < aaa.length; i++) {
  if (aaa[i] === target) {
    found = true;
    break;
  }
}
console.log(found);

// 19
let rrr = [1, 2, 1, 3, 2, 1];
let arget = 1;
let count = 0;
for (let i = 0; i < rrr.length; i++) {
  if (rrr[i] === arget) {
    count++;
  }
}
console.log(count);

// 20

let imit = 10;
let a = 0,
  b = 1;
console.log(a);
if (imit > 0) console.log(b);
for (let i = 2; i <= imit; i++) {
  let next = a + b;
  console.log(next);
  a = b;
  b = next;
}
