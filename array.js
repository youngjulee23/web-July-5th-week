//const me = [1, 2, 3, 4, 5]
//console.log(me);

let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450]
//console.log(carSales);

//let carSales2 = new Array(300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 500, 450)
//console.log(carSales2);

//let copy = Array.from(carSales);
//console.log(copy);

//let concat = [0, carSales, 300, 500];
//console.log(concat);

//let numbers = [..."0123456789"];
//console.log(numbers);

// let may = carSales[4];
// console.log(may);

// let june = carSales["5"];
// console.log(june);

// carSales[12] = -50;
// console.log(carSales);

// let a = [1, 2, 3, 4, 5]
// let len = a.length
// console.log(len);
// a.length = 0;
// console.log(a);

// let jan, fab, mar, rest;
// [jan, fab, mar, ...rest] = carSales;
// console.log(jan, fab, mar);
// console.log(rest);

// let sum = 0;
// for (let sale of carSales)
//     sum += sale;
// let average = sum / carSales.length;
// let roundedAverage = average.toFixed(2);
// console.log(average);
// console.log(roundedAverage);

// let sum = 0;
// for (let [index, sale] of carSales.entries()) {
//     if (index % 2 === 0)
//         sum += sale;
// }
// let average = sum / (carSales.length/2);
// console.log(average);

// let list = [4, 5, 6];
// for (let i in list) {
//     console.log(i);
// }
// for (let i of list) {
//     console.log(i);
// }

// const car = {
//     maker : "BMW",
//     color : "red",
//     year : "2012"
// }
// for (let prop in car) {
//     console.log(prop);
// }

// let sum = 0;
// carSales.forEach(sales => {sum += sales;});
// let average = sum / carSales.length;
// console.log(average);

// carSales.forEach((sale, index, array) => {array[index] = sale + 50});
// console.log(carSales);

// let newCarSales = carSales.map(sale => sale + 50);
// console.log(newCarSales);
// console.log(carSales);

// let highSales = carSales.filter(sale = sale > 500);
// console.log(highSales);

// let evenSales = carSales.filter((sale, index) => index % 2 === 1);
// console.log(evenSales);

// let firstSaleSix = carSales.find(sale => sale > 600);
// console.log(firstSaleSix);

// let firstSaleSixIndex = carSales.findIndex(sale => sale > 600);
// console.log(firstSaleSix);

// let allSaleSix = carSales.every(sale => sale > 600);
// console.log(allSaleSix);

// let anySaleSix = carSales.some(sale => sale > 600);
// console.log(anySaleSix);

// let sum = carSales.reduce((t1, t2) => t1 + t2, 0);
// console.log(sum);

// let average = sum / carSales.length;
// console.log (average);

// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1: t2));
// console.log(highest);

// let flat = [1, [2, 3]].flat();
// console.log(flat);

// let message = ["오늘은", "비가 옵니다"]
// let words = message.flatMap(msg => msg.split(""));
// console.log(words);

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4, 5);
// newArray = original.concat([4, 5], [6, 7]);
// console.log(newArray);

// let stack = [];
// stack.push(1);
// stack.push(2, 3);
// stack.pop();
// stack.push(4);
// console.log(stack);
// stack.unshift(1);
// stack.unshift(2, 3);
// stack.shift();
// console.log(stack);

// const numbers = [20, 37, -21, 32, -2];
// document.write(numbers[1] +",");
// document.write(numbers[3]);

// let a = [1, 2, 3, 4, 5];
//a.splice(0, 2);
// a.splice(2);
// a.splice(0,2,10,20);
// console.log(a);
// let b = a.splice(0, 2);
// let c = a.splice(1, -1);
// console.log(c);
// console.log(a);

// let a = new Array(5);
// a.fill(0);
// // a.fill(1, 1);
// a.fill(1, 1, -1);
// console.log(a);


// let a = [0, 1, 2, 3, 2, 1, 0];
// let b = a.indexOf(2);
// let c = a.lastIndexOf(2);
// let d = a.indexOf(5)
// console.log(d);

// let a = [0, true, 2, false, NaN];
// let b = a.includes(NaN);
// console.log(b);

// let a = ["apple", "cherry", "banana"];
// let b = a.sort();
// console.log(b);
// let c = [22, 333, 121];
// let d = c.sort();
// console.log(d);
// let e = c.sort((a, b) => a - b);
// console.log(e);

// let a = [1, 2, 3];
// let b = a.join();
// let c = a.join("");
// console.log(c);

// const scores = [67, 82, 97, 100, 92];
// for (let i = 0; i<scores.length; i++){
//     document.write(scores[i]);
// }


// for (let score of scores) {
//     document.write(score + '<br>')
// }

// const tel = ["010", "1234", "5678"]
// let tel2 = tel.join("-");
// document.write(tel2);

// const colors = ["빨강", "노랑", "파랑", "주황"];
// let arr = colors.shift();
// document.write(colors+"/");
// document.write(arr);

// let arr = new Array(2);
// for (let i = 0; i<arr.length; ++i)
//     arr[i] = new Array(3);
// console.log(arr);

// let arr = Array.from(new Array(2), () => new Array(3));
// console.log(arr);

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[0][0] = 4;
// arr[0][1] = 5;
// arr[0][2] = 6;
// console.table(arr);

// for (let i = 0; i < arr.length; ++i) {
//     for (let j = 0; j < arr[i].length; ++j){
//         console.log(arr[i][j]);
//     }
// }

// const a = [[83, 90, 70, 87], [87, 93, 62, 83], [98, 90, 77, 97]];
// let sum, average;
// text ="";
// for (let i = 0; i<3; i++) {
//     sum = 0;
//     for (let j = 0; j<4; j++) {
//         sum += a[i][j];
//     }
//     average = sum/4;
//     text =+ i + "번째 학생의 합계: " + sum + ", 평균: " + average;
// };


// let mathScores = [90, 85, 70, 86, 97];
// let sum = 0;
// let average;
// for (let mathscore of mathScores) {
//     sum += mathscore;
// }
// average = sum/mathScores.length;
// let text = "";
// text += "합계: " + sum + "<br>";
// text += "평균: " + average + "<br>";
// document.write(text);

// let tempNumbers =[2, -24, -8, 10, 17, -18];
// tempFind = tempNumbers.find(number => number < 0);
// document.write(tempFind);

// let a = [12, 0, 2, 5, 4];
// let b = [0, 2, 3, 12, 8];
// let c = [];
// b.forEach(element => {
//     if ( a.includes(element)) {
//         c.push(element);
//     }
// });
// document.write(c);

let numbers2 = [1, 3, 5];
let newNumbers = numbers2.map(number => number*10);
document.write(newNumbers);
