// for loops

// for (var i = 1; i<=10; i++) {
//     if (i%2 == 0) {
//         console.log(i + " - this number is even!")
//     } else {
//         console.log(i)
//     }
// }
// console.log("all done!")

// while loops
// var counter = 3;

// while (counter > 0) {
//     console.log(counter)
//     counter--;
// }

// Task 1
// for (i = 1; i<=5; i++) {
//     console.log(i)
// }
// console.log('Counting complete!')

// Task 2
// for (i = 5; i>0; i--) {
//     console.log(i)
// }
// console.log('Counting complete!')

//Task 3
// var counter = 1

// while (counter <= 5) {
//     console.log(counter)
//     counter++
// }
// console.log('Counting complete!')

// //Task 4
// var counter = 5

// while (counter > 0) {
//     console.log(counter)
//     counter--
// }
// console.log('Countdown complete!')

//Task 5
// var counter = 2018

// while (counter <= 2022) {
//     console.log(counter)
//     counter++
// }

// nested loops

// for (i=1; i<=2; i++) {
//     console.log(i)
//     for (j=1; j<=5; j++) {
//        console.log("-------", j) 
//     }
//     // console.log("week" + i + " - " + "day" + j)
// }


// for (firstNum = 0; firstNum < 2; firstNum++) {
//     console.log(firstNum)
//     for (secNum = 0; secNum < 10; secNum++) {
//         console.log(firstNum, "multiplied by", secNum, "is:", firstNum * secNum)
//     }
// }

var days = [
    "Monday",
    "Tuesday",
    "Wednesday"
]
// console.log(days[0])

// for (i = 0; i < days.length; i++) {
//     if (days[i] == "Monday") {
//         console.log("value is Monday!")
//     } else {
//         console.log(days[i])
//     }
// }

// Exercise #1
// for (i=1; i<=10; i++) {
//     if (i == 1) {
//         console.log("Gold medal")
//     } else if (i == 2) {
//         console.log("Silver medal")
//     } else if (i == 3) {
//         console.log("Bronze medal")
//     } else {
//         console.log(i)
//     }
// }

// Exercise #2
for (i=1; i<=10; i++) {
    switch (i) {
        case 1:
            console.log("Gold Medal");
            break;
        case 2:
            console.log("Silver Medal");
            break;
        case 3:
            console.log("Bronze Medal");
            break;
        default: 
            console.log(i);
    }
}
