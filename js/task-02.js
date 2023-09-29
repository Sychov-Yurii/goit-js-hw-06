const ingredients = [
  'Potatoes', 
  'Mushrooms', 
  'Garlic', 
  'Tomatos', 
  'Herbs',
  'Condiments',
];

const ul = document.getElementById('ingredients');

const newIngredient = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  return li;
})
ul.append(...newIngredient)

console.log(ul);




