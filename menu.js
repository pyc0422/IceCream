let menu = {
    drinks : [
    "Water", "Tea", "Sweet Tea",
    "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees : [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate"
    ],
    desserts: [
    "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

window.onload = () => {
    let category = document.getElementById('category');
    category.addEventListener('change', (event) => {
        event.preventDefault();
        let selectedCategory = event.target.value;
        console.log('selectedCategory', selectedCategory);
        const label = document.querySelector('label[for="items"]');
        label.textContent = selectedCategory;
        const items = document.getElementById('items');
        menu[selectedCategory].forEach((item) => {
            let itemEle = document.createElement('option');
            itemEle.textContent = item;
            items.appendChild(itemEle);
        })

    })
}