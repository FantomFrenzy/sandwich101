// index.js - Sandwich 101
// Author: Group 14
// Date: 12/09/24


// Define the options for each dropdown
const options = {
  bread: ["Ciabatta","Sourdough", "Wheat", "Rye"],
  protein: ["Egg", "Turkey", "Ham", "Roast Beef"],
  cheese: ["Swiss", "Cheddar", "Provolone", "American"],
  veggies: ["Onion", "Lettuce", "Tomato", "Pickles"]
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

// Show the pop-up when all fields are empty
function showPopup(popupId) {
  document.getElementById('popup-check').style.display = 'block';
}

// Closes the pop-up
// Function to close the popup
function closePopup(popupId) {
  document.getElementById('popup-check').style.display = 'none';
}

// Add event listener for the button
document.getElementById('submitButton').addEventListener('click', function () {
    // Get selected values
    const bread = document.getElementById('bread').value;
    const protein = document.getElementById('protein').value;
    const cheese = document.getElementById('cheese').value;
    const veggies = document.getElementById('veggies').value;
    
    // Construct a URL path based on the selected options
    const sandwichUrl = `sandwichpage/sandwich.html?bread=${bread}&protein=${protein}&cheese=${cheese}&veggies=${veggies}`;
    // Redirect to the URL
    console.log('Redirecting to:', sandwichUrl);
    window.location.href = sandwichUrl;
    // Check if all option fields are empty
    
    if (!bread && !protein && !cheese && !veggies) {
      showPopup('popup-check'); // Show this popup if all are empty
      return;
    }
    
});

    const aboutUsButton = document.querySelector('.about-us-btn');
    aboutUsButton.addEventListener('click', () => {
    window.location.href = 'about-us.html'; 
});

