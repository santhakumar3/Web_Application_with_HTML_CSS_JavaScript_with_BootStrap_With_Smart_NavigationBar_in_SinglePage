function loadPage(page) {
    // Use fetch to load the HTML content of the selected page
    fetch(page)
        .then(response => response.text())
        .then(html => {
            // Update the main content with the loaded HTML
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Load the home page by default
loadPage('login.html');