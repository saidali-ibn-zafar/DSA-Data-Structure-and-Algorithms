// Write a program to reverse an array or string
// Given an array (or string), the task is to reverse the array/string.
// Examples :
// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

// input should be arr/string!
const reversed = (input) => {
  if (Array.isArray(input)) {
    return input.reverse();
  } else if (typeof input === "string") {
    return input.split("").reverse().join("");
  } else {
    throw new Error(
      "Invalid input type. Only arrays and strings are supported."
    );
  }
};

// console.log(reversed(1234)); // Error, btw I liked throw new Error(...);
console.log(reversed([1, 2, 3, 4]));
console.log(reversed("Uzbekistan"));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Maximum and minimum of an array using minimum number of comparisons
// Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.
// Examples:

// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//               Maximum element is: 9

// Input: arr[] = {22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
//               Maximum element is: 35

const findMinAndMax = (arr) => {
  if (Array.isArray(arr)) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return `From [${arr}]\n
Min = ${min}\n
Max = ${max}`;
  } else {
    throw new Error("Invalid input type. Only arrays are supported.");
  }
  return 0;
};

console.log(findMinAndMax([5, 4, 6, 2, 3, 6, 5, 1]));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

const findKthSmallest = (arr, k) => {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input type. Only arrays are supported.");
  }
  if (k <= 0 || k > arr.length) {
    throw new Error("Invalid value of k.");
  }

  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[k - 1];
};

const myArr = [1, 2, 33, 44, 55, 5];
const k = 3;
const kthSmallest = findKthSmallest(myArr, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Sort an array of 0s, 1s and 2s
// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
// Example 1:

// Input:
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated
// into ascending order.

const sortAscending = (arr) => {
  return [...arr].sort((a, b) => a - b);
};

console.log(sortAscending([0, 1, 0, 2, 0, 0, 2])); // Output: [0, 0, 0, 0, 1, 2, 2]

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Move all negative numbers to beginning and positive to end with constant extra space
// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.
// Examples :

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

const sortNegativeAndPositive = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input type. Only arrays are supported.");
  }

  const result = [...arr].sort((a, b) => {
    if (a < 0 && b >= 0) {
      return -1;
    } else if (a >= 0 && b < 0) {
      return 1;
    }

    return a - b;
  });

  return result;
};

const arr = [5, -2, 10, -8, 0, -1, 3];
console.log(sortNegativeAndPositive(arr));

// or
// function sortArr(arr){
//   return arr.sort();
// }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Union of two arrays
// Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.
// Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.

// Note : Elements are not necessarily distinct.
// Example 1:

// Input:
// 5 3
// 1 2 3 4 5
// 1 2 3
// Output:
// 5
// Explanation:
// 1, 2, 3, 4 and 5 are the
// elements which comes in the union set
// of both arrays. So count is 5.

const unionOfArr = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Invalid input type. Only arrays are supported.");
  }

  let result = arr1.concat(arr2);
  result = result.filter((el, index) => {
    return result.indexOf(el) === index;
  });

  return result.length;
};

console.log(unionOfArr([1, 2, 2, 2, 3, 4], [1, 2, 3, 12]));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Cyclically rotate an array by one
// Given an array, rotate the array by one position in clock-wise direction.

// Example 1:

// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4

const cyclicallyRotate = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input type. Only arrays are supported.");
  }

  const lastEl = arr.pop();
  arr.unshift(lastEl);
  return arr;
};

console.log(cyclicallyRotate([1, 2, 3, 4, 5]));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Kadane's Algorithm
// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which
// is a contiguous subarray.

function kadaneAlgorithm(arr) {
  let max_so_far = arr[0];
  let max_ending_here = arr[0];

  for (let i = 1; i < arr.length; i++) {
    max_ending_here = Math.max(arr[i], arr[i] + max_ending_here);
    max_so_far = Math.max(max_so_far, max_ending_here);
  }

  return max_so_far;
}

// Example usage:
const arr = [1, 2, 3, -2, 5];
const maxSum = kadaneAlgorithm(arr);
console.log(maxSum); // Output: 9

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Find the Duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.

const findDuplicates = (arr) => {
  arr.sort();
  const duplicates = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
};

const array = [1, 2, 3, 4, 2, 5, 3, 6, 4];
const duplicateElements = findDuplicates(array);
console.log(duplicateElements); // Output: [2, 3, 4]

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Best Time to Buy and Sell Stock
// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const maxProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};

maxProfit([7, 4, 2, 1, 3, 5, 6]);

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Count pairs with given sum
// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.

function getPairsCount(arr, n, k) {
  let count = 0;
  let left = 0;
  let right = n - 1;

  // Sort the array in non-decreasing order
  arr.sort((a, b) => a - b);

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === k) {
      count++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return count;
}

const arr = [1, 5, 7, 1];
const n = arr.length;
const k = 6;

const pairsCount = getPairsCount(arr, n, k);
console.log(pairsCount);


// // = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Common elements

// Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
// Note: can you take care of the duplicates without using any additional Data Structure?

// Example 1:

// Input:
// n1 = 6; A = {1, 5, 10, 20, 40, 80}
// n2 = 5; B = {6, 7, 20, 80, 100}
// n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
// Output: 20 80
// Explanation: 20 and 80 are the only
// common elements in A, B and C.

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const y = [0, 2, 24, 8, 76];
const z = [8, 9, 2];

const giveCommons = (arr1, arr2, arr3) => {
  let result = arr1.filter((el) => arr2.includes(el) && arr3.includes(el));
  return result;
};

console.log(giveCommons(x, y, z));

// // = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Factorials of large numbers
// Given an integer N, find its factorial. return a list of integers denoting the digits that make up the factorial of N.

// Example 1:
// Input: N = 5
// Output: 120
// Explanation : 5! = 1*2*3*4*5 = 120

// Example 2:
// Input: N = 10
// Output: 3628800
// Explanation :
// 10! = 1*2*3*4*5*6*7*8*9*10 = 3628800

const factorial = (N) => {
  let explanationRes = "";
  let res = 1;
  for (let i = 1; i <= N; i++) {
    explanationRes += (i === N ? `${i}` : `${i} * `);
    res *= i;
  }
  return `${explanationRes} = ${res}`;
};

console.log(factorial(5));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = =
