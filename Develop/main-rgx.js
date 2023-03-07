//!  This test was inspired by Milo Cohen

console.log("-init-")
console.log("#=====================================================#\n")

const randomhex = "#fcba03da";
const notRandomHex = "n9_.-@3no.-.df."

const matchhex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ ;

const match1 = randomhex.match(matchhex); // the regex match expression is not expected to return a true boolean 
const match2 = notRandomHex.match(matchhex);

const test1 = matchhex.test(randomhex); // test will return a false boolean .
const test2 = matchhex.test(notRandomHex);


console.log("result of match1: ", match1);
console.log("result of match2: ", match2);

console.log("#=====================================================#\n")
console.log("result of test1: ", test1);
console.log("result of test2: ", test2);


console.log("#=====================================================#\n")
console.log("done")