document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const messageElement = document.getElementById("message");

  if (params.has("redirect_uri")) {
    // Handle error
    const redirect_uri = params.get("redirect_uri");
    window.location.replace(redirect_uri);
  } else if (params.has("p")) {
    window.location.replace("http://localhost:3000?p=" + p);
  } else {
    messageElement.textContent = "No code or error received.";
  }
});
//
