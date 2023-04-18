const columns = 4;
const rows = 4;

//if you want to just console.log each number on a different line
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= columns; j++) {
    console.log(i);
  }
  console.log("\n");
}

//if you want to add each number to an array, and then log the array
for (let i = 1; i <= rows; i++) {
  let columnsArray = [];
  columnsArray.length = columns;
  columnsArray.fill(i);
  console.log(columnsArray);
}

//if you want to just log the numbers, you can spread the array
for (let i = 1; i <= rows; i++) {
  let columnsArray = [];
  columnsArray.length = columns;
  columnsArray.fill(i);
  console.log(...columnsArray);
}

//or you could push the arrays in another one, and get a matrix!
const matrix = [];
for (let i = 1; i <= rows; i++) {
  let columnsArray = [];
  columnsArray.length = columns;
  columnsArray.fill(i);
  matrix.push(columnsArray);
}
console.log(matrix);
