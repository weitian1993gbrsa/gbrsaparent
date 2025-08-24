const apiUrl = "https://script.google.com/macros/s/AKfycbw0DYAFtQwN_LcWydmaOF40IdjLFznmqQPA2frVT6_HEin-3NJBenWFtagEfAh0v45uPQ/exec";

async function login() {
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${apiUrl}?userId=${userId}&password=${password}`);
    const data = await res.json();

    if (data.status === "success") {
      window.location.href = data.driveLink;
    } else {
      document.getElementById("message").innerText = data.message;
    }
  } catch (error) {
    document.getElementById("message").innerText = "Error connecting to server.";
  }
}
