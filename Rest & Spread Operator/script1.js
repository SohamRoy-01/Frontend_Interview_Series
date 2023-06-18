// Syntax  Spread Operator

// var var_name = [...iterable];

var array1 = [10, 20, 30, 40, 50];
var array2 = [60, 70, 80, 90, 100];
var array3 = [...array1, ...array2];
console.log(array3);

// Output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

var array1 = [10, 20, 30, 40, 50];
var array2 = [...array1, 60];
console.log(array2);

// Output: [10, 20, 30, 40, 50, 60]

const obj = {
  firstName: "Divit",
  lastName: "Patidar",
};
const obj2 = { ...obj };
console.log(obj2);

// Output:

// {
//     firstName: "Divit",
//     lastName: "Patidar"
// }

// Syntax: Rest Operator

function function_name(...arguments) {
  statements;
}

function average(...args) {
  console.log(args);
  var avg =
    args.reduce(function (a, b) {
      return a + b;
    }, 0) / args.length;
  return avg;
}
console.log("average of numbers is : " + average(1, 2, 3, 4, 5));
console.log("average of numbers is : " + average(1, 2, 3));

//     Output:

// [1, 2, 3, 4, 5]
// "average of numbers is : 3"
// [1, 2, 3]
// "average of numbers is : 2"
