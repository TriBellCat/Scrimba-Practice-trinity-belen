/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
function squareArr(arr) {
    return arr.map(x => Math.pow(x,2))
}
console.log(nums)
console.log(squareArr(nums))


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
function capitalizeFirst(arr) {
    return arr.map(x => x.charAt(0).toUpperCase()+ x.substr(1))
}

console.log(names)
console.log(capitalizeFirst(names))

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

function wrapString(arr) {
    return arr.map(x => "<p>${x}</p>")
}

console.log(wrapString(pokemon))

