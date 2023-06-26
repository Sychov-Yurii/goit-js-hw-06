const categoriesList = document.querySelector('ul#categories');
const items = categoriesList.querySelectorAll('li.item');

items.forEach(item => {
  
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li');
  
});
