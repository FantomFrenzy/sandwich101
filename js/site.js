// index.js - purpose and description here
// Author: Your Name
// Date:

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
