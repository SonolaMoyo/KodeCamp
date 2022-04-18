// Merge sort uses the concept of divide-and-conquer to sort
// the given list of elements. It breaks down the problem into smaller 
// subproblems(halves) until they become simple enough to solve directly.


//function to merge two sorted subarrays into a sorted array.
function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements
    return [...arr, ...left, ...right]
}


//the MergeSort function
function mergeSort(array) {
    //a recursive pattern that splits the to-be-sorted array into 
    //single element array, before merged
    const half = array.length / 2

    if (array.length < 2) {
        return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}

array1 = [234, 43, 55, 63, 5, 6, 235, 547];
array2 = [1, 4, 2, 5, -2, 3];
array3 = [52, 37, 63, 14, 17, 8, 6, 25];

console.log(mergeSort(array1));
console.log(mergeSort(array2));
console.log(mergeSort(array3));

//Time Complexity: O(n log n) Log-linear Time 
//Its efficiency makes it widely used.
//Also, Unlike Quick Sort, Merge Sort is not an in-place
//sorting algorithm, meaning it takes extra space other 
//than the input array.