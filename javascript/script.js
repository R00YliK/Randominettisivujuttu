//kerskaileva_ankka jumps to screen after 5 seconds
document.addEventListener("DOMContentLoaded", function () {

    var countdownTime = 5;
    var timerElement = document.getElementById("timer");
    var imageContainer = document.getElementById("image-container");

    function updateTimer() {
        countdownTime--;
        if (countdownTime <= 0) {
            clearInterval(timerInterval);
            imageContainer.classList.remove("hidden");
        }
    }
    var timerInterval = setInterval(updateTimer, 1000);
});


//Message if ananas was selected
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('form');
    var messageContainer = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var ananasCheckbox = document.getElementById("ananas");
        if (ananasCheckbox.checked) {
            messageContainer.textContent = "Pidätkö myös banaanista pizzan päällä? Kysyn tosissani.";
        }
    });
});


//alert if no checkboxes are checked
document.addEventListener("DOMContentLoaded", function () {
    var pizzaForm = document.getElementById("pizza-form");

    pizzaForm.addEventListener("submit", function (event) {
        var checkboxes = document.querySelectorAll('input[name="pizza"]');
        var isChecked = Array.from(checkboxes).some(function (checkbox) {
            
            return checkbox.checked;
        });
       
        if (!isChecked) {
            alert("Valitse ainakin yksi täyte");
            event.preventDefault();
        }
    });
});

//Print the toppings into a table
document.addEventListener("DOMContentLoaded", function () {
    var pizzaForm = document.getElementById("pizza-form");
    var tableContainer = document.getElementById("table-container");

    pizzaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var selectedToppings = [];

        var checkboxes = document.querySelectorAll('input[name="pizza"]:checked');


        checkboxes.forEach(function (checkbox) {
            selectedToppings.push(checkbox.value);
        });


        var table = document.createElement("table");
        table.id = "toppings-table";
        var headerRow = table.insertRow();
        var headerCell = headerRow.insertCell();
        headerCell.textContent = "Valitut täytteet:";

        selectedToppings.forEach(function (topping) {
            var row = table.insertRow();
            var cell = row.insertCell();
            cell.textContent = topping;
        });


        tableContainer.innerHTML = "";
        tableContainer.appendChild(table);
    });
});

// Show an alert when the button is clicked
document.addEventListener("DOMContentLoaded", function() {
    var alertButton = document.getElementById("alertButton");

    alertButton.addEventListener("click", function() {
        alert("Button Clicked!");
    });
});


  
const apiUrl2 = 'https://restcountries.com/v3.1/all';

function fetchCountryData() {
    fetch(apiUrl2)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const countryInfoContainer = document.getElementById('country-info');
            let countriesHTML = '';

            data.forEach(country => {
                countriesHTML += `<div>
                                    <h2>${country.name.common}</h2>
                                    <p>Capital: ${country.capital}</p>
                                    <p>Population: ${country.population}</p>
                                    <p>Region: ${country.region}</p>
                                  </div>`;
            });

            // Insert the HTML content into the countryInfoContainer
            countryInfoContainer.innerHTML = countriesHTML;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Call the fetchCountryData function to fetch and display country information
fetchCountryData();
