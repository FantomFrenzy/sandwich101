// index.js - purpose and description here
// Author: Your Name
// Date:

// document.getElementById('submitButton').addEventListener('click', function () {
//   // Get selected values
//   const bread = document.getElementById('bread').value;
//   const protein = document.getElementById('protein').value;
//   const cheese = document.getElementById('cheese').value;
//   const veggies = document.getElementById('veggies').value;

//   // Construct a URL path based on the selected options
//   const sandwichUrl = `urlflex/sandwich.html?bread=${bread}&protein=${protein}&cheese=${cheese}&veggies=${veggies}`;
//   // Redirect to the URL
//   console.log('Redirecting to:', sandwichUrl);
//   window.location.href = sandwichUrl;
// });

// This code helps reduce our index.html down to prevent crowding  
// Please test again if it works. If this doesn't work, uncomment 
// the original and recomment this one for testing.
// Define the options for each dropdown
const options = {
  bread: ["Sourdough", "Wheat", "Rye"],
  protein: ["Turkey", "Ham", "Roast Beef"],
  cheese: ["Cheddar", "Provolone", "American", "No Cheese"],
  veggies: ["Lettuce", "Tomato", "Pickles", "No Veggies"]
};

// Function to populate each dropdown with options
function populateDropdown(id, items) {
  const select = document.getElementById(id);
  items.forEach(item => {
    const option = document.createElement("option");
    option.value = item.toLowerCase().replace(" ", "_");
    option.textContent = item;
    select.appendChild(option);
  });
}

// Populate each dropdown
Object.keys(options).forEach(key => populateDropdown(key, options[key]));

// Add event listener for the button
document.getElementById('submitButton').addEventListener('click', function () {
    // Get selected values
    const bread = document.getElementById('bread').value;
    const protein = document.getElementById('protein').value;
    const cheese = document.getElementById('cheese').value;
    const veggies = document.getElementById('veggies').value;
    // Construct a URL path based on the selected options
    const sandwichUrl = `urlflex/sandwich.html?bread=${bread}&protein=${protein}&cheese=${cheese}&veggies=${veggies}`;
    // Redirect to the URL
    console.log('Redirecting to:', sandwichUrl);
    window.location.href = sandwichUrl;
});
