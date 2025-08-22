import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name); // prints "ES6"

c1.name = "Python 101";
console.log(c1); // prints the updated object

// Only print error messages, no stack trace
try {
    c1.name = 12;
} catch(err) {
    console.log(err.message); // prints "Name must be a string"
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
} catch(err) {
    console.log(err.message); // prints "Length must be a number"
}
