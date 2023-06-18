

// Flattening nested arrays

const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Let us consider a 2-dimensional nested array as shown below.

let arr = [
  [1, 2],
  [3, 4],
  [5, 6][7, 8, 9],
  [10, 11, 12, 13, 14, 15]
];


// Using concat() and apply()
let flatArray = [].concat.apply([], arr);
//Output:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

// b. Using the spread operator
let flatArray1 = [].concat(...arr);
//Output:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

// c. Using the reduce method
let flatArray3 = arr.reduce((acc, curVal) => {
  return acc.concat(curVal)
}, []);
//Output:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]


// Using flat() on sparse arrays


// The flat() method removes empty slots in arrays:

const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]



// Calling flat() on non-array objects

const arrayLike = {
    length: 3,
    0: [1, 2],
    // Array-like objects aren't flattened
    1: { length: 2, 0: 3, 1: 4 },
    2: 5,
  };
  console.log(Array.prototype.flat.call(arrayLike));
  // [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
  

// Declare an object
let ob = {
	Company: "GeeksforGeeks",
	Address: "Noida",
	contact: +91-999999999,
	mentor: {
		HTML: "GFG",
		CSS: "GFG",
		JavaScript: "GFG"
	}
};

// Declare a flatten function that takes
// object as parameter and returns the
// flatten object

const flattenObj = (ob) => {

	// The object which contains the
	// final result
	let result = {};

	// loop through the object "ob"
	for (const i in ob) {

		// We check the type of the i using
		// typeof() function and recursively
		// call the function again
		if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
			const temp = flattenObj(ob[i]);
			for (const j in temp) {

				// Store temp in result
				result[i + '.' + j] = temp[j];
			}
		}

		// Else store ob[i] in result directly
		else {
			result[i] = ob[i];
		}
	}
	return result;
};

console.log(flattenObj(ob));


