for (x = 1; x <= 50; x += 1) {
if (x % 3 === 0 && x % 5 ===0)  {
  console.log("FizzBuzz");
} else if (x % 5 === 0) {
  console.log("Buzz");
} else if (x % 3 === 0) {
  console.log("Fizz")
} else {
  console.log(x)
}
}
