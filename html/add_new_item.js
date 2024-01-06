function additem() {
    // Clear previous error and success messages
    clearMessages();

    // Get form values
    const itemname = document.getElementById('itemname').value.trim();
    const itemcount = document.getElementById('itemcount').value.trim();
    const itemprice = document.getElementById('itemprice').value.trim();
   
    // Validate inputs
    if (itemname === '') {
        displayError('itemnameError', 'Item Name is required.');
        return;
    }

    if (itemcount === '') {
        displayError('itemcountError', 'Item Count is required.');
        return;
    }

    if (itemprice === '') {
        displayError('itempriceError', 'Item Price is required.');
        return;
    }

  

    // If all validations pass, show success message
    clearMessages();
    document.getElementById('successMessage').style.display = 'block';
}

function clearForm() {
    // Clear all input fields and messages
    document.getElementById('addItemForm').reset();
    clearMessages();
}

function displayError(id, message) {
    // Display error message in red
    document.getElementById(id).innerText = message;
}

function clearMessages() {
    // Clear all error and success messages
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.innerText = '');

    document.getElementById('successMessage').style.display = 'none';
}