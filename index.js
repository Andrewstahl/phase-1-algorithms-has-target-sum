function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; ++i) {
    let currentElement = array[i];
    debugger;
    if (array.includes(target - currentElement)) {
      // Check to see if target - current element
      // is equal to the current element. If that's
      // the case, we need to see if the element is
      // in the array more than once  
      if (target - currentElement !== currentElement) {
        return true;
      } else {
        // if the first index and last index of a particular element are the same,
        // that means that the element doesn't exist twice in the array, and therefore
        // we'll need to mark false.
        if (array.indexOf(currentElement) === array.lastIndexOf(currentElement)) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
  // Default case
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The Big O time complexity for this problem would be O(n), since it
  would increase in time spent running through the algorithm if you have
  a longer input array 
*/

/* 
  Add your pseudocode here
  iterate through all elements in array
    
    if target minus current element exists in the array:
      if target minus current element is equal current element:
        check to see if the current element is in the array twice
        if it is:
          return true
      return true
    return false
*/

/*
  Add written explanation of your solution here
  For this code, we're going to use the target to find
  and the current element to find the missing sum pair.
  For each element, we're going to subtract it from the 
  target. If the resulting difference is found as an element
  in the array, we've got a positive match. Now, if the 
  current element is half of the target, that means that
  we have to see if the current element exists twice in the 
  array. If it doesn't, we'll return false. If the element is
  not half of the target or if it is half of the target and 
  we found another of the same element in the array, we'll 
  return true.
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
  console.log("=>", hasTargetSum([1, 2, 0, 2, 5], 4));

}

module.exports = hasTargetSum;
