// index.js - purpose and description here
// Author: Your Name
// Date:

const urlParams = new URLSearchParams(window.location.search);

        document.getElementById('bread').textContent = `Bread: ${urlParams.get('bread')}`;
        document.getElementById('protein').textContent = `Protein: ${urlParams.get('protein')}`;
        document.getElementById('cheese').textContent = `Cheese: ${urlParams.get('cheese')}`;
        document.getElementById('veggies').textContent = `Veggies: ${urlParams.get('veggies')}`;