// Helper function to randomize owl order on card click
export function shuffle(array) {

    const copyArray = [...array] // Create a shallow copy

    // Fisher–Yates Array Shuffle Algorithm (immutable)
    for (let i = copyArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = copyArray[i];
        copyArray[i] = copyArray[j];
        copyArray[j] = temp;
    }
    return copyArray
}
