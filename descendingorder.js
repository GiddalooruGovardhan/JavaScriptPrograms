// Function to perform descending order sorting
function descendingOrderSort(a, b) {
    return b - a;
}

// Example array
const originalArray = [5, 2, 9, 1, 5, 6];

// Perform descending order sorting
const sortedArray = originalArray.sort(descendingOrderSort);

// Display the result
console.log("Original Array:", originalArray);
console.log("Sorted Array (Descending Order):", sortedArray);
