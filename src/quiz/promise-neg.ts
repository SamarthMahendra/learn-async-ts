



/**
 * Asynchronously logs any row from a 2D array that contains at least one negative number.
 * Each row is processed concurrently using Promise.all.
 *
 * @param arr - A 2D array of integers.
 * @returns A promise that resolves when all rows have been processed.
 */
function logRowsWithNegatives(arr: number[][]): Promise<void> {
    if (arr.length === 0) {
        console.log('Array is empty.');
        return Promise.resolve();
    }

    // Create an array of promises, each checking a row for negatives
    const rowPromises = arr.map((row, rowIndex) => {
        return new Promise<void>((resolve) => {
            console.log(`Checking row ${rowIndex}...`);
            // Check if the row contains at least one negative number
            const hasNegative = row.some(num => num < 0);
            if (hasNegative) {
                console.log(`Row ${rowIndex} with negatives:`, row);
            }
            resolve();
        });
    });

    // Wait for all row checks to complete
    return Promise.all(rowPromises).then(() => {
        console.log('Finished processing all rows.');
    });
}

// Example usage:
const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

logRowsWithNegatives(array2D_3).then(() => {
    console.log('Done checking rows for negatives.');
});
