document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "1234") {
        alert("Inicio de sesión exitoso");
        window.location.href = "home.html"; // Redirecciona a otra página
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
});
