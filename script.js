// 1. Have you created an HTML file to live serve?
// Yes.

// 2. Is the HTML file connected to a JS file?
// Yes.

// 3. Can you prompt the user for froyo flavors and store their input? Yes.
// 4. Can you parse the user input into an array of froyo flavors? Yes.
// 5. Can you build an object to track which flavors you have counted so far? Yes.

// This stores the flavors in an array
const userFroyoFlavors = [];
//  This function creates the prompt and split the data via comma
function froyoQuestion() {
  const froyoPrompt = prompt("Enter Froyo Flavors Here");
  return froyoPrompt.split(",");
}
// This stores the split arry and removes the space via trim
const splitFroyoArry = froyoQuestion();
const mapFroyoArry = splitFroyoArry.map((flavor) => flavor.trim());

// This push this the trim arry to a container and returns the listed flavors
userFroyoFlavors.push(...mapFroyoArry);
console.log(userFroyoFlavors);

// 6. How should that object be updated as you iterate through the array of flavors?
// TBD

// 7. Are you using functions to organize your code?
// Yes.

// 8. Do your variables and functions have meaningful names?
// Probably Not. Need more practice with naming conventions.

// 9. Is your code formatted?
// Yes.
