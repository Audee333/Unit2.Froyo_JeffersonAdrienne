// Prompt the user for froyo flavors, separated by commas.
const userInputString = prompt("Enter your froyo flavors separated by commas (e.g., vanilla, chocolate, strawberry, vanilla)");

// Convert the input string into an array.
const flavorStringArray = userInputString.split(",");

// Function to count the occurrences of each flavor.
function countFlavors(flavors) {
    const flavorCount = {}; // Object to store flavor counts.

    for (let flavor of flavors) {
        let trimmedFlavor = flavor.trim().toLowerCase(); // Trim spaces and normalize case.
        if (flavorCount[trimmedFlavor]) {
            flavorCount[trimmedFlavor] += 1;
        } else {
            flavorCount[trimmedFlavor] = 1;
        }
    }
    return flavorCount;
}

// Get the count of flavors and store the result.
const flavorSummary = countFlavors(flavorArray);

// Display the summary in the console.
console.log("Your Froyo Order Summary:");
console.table(flavorSummary);
