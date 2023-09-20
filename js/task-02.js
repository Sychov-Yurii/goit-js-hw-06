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




