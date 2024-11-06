document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const messageElement = document.getElementById("message");

  if (params.has("error")) {
    // Handle error
    const error = params.get("error");
    messageElement.textContent = `Error: ${error}`;
    messageElement.style.color = "red";
  } else if (params.has("code")) {
    // Process the authorization code
    const code = params.get("code");
    messageElement.textContent = `Authorization code received: ${code}`;
    messageElement.style.color = "green";

    // You might want to send this code to your server for further processing
    // fetch('/process-code', { method: 'POST', body: JSON.stringify({ code }) })
  } else {
    messageElement.textContent = "No code or error received.";
  }
});
