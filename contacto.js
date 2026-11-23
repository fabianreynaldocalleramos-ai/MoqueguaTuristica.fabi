const formulario =
    document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;
    let respuesta = document.getElementById("respuesta");
    if (nombre === "" || correo === "" || mensaje === "") {
        respuesta.textContent = "Completa todos los campos";
    } else {
        respuesta.textContent =
        "Gracias " + nombre + ", tu mensaje fue registrado.";
        formulario.reset();
    }
});