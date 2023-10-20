function customSortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                // Swap elements if they are out of order
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// Example usage:
let numbers = [5, 2, 9, 1, 5, 6];
customSortDescending(numbers);
console.log(numbers);
