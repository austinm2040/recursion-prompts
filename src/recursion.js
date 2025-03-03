/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  } else {
    if (n === 0) {
      return 1;
    } else {
        if (n > 0) {
          return n * factorial(n - 1);
        }
    }
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[array.length - 1] + sum(array.slice(0, array.length - 1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
    } else {
      var sum = 0;
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) === true) {
          sum += arraySum(array[i]);
          continue;
        }
        sum += array[i];
      }
      return sum;
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true;
  } else {
    if (n === 1 || n === -1) {
      return false;
    } else {
      if (n > 1) {
        return isEven(n - 2);
      } else {
        return isEven(n + 2);
      }
    }
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  } else {
    if (n < 1) {
      return (n + 1) + sumBelow(n + 1);
    } else {
      return (n - 1) + sumBelow(n - 1)
    }
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (y > x) {
    if (y - x < 2) {
      return [];
    } else {
      if (y - x === 2) {
        return [x + 1];
      } else {
        var rangeArray = range(x, y - 1);
        rangeArray.push(y - 1);
        return rangeArray;
      }
    }
    } else {
        if (x - y < 2) {
      return [];
    } else {
      if (x - y === 2) {
        return [y + 1];
      } else {
        var rangeArray = range(x - 1, y);
        rangeArray.unshift(x - 1);
        return rangeArray;
      }
    }
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (base === 0 && exp === 0) {
    return NaN;
  }
  if (base === 0 && exp !== 0) {
    return 0;
  }
  if (base === 1) {
    return 1;
  }
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  if (exp === -1) {
    return 1 / base;
  }
  if (exp < -1) {
    return 1 / base * exponent(base, exp + 1);
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1 || n === 2) {
    return true;
  }
  if (n % 2 === 1 || n < 2) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  }
  return string[string.length - 1] + reverse(string.substring(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length === 0 || string.length === 1)  {
    return true;
  } else {
    if (string[0].toLowerCase() !== string[string.length - 1].toLowerCase()) {
      return false;
    }
  }
  // var innerStringEven = string.substring(1, string.length - 1);
  // var innerStringOdd = string.substring(1, string.length - 1);
  var innerString = string.substring(1, string.length - 1);
  return palindrome(innerString);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  var isNegative = false;

  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (x === y) {
    return 0;
  }

  if (x < 0) {
    isNegative = true;
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }

  if (x - y < 0) {
    if (isNegative) {
      return -x;
    }
    return x;
  }

  if (x - y < y) {
    if (isNegative) {
      return -(x - y);
    }
    return x - y;
  }
  if (isNegative) {
    return -modulo(x - y, y);
  }
  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  var isNegative = false;

  if (x === 0 || y === 0) {
    return 0;
  }

  if (
    (x < 0 && y > 0) ||
    (x > 0 && y < 0)
  ) {
    isNegative = true;
  }

  if (x < 0) {
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }

  if (y > 0) {
    if (isNegative) {
      return -(x + multiply(x, y - 1));
    }
    return x + multiply(x, y - 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  var isNegative = false;

  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (x === y) {
    return 1;
  }

  if (
    (x < 0 && y > 0) ||
    (x > 0 && y < 0)
  ) {
    isNegative = true;
  }

  if (x < 0) {
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }

  if (x < y) {
    return 0;
  }
  if (x > 0) {
    if (isNegative) {
      return 1 - (x - divide(x - y, y));
    }
    return 1 + divide(x - y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === y) {
    return x;
  }
  if (x > y) {
    return gcd(x - y, y);
  }
  return gcd (x, y - x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // if (str1.length !== str2.length) {
  //   return false;
  // }
  if (
    str1.length === 0 &&
    str2.length === 0
  ) {
    return true;
  }
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 1) {
    return [str[0]];
  }
  var stringArray = createArray(str.slice(1));
  stringArray.unshift(str[0]);
  return stringArray;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1) {
    return [array[0]];
  }
  var reversedArray = reverseArr(array.slice(1));
  reversedArray.push(array[0]);
  return reversedArray;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  }
  var builtList = buildList(value, length - 1);
  builtList.push(value);
  return builtList;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 0) {
    return [];
  }
  var fbArray = fizzBuzz(n - 1);
  if (n % 3 === 0 && n % 5 === 0) {
    n = 'FizzBuzz'
  }
    if (n % 3 === 0) {
    n = 'Fizz'
  }
    if (n % 5 === 0 ) {
    n = 'Buzz'
  }
  fbArray.push(n.toString());
  return fbArray;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  }
  if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
  }
  return countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  }
  var mappedArr = rMap(array.slice(1), callback);
  mappedArr.unshift(callback(array[0]));
  return mappedArr;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var property in obj) {
    if (typeof(obj[property]) === 'object') {
      count += countKeysInObj(obj[property], key);
    }
    if (property === key) {
      count++;
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var key in obj) {
    var item = obj[key];
    if (typeof(item) === 'object') {
      count += countValuesInObj(item, value);
    } else {
      if (item === value) {
        count++;
      }
    }
  }
    return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
		var item = obj[key];
		if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    } else {
		  if (typeof(item) === 'object') {
			  obj[key] = replaceKeysInObj(item, oldKey, newKey);
      }
		}
	}
    return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.

