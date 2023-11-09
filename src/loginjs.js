import "./login"

function submitForm(event) {
  // Prevent the form from submitting automatically
  event.preventDefault();

  // Get the username and password inputs
  var usernameInput = document.getElementById("admin");
  var passwordInput = document.getElementById("password");

  // Check if the username and password are correct
  if (usernameInput.value === "admin" && passwordInput.value === "admin") {
    // If the username and password are correct, redirect to index.html
    window.location.href = "Home.js";
  } else {
    // If the username and password are incorrect, display an error message
    alert("Incorrect username or password.");
  }
}

export default submitForm;