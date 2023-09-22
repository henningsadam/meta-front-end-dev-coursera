// Random method

var random = Math.random()
console.log(random)
console.log(random * 100)

// Ceil method
var numbers = [0.0001, 0.5, 0.99, 1.01, 1.5, 2.99]

for (i=0; i < numbers.length; i++) {
    console.log(numbers[i], "is", Math.ceil(numbers[i]))
}


/* STRINGS */

var greet = "Hello, ";
var place = "World"

// console.log(greet.length)
// console.log(greet.charAt(0))
// console.log(greet.charAt(1))
// console.log(greet.charAt(2))

// console.log(greet.concat(place))

// console.log(greet.indexOf(","))
// console.log(greet.indexOf("l"))
// console.log(greet.lastIndexOf("l"))

console.log(greet.toLowerCase())
console.log(place.toUpperCase())


/* EXERCISE */

var clothes = []

clothes.push("hat")
clothes.push("shirt")
clothes.push("pants")
clothes.push("suit")
clothes.push("tie")

console.log(clothes)

var favCar = {
    color: "black"
}

favCar.convertible = true

console.log(favCar)


var car = {
    color: "black",
    make: "Toyota",
    model: "4Runner"
}

car.describe = function(make, model) {
    console.log("My car is a ", make, model)
}

car.describe("Lexus", "sedan")


testValues = [
    10,
    "what is this?",
    3.14,
    true,
    false,
    (1<2),
    [1,2,3],
    {firstProperty: 1},
    function abc() {console.log("abc")}
]

// console.log(testValues)

for (i=0; i < testValues.length, i++;) {
    console.log(testValues[i]);
    console.log(testValues[i], "is a data type of", typeof(testValues[i]));
}