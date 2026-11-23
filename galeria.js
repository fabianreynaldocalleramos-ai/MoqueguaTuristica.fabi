const botones = document.querySelectorAll(".categorias button");
const tarjetas = document.querySelectorAll(".tarjeta");

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const filtro = boton.dataset.filtro;

        tarjetas.forEach(function(tarjeta) {
            if (
                filtro === "todos" ||
                tarjeta.dataset.categoria === filtro
            ) {
                tarjeta.style.display = "";
            } else {
                tarjeta.style.display = "none";
            }
        });
        // Actualizar el botón seleccionado
        botones.forEach(function(b) {
            b.classList.remove("seleccionado");
        });

        boton.classList.add("seleccionado");
    });
});


