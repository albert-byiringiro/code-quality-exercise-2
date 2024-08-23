const maximumNumber = (num1, num2, num3) => {
  if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") throw new Error('Invalid input type');
  return Math.max(num1, num2, num3);
}

console.log(maximumNumber("jdj", 8, 90))