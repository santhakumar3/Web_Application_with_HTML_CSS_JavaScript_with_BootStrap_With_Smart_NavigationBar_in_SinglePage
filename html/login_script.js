function login() {
    // Clear previous error messages
    clearMessages();

    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate email format
    if (!validateEmail(email)) {
        displayError('emailError', 'Enter a valid email address.');
        return;
    }

    // Validate password
    if (password.length < 6) {
        displayError('passwordError', 'Password must be at least 6 characters.');
        return;
    }

    console.log(email.toLowerCase);
    console.log(password.toLowerCase);

    if (email === 'adminpanel@gmail.com' && password === 'adminpanel') {

    window.location.href = '../html/index_admin.html';
    // Successful login, you can redirect to another page or perform other actions
    alert('Login successful!');
    }else{
        alert('Invalid Credentials....');
    }
    
}

function cancel() {
    // Clear form fields and messages
    // document.getElementById('loginForm').reset();
    // clearMessages();

    alert('Cancel...');
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
    // Clear all error messages
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.innerText = '');
}