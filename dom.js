// let div = document.querySelector("div");
// console.log(div);
// function changeContent() {
//     div.outerHTML = "<h1>DOM API</h1><p>선수 조건 : 없음</p>"
// }

// const ele = document.getElementsByTagName('li');
// [...ele].forEach(ele => {ele.style.color = 'red'});

// const elems = document.getElementsByClassName('fruit');
// [...elems].forEach(elem => {elem.style.color = 'red'});
// const apples = document.getElementsByClassName('fruit apple');
// [...apples].forEach(elem => {elem.style.color = 'blue'});
// const boxEl = document.querySelector('.box');
// boxEl.addEventListener('click', function () {
//     console.log("Click!");
//     boxEl.classList.toggle('active')
// })
// const boxEls = document.querySelectorAll('.box');
// console.log(boxEls);

// boxEls.forEach(function (boxEl, index) {
//     boxEls.classList.add(`order-${index + 1}`);
// })

// const div = document.getElementById('my_div');
// const clearbtn = document.getElementById('clearbtn');
// const result = document.getElementById('result')
//  div.addEventListener('click', (event) => {
//     result.innerHTML+=<div>Click</div>;
//  });
//  div.addEventListener('mousedown', (event) => {
//     result.innerHTML+=<div>MouseDown</div>;
//  });
//  div.addEventListener('mouseup', (event) => {
//     result.innerHTML+=<div>MouseUp</div>;
//  });
//  clearbtn.addEventListener('click', (event) => {
//     result.innerHTML="";
//  });

// function sayHi(name) {
//     console.log(`Hi ${name}`);
// }

// const button = document.querySelector('button');
// const handleClick = () => console.log('button click');

// button.onclick = handleClick;

// button.removeEventListener('click', handleClick);

// button.onclick = null;

// button.addEventListener('click', function add() {
//     console.log('button Click!');
//     button.removeEventListener('click', add);
// });

// const msg = document.querySelector('.message');
// function showCoords(e) {
//     msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY};`
// }
// document.onclick = showCoords;

// const fruits = document.getElementById('fruits');
// function activate([target]) {
//     if(!target.matches('#fruits > li')) return;
//     [...fruits.children].forEach(fruit => {
//         fruit.classList.toggle('active', fruit === target);
//     })
// }
// // document.getElementById('apple').onclick = active;
// // document.getElementById('banana').onclick = active;
// // document.getElementById('cherry').onclick = active;
// fruits.onclick =activate;

// const todos = document.getElementById('todos');
// function activate({target}) {
//     [...todos.children].forEach(todo => {
//         todo.classList.toggle('active', todo === target);
//     })
// }
//  document.getElementById('todo1').onclick = activate;
//  document.getElementById('todo2').onclick = activate;
//  document.getElementById('todo3').onclick = activate;
//  document.getElementById('todo4').onclick = activate;


//  const buttons = document.querySelectorAll(".check");
//  buttons.forEach(function(button)) {
//     button.addEventListener("click", function(){
//         button.classList.toggle('active')
//     })
//  }


const box = document.querySelector(".box");
// const initialMousePos = {x: 0, y: 0}
const offset = {x: 0, y: 0};
// const move = e => {
   
// };

// document.addEventListener('click', e => {
//     const newX = e.clientX    
//     const newY = e.clientY    
//     const boxwidth = box.offsetWidth;
//     const boxHeight = box.offsetHeight;

//     const  = e.clientX - boxwidth /2;

//     // initialMousePos.x = e.clientX - offset.x;
//     // initialMousePos.y = e.clientY - offset.y;
//     // console.log(initialMousePos);
//     // offset.x = e.clientX -initialMousePos.x;
//     // offset.y = e.clientY -initialMousePos.y;
//     offset.x = newX;
//     offset.y = newY;
//     box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`

//     //document.activeElement('mousemove', move);
// });

// // document.addEventListener('mouseup', () => {
// //     document.removeEventListener('mousemove', move);
// // })