// index.js - Sandwich 101
// Author: Group 14
// Date: 12/09/24

//NutrientAPI variables
var urlParams = new URLSearchParams(window.location.search);
        var nutrientbread = document.getElementById('bread').textContent = `Bread: ${urlParams.get('bread')}`;
        var nutrientprotein = document.getElementById('protein').textContent = `Protein: ${urlParams.get('protein')}`;
        var nutrientcheese = document.getElementById('cheese').textContent = `Cheese: ${urlParams.get('cheese')}`;
        var nutrientveggies = document.getElementById('veggies').textContent = `Veggies: ${urlParams.get('veggies')}`;



// Parse the query string from the URL
const queryString = window.location.search;
const sandwichparam = new URLSearchParams(queryString);


// Get individual parameters
const bread = sandwichparam.get('bread');
const protein = sandwichparam.get('protein');
const cheese = sandwichparam.get('cheese');
const veggies = sandwichparam.get('veggies');

// Update the page content with the sandwich details
document.getElementById('bread').textContent = `Bread: ${bread}`;
document.getElementById('protein').textContent = `Protein: ${protein}`;
document.getElementById('cheese').textContent = `Cheese: ${cheese}`;
document.getElementById('veggies').textContent = `Veggies: ${veggies}`;


 
const container = document.getElementById("data-container");

async function nutritionapi(params) {
        const res = await fetch("https://api.edamam.com/api/nutrition-details?app_id=89c07953&app_key=c2ac8faae07d5b4f9885264d4ebbee4b", {
                        "headers": {
                        "content-type": "application/json",
                        },
                        "body": JSON.stringify({"ingr":[`2 slices ${nutrientbread}`,`1 slice ${nutrientprotein}`, `1 slice ${nutrientcheese}`, `1 ounce ${nutrientveggies}`]}),
                        "method": "POST",
                        "mode": "cors",
                });
        
        
        const nutrientdata = await res.json();
        console.log(nutrientdata)
        return nutrientdata; // Return the JSON data
}

//display information
async function displayNutritionData() {
        const urlParams = new URLSearchParams(window.location.search);

                const nutbread = urlParams.get("bread");
                const nutprotein = urlParams.get("protein");
                const nutcheese = urlParams.get("cheese");
                const nutveggies = urlParams.get("veggies");
    
        try {
            const data = await nutritionapi(nutbread, nutprotein, nutcheese, nutveggies);
            
            // Find the HTML element where you want to display data
            const nutritionList = document.getElementById("nutrition-list");
    
            // Clear existing content (if any)
            nutritionList.innerHTML = "";
    
            // Populate the list with nutrition data
            for (const [key, value] of Object.entries(data.totalNutrients)) {
                const listItem = document.createElement("li");
                listItem.textContent = `${key}: ${value.quantity} ${value.unit}`;
                nutritionList.appendChild(listItem);
            }
        } catch (error) {
            console.error("Error fetching nutrition data:", error);
        }
    }
    
// Call the display function when the page loads or on some event
displayNutritionData();

nutritionapi()


//Header dynamic
const headerText = `Your ${bread} ${protein} sandwich`;
document.getElementById('sandwich-header').textContent = headerText;