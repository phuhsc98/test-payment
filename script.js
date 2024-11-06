document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const messageElement = document.getElementById("message");

  if (params.has("p")) {
    // Handle error
    const p = params.get("p");

    window.location.replace("http://localhost:3000?p=" + p);
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
