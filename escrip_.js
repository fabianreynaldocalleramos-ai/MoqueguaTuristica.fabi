function activarBoton(idBoton, idInformacion) {
    const boton = document.getElementById(idBoton);
    const informacion = document.getElementById(idInformacion);
    
    boton.addEventListener("click", function(evento) {
        if (informacion.hidden) {
            informacion.hidden = false;
            boton.textContent = "Ver menos";
        } else {
            informacion.hidden = true;
            boton.textContent = "Ver más";
        }
    });
}

activarBoton("verTorata","infoTorata");
activarBoton("verSamegua", "infoSamegua");
activarBoton("verCataratas", "infoCataratas")
activarBoton("verCatedral", "infoCatedral")
activarBoton("verCerro", "infoCerro")
activarBoton("verTinajas", "infoTinajas")
activarBoton("verPlaza", "infoPlaza")
activarBoton("verMirador", "infoMirador")
activarBoton("verMuseo", "infoMuseo")