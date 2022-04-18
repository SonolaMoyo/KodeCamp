//Bubble Sort is a comparison-type sorting algorithm,
//it compares individual elements within the collection during runtime.
//It is the easier but less effective method of sorting array.

//bubbleSort function
function bubbleSort(inputArr) {
    let n = inputArr.length;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            // Comparing and swapping the elements
            if(inputArr[j] > inputArr[j+1]){
                let t = inputArr[j];
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = t;
            }
        }
    }
    return inputArr;
}

array1 = [234, 43, 55, 63, 5, 6, 235, 547];
array2 = [1, 4, 2, 5, -2, 3];
array3 = [52, 37, 63, 14, 17, 8, 6, 25];

console.log(bubbleSort(array1));
console.log(bubbleSort(array2));
console.log(bubbleSort(array3));

//Time Complexity: O(n*n) Quadratic Time
//It's simple algorithm has poor performance,
//in terms of speed compared to MergeSort and QuickSort since it 
//has to iterate through all element with all element.