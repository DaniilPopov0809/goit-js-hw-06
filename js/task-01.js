const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);

for (let element of categories.children) {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
};