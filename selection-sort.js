

function selectionSort(arr) {

  // Copy the original array
  let unsorted = [...arr];

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (unsorted.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    let minIdx = 0;
    // Find the index of the minimum value in the unsorted half
    for (let i = 0; i < unsorted.length; i++){
      let currentMin = unsorted[minIdx];
      let compareVal = unsorted[i];

      if (currentMin > compareVal) minIdx = i;
    }

    // Save and remove the value at the min index
    let minValue = unsorted.splice(minIdx, 1);
    // Add the min value to the end of the sorted array
    sorted.push(...minValue);
  }
  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    let minIdx = divider;
    // Find the index of the minimum value in the unsorted half
    for (let i = divider; i < arr.length; i++){
      let currentMin = arr[minIdx];
      let compareVal = arr[i];
      if (currentMin > compareVal) minIdx = i;
    }
    // Save the min value
    let minValue = arr[minIdx];
    // Shift every unsorted value to the left of the min value to the right by 1
    for (let j = minIdx; j > divider; j--) {
      arr[j] = arr[j - 1];
    }
    // Put the min value at the divider
    arr[divider] = minValue;
    // Increment the divider and repeat
    divider++;
  }
}


module.exports = [selectionSort, selectionSortInPlace];
