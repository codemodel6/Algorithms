let fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split(" ");

let A = Number(parseInt(input[0]));
let B = Number(parseInt(input[1]));

if (B < 45) {
  if (A === 0) A = 23;
  else A -= 1;
  B = 60 + (B - 45);
} else {
  B -= 45;
}

console.log(A, B);
