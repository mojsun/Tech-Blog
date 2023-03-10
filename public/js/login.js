// Login request
const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/"); // When successful, load the homepage
    } else {
      alert("Failed to log in."); // When unsuccessful, show alert
    }
  }
};

// Event listener
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
