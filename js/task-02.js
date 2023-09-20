const ingredients = [
  'Potatoes', 
  'Mushrooms', 
  'Garlic', 
  'Tomatos', 
  'Herbs',
  'Condiments',
];


const markup = ingredients.map((elem) => {
  
  console.log(elem);
});

  const li = document.querySelector('#ingredients');
  const liEl = document.createElement("li");
  liEl.classList.add("item")
  const titleEl = document.createElement("h1").textContent;
  
  
  console.dir();
  console.log(elem);


//   // Отримуємо посилання на список ul#ingredients
// const ul = document.getElementById('ingredients');

// // Отримуємо масив інгредієнтів
// const ingredients = ['Інгредієнт 1', 'Інгредієнт 2', 'Інгредієнт 3'];

// // Цикл для обробки кожного інгредієнта
// ingredients.forEach(ingredient => {
//   // Створюємо новий елемент <li>
//   const li = document.createElement('li');
  
//   // Додаємо текстовий вміст з назвою інгредієнта
//   li.textContent = ingredient;
  
//   // Додаємо клас "item" до елементу <li>
//   li.classList.add('item');
  
//   // Вставляємо елемент <li> у список ul#ingredients
//   ul.appendChild(li);
// });




dh
