// function func(event) {
//     let text = event.target.tagName;
//     document.getElementById("show").innerHTML = text;
// }

// const item = document.querySelector(".item");
// // item.addEventListener("dragstart", (e) => {
// //     console.log("드래그 시작!")
// // });

// // item.addEventListener("drag", (e) => {
// //     console.log("드래그하면 나와라!")
// // });

// // const container = document.querySelector(".container");
// // container.addEventListener("dragenter", (e) =>{ 
// //     console.log("1박스 영역에 최초 진입!")
// // });
// // container.addEventListener("dragleave", (e) => {
// //     console.log("1박스 영역 떠나면 발생!")
// // });
// // container.addEventListener("dragover", (e) => {
// //     console.log("여기 있어!")
// //     e.preventDefault();
// // });
// // container.addEventListener("drop", (e) => {
// //     console.log("1번 박스 영역에 드롭")
// // });

// // const container2 = document.querySelector("container2");
// // container2.addEventListener("dragenter", (e) =>{ 
// //     console.log("2박스 영역에 최초 진입!")
// // });
// // container2.addEventListener("dragleave", (e) => {
// //     console.log("2박스 영역 떠나면 발생!")
// // });
// // container2.addEventListener("dragover", (e) => {
// //     console.log("여기 있어!")
// //     e.preventDefault();
// // });
// // container2.addEventListener("drop", (e) => {
// //     console.log("2번 박스 영역에 드롭")
// // });

// // document.getElementById('appendChildBtn').onclick = function() {
// //     const parent = document/getElementById('parent');
// //     const newElement = document.createElement('div');
// //     newElement.textContent = "New Child"
// //     parent.appendChild(newElement);
// // }

// // document.getElementById('insetBeforeBtn').onclick = function() {
// //     const parentEl = document.getElementById('parent');
// //     const newEl = document.createElement('div');
// //     newEl.textContent = "New Child"

// //     const reference = document.getElementById('reference');
// //     parentEl.insertBefore(newEl, reference);
// // }

// const draggables = document.querySelectorAll(".draggable");
// const containers = document.querySelectorAll(".container");
// draggables.forEach((draggable) => {
//     draggable.addEventListener("dragstart", () => {
//         draggable.classList.add("dragging");
//     });
//     draggable.addEventListener("dragend", () => {
//         draggable.classList.remove("dragging");
//     });
// });

// containers.forEach((container) => {
//     container.addEventListener("dragover", (e) => {
//         e.preventDefault();
//         const afterElement = getDragAfterElement(container, e.clientX);
//         const draggable = document.querySelector(".dragging");
//         if(afterElement === undefined) {
//             container.appendChild(draggable)
//         } else {
//             container.insertBefore(draggable, afterElement)
//         }
//     });
// });

// function getDragAfterElement(container, x) {
//     const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];
//     let closestElement = null;
//     let closestOffset = Number.NEGATIVE_INFINITY;

//     draggableElements.forEach(element => {
//         const box = child.getBoundingClientReact();
//         const offset = x -box.left - box.width / 2;

//         if (offset < 0 && offset > closest.offset) {
//             closetOffset: offset; 
//             closestElement: child;
//         }
//     });
//     return closest;
// }

