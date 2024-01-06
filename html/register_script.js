function register() {
    // Clear previous error and success messages
    clearMessages();

    // Get form values
    const username = document.getElementById('username').value.trim();
    const roleDropdown = document.getElementById("role").value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();


    // Validate inputs
    if (username === '') {
        displayError('usernameError', 'Username is required.');
        return;
    }

    if (roleDropdown === '') {
        displayError('roleError', 'Please select a role.');
        return;
    } 

    if (email === '' || !validateEmail(email)) {
        displayError('emailError', 'Enter a valid email address.');
        return;
    }

    if (mobile === '' || !/^[0-9]{10}$/.test(mobile)) {
        displayError('mobileError', 'Enter a valid 10-digit mobile number.');
        return;
    }

    if (password === '') {
        displayError('passwordError', 'Password is required.');
        return;
    }

    if (confirmPassword === '' || confirmPassword !== password) {
        displayError('confirmPasswordError', 'Passwords do not match.');
        return;
    }

    // If all validations pass, show success message
    clearMessages();
    document.getElementById('successMessage').style.display = 'block';
}

function clearForm() {
    // Clear all input fields and messages
    document.getElementById('registrationForm').reset();
    clearMessages();
}

function validateEmail(email) {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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