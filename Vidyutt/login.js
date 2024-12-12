document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Mock credentials
    const MASTER_USERNAME = "admin";
    const MASTER_PASSWORD = "password123";

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (username === MASTER_USERNAME && password === MASTER_PASSWORD) {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
