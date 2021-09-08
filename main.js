let expenseContainer = document.getElementById('expenseContainer');
let userInput = document.getElementById('userInput');
let addExpenseButton = document.getElementById('addExpense');

addExpenseButton.addEventListener('click', function(){
    var varElement = document.createElement('p');
    varElement.classList.add('paragraph-styling');
    varElement.innerText = userInput.value;
    // retrieves the user input value 
    expenseContainer.appendChild(varElement);
    // appends the element to the end of the stack
    userInput.value = "";
    // sets the user input value back to an empty string

    varElement.addEventListener('click', function(){
        // removes the element from the list upon a single click
        expenseContainer.removeChild(varElement);
    })
})


