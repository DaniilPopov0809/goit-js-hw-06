const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
console.log(categories);

categories.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Category: ${element.querySelectorAll('li').length}`);
});
