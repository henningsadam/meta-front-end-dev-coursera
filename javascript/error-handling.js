function addTwoNums (a, b) {
    try {
        if (typeof(a) != "number") {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != "number") {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch (error) {
        console.log("Error!", error)
    }
}

addTwoNums(9, "7")

console.log("code still is working...")

/* Exercise: Defensive programming */

// The length of the word parameter cannot be less than 2.
// The length of the match parameter must be 1.
// The type of both the word and the match parameters must be string.

function letterFinder(word, match) {
    var condition1 = typeof(word) == "string" && word.length >= 2
    var condition2 = typeof(match) == "string" && match.length == 1
    try {
        if (condition1 == false) {
            throw new ReferenceError("word parameter is invalid")
        } else if (condition2 == false) {
            throw new ReferenceError("match parameter is invalid")
        } else {
            for(i = 0; i < word.length; i++) {
                if(word[i] == match) {
                    //if the current character at position i in the word is equal to the match
                    console.log('Found the', match, 'at', i)
                } else {
                    console.log('---No match found at', i)
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}

console.log("still running");

letterFinder("tree", "e")


console.log(Number(5).toPrecision(300));

var str = "Hello";
console.log(str.match("jello"));