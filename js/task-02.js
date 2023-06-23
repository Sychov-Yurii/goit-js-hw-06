const ingredients = [
  'Potatoes', 
  'Mushrooms', 
  'Garlic', 
  'Tomatos', 
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients');
const arr = [];


ingredients.forEach((ingredient, index, array) => {
  arr.push(ingredient)
  console.log(arr);
  // const listItem = document.createElement('li');
  // listItem.textContent = ingredient;
  // listItem.classList.add('item');
  
});

//list.appendChild(listItem);