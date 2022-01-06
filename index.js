function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const firstNumber = array[i];
    const secondNumber = target - firstNumber;
    if (array.includes(secondNumber, i + 1)) {
      return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  Iterate through the array, keeping track of index position.
  On each interation:
  Store the value of the array at the index position.
  Subtract the extracted value from the target sum.
  Check to see if any remaining numbers in the array match the subtracted result.
  If so, return true; otherwise continue iteration.
  Return false if no matches are found during iteration.
*/

/*
  Add written explanation of your solution here
  Create a function to determine whether any two numbers in a given array will add up to a separate given sum.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([7, 81, -14, 8, 3, -26], -23));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([0, -3, 4, 7, -1], 0));
}

module.exports = hasTargetSum;
