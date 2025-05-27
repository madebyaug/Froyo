// 1. Have you created an HTML file to live serve?
// Yes.

// 2. Is the HTML file connected to a JS file?
// Yes.

// 3.
// This stores the flavors in an array
const UIfroyoFlavors = [];
//  This function creates the prompt question
function froyoPrompt() {
  const froyoQuestion = prompt("Enter Froyo Flavors Here");
  // const froyoFlavors = UIfroyoFlavors.split(",").forEach((flavor) => {});
  // I found split but we didn't go over this in class to perhaps there‘s another way.

  // Push Question's data into an array "froyoFlavors"
  froyoFlavors.push(froyoQuestion);
}

froyoPrompt();
console.log(`Your flavor(s) are: ${froyoFlavors}`);

// 5.
// create a container for "FlavorTotal"
//  create a "FlavorLenght" ForLoop to count each flavor
//  Add "FlavorLenght" to "FlavorTotal"
const froyoObjects = froyoFlavors.map((flavor, inx) => {
  return { Index: inx, Flavors: flavor };
});

console.table(froyoObjects);

// 5. Can you build an object to track which flavors you have counted so far?
// TBD

// 6. How should that object be updated as you iterate through the array of flavors?
// TBD

// 7. Are you using functions to organize your code?
// Yes.

// 8. Do your variables and functions have meaningful names?
// Probably Not. Need more practice with naming conventions.

// 9. Is your code formatted?
// Yes.
