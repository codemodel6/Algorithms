let fs = require("fs");

// 1. 입력값이 한 개일 때(한 줄)
const input = fs.readFileSync("test").toString().trim();

// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
const input = fs.readFileSync("test").toString().trim().split(" ");

// 3. 입력값이 여러 줄일 때
const input = fs.readFileSync("test").toString().trim().split("\n");

// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
const [n, input] = fs.readFileSync("test").toString().trim().split("\n");
const inputArr = input.trim().split(" ");

// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const [n, input] = fs.readFileSync("test").toString().trim().split("\n");
