// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const numberEl = document.querySelector("input");
// const btnCreate = document.querySelector("[data-create]");
// const btnDestroy = document.querySelector("[data-destroy]");
// const boxEl = document.querySelector("#boxes")
// const primaryValueSize = 30;
// btnCreate.addEventListener("click", onBtnCreateClick);
// btnDestroy.addEventListener("click", onBtnDestroyClick);

// function onBtnCreateClick() {
//   createBoxes(numberEl.value);
// } 

// function createBoxes(amount) {
//   const newArray = [];
//   for (let i = 0; i < amount; i += 1) {
//     newArray[i] = i;
//   }

//   const addElements = newArray
//     .map(elem => {
//       if (elem === 0) {
//         return `<div style="width:${primaryValueSize}px; height:${primaryValueSize}px; background-color: ${getRandomHexColor()}"></div>`;
//       } else {
//         return `<div style="width:${primaryValueSize + elem * 10}px; height:${
//           primaryValueSize + elem * 10
//         }px; background-color: ${getRandomHexColor()}"></div>`;
//       }
//     })
//     .join('');

//   boxEl.insertAdjacentHTML('beforeend', addElements);
// }

// function onBtnDestroyClick() {
//   destroyBoxes();
// }

// function destroyBoxes() {
//   boxEl.innerHTML = '';
// }