// Notes if n = 2
var fibonacci = function(n) {
  if (n < 1) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  }
  var fibArray = fibonacci(n - 1);
  if (fibArray[n] !== undefined) { // [0, 1] is all so far; fibArray[2] === undefined
    return fibArray;
  }
  fibArray[n] = fibArray[n - 1] + fibArray[n - 2]; // fibArray[2] = fibArray[1] + fibArray[0] = 1
  return fibArray; // [0, 1, 1] stored in memory; start recursion
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

// if nthFibo(5):
  // nthFibo(4) + nthFibo(3)
  // nthFibo(3) + nthFibo(2) + nthFibo(2) + 1
  // nthFibo(2) + 1 + 1 + 1 + 1
  // 1 + 1 + 1 + 1 + 1 = 5
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  }
  var capitalizedArray = capitalizeWords(array.slice(1));
  capitalizedArray.unshift(array[0].toUpperCase());
  return capitalizedArray;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return [];
  }
  var firstLetterCap = capitalizeFirst(array.slice(1));
  firstLetterCap.unshift(array[0][0].toUpperCase() + array[0].slice(1));
  return firstLetterCap;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var key in obj) {
    if (typeof(obj[key]) === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
    if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (array.length === 0) {
    return [];
  }
  var flattenedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      var flattener = flatten(array[i]);
      for (var j = 0; j < flattener.length; j++) {
        flattenedArray.push(flattener[j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
// Imperative, no recursion:
// var letterTally = function(str, obj) {
//   obj = {};
//   for (var i = 0; i < str.length; i++) {
//     obj[str[i]] = (obj[str[i]] || 0) + 1;
//   }
//   return obj;
// };

var letterTally = function(str, obj) {
  if (str.length === 0) {
    return {};
  }
  var stringToObj = letterTally(str.slice(1));
  stringToObj[str[0]] = (stringToObj[str[0]] || 0) + 1;
  return stringToObj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length === 0) {
    return [];
  }
  var compressedList = compress(list.slice(1))
  if (list[1] !== list[0]) {
    compressedList.unshift(list[0]);
  }
  return compressedList;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return [];
  }
  var augmentedArray = augmentElements(array.slice(1), aug);
  array[0].push(aug);
  augmentedArray.unshift(array[0]);
  return augmentedArray;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) {
    return [];
  }
  var compressedZero = minimizeZeroes(array.slice(1))
  if (
    (array[0] === 0 &&
    array[1] !== 0) ||
    (array[0] !== 0)
  ) {
    compressedZero.unshift(array[0]);
  }
  return compressedZero;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  }
  var alternatedArray = alternateSign(array.slice(0, array.length - 1));
  if (array.length % 2 === 0) {
    if (array[array.length - 1] > 0) {
      array[array.length - 1] = -array[array.length - 1];
    }
  } else {
    if (array[array.length - 1] < 0) {
      array[array.length - 1] = -array[array.length - 1];
    }
  }
  alternatedArray.push(array[array.length - 1]);
  return alternatedArray;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var numbers = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
  5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}

  if (str.length === 0) {
    return '';
  }

  var finalString = numToText(str.slice(0, str.length - 1));
  if (numbers[str[str.length - 1]] !== undefined) {
    finalString += numbers[str[str.length - 1]];
  } else {
    finalString += str[str.length - 1];
  }
  return finalString;
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {

};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (min === undefined) {
    min = 0;
  }
  if (max === undefined) {
    max = array.length;
  }
  if (min > max) {
    return null;
  }
  // if (target < array[min] || target > array[max - 1]) {
  //   return null;
  // }

  var midpoint = Math.floor((min + max) / 2);
  if (array[midpoint] === target) {
    return midpoint;
  }
  if (array[midpoint] < target) {
    return binarySearch(array, target, midpoint + 1, max);
  }
  if (array[midpoint] > target) {
    return binarySearch(array, target, min, midpoint - 1);
  }
  return null;
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
// if () {
//   var  = ;
//   mergeSort(, , );
//   mergeSort(, , );
//   merge(, , , );
// }

// create two separate arrays

var mergeSort = function(array) {
  var midpoint = Math.floor(array.length / 2);
  var leftArr = array.slice(0, midpoint);
  var rightArr = array.slice(midpoint, array.length);

  var merge = function(leftArr, rightArr) {
    var mergedArr = [];
    while (leftArr.length > 0 || rightArr.length > 0) {
      if (leftArr.length > 0 && rightArr.length > 0) {
        if (leftArr[0] < rightArr[0]) {
          mergedArr.push(leftArr.shift());
        } else {
          mergedArr.push(rightArr.shift());
        }
      } else if (leftArr.length > 0) {
        mergedArr.push(leftArr.shift());
      } else {
        mergedArr.push(rightArr.shift());
      }
    }
    return mergedArr;
  }

  if (array.length <= 1) {
    return array;
  }

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  var cloneResult;
  if (Array.isArray(input)) {
    cloneResult = [];
    if (input.length === 0) {
      return [];
    }
    for (var i = 0; i < input.length; i++) {
      if (typeof(input[i]) === 'object') {
        cloneResult.push(clone(input[i]));
      } else {
        cloneResult.push(input[i]);
      }
    }
  } else {
    cloneResult = {};
    for (var key in input) {
      if (typeof(input[key]) === 'object') {
        cloneResult[key] = clone(input[key]);
      } else {
        cloneResult[key] = input[key];
      }
    }
  }
  return cloneResult;
};
