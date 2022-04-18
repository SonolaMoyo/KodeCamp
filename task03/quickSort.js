// Quick Sort rearranges the elements by repeatedly partitioning the left and 
//right side of the array using a selected pivot


//the partition function
function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

//the main quickSort function algorithm
function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

array1 = [234, 43, 55, 63, 5, 6, 235, 547];
array2 = [1, 4, 2, 5, -2, 3];
array3 = [52, 37, 63, 14, 17, 8, 6, 25];

quickSort(array1, 0, array1.length - 1);
quickSort(array2, 0, array2.length - 1);
quickSort(array3, 0, array3.length - 1);

console.log(array1);
console.log(array2);
console.log(array3);

//Time Complexity: O(n log n) Log-linear Time 
//Its efficiency makes it widely used. 
//Also, Quicksort doesn't take any extra space 
//(excluding the space reserved for recursive calls)
//i.e in-place algorithm