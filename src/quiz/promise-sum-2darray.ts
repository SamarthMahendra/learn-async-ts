



/**
 * An asynchronous function that sums all numbers in a 2D array concurrently.
 * It processes each row in parallel using Promise.all.
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array,
 * or resolves to 0 if the array is empty.
 */
function sum2DArrayConcurrent(arr: number[][]): Promise<number> {
    if (arr.length === 0) {
        return Promise.resolve(0);
    }

    // Create an array of promises, each summing a single row concurrently
    const rowPromises = arr.map((row, rowIndex) => {
        return new Promise<number>((resolve) => {
            console.log(`Summing row ${rowIndex}...`);
            const rowSum = row.reduce((acc, num) => {
                console.log(`Row ${rowIndex}: adding ${num}`);
                return acc + num;
            }, 0);
            resolve(rowSum);
        });
    });

    // Wait for all row sums to complete and then compute the total sum
    return Promise.all(rowPromises).then((rowSums) => {
        const totalSum = rowSums.reduce((acc, sum) => acc + sum, 0);
        console.log(`Total sum: ${totalSum}`);
        return totalSum;
    });
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
sum2DArrayConcurrent(array2D_1).then((sum) => console.log('Sum of array2D:', sum));
sum2DArrayConcurrent([]).then((sum) => console.log('Sum of empty array:', sum));
