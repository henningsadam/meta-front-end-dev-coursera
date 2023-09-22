// define a class structure for a dish
class Dish {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.priceWithTax = price * 1.2
    }
}

// define array of dishes
const dishes = []
dishes.push(
    new Dish('Italian pasta', 9.55),
    new Dish('Rice with veggies', 8.65),
    new Dish('Chicken with potatoes', 15.55),
    new Dish('Vegetarian Pizza', 6.45),
)

// console.log(dishes);

function displayMenu(dishes, isTaxed) {
    if (isTaxed == true) {
        for (const dish of dishes) {
            console.log(`Dish: ${dish.name} Price (incl.tax): ${dish.priceWithTax}`);
        }
    } else {
        for (const dish of dishes) {
            console.log(`Dish: ${dish.name} Price: ${dish.price}`);
        }
    }
}

displayMenu(dishes, true)