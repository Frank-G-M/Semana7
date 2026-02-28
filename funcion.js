    let inicioActual = null;

function iniciarJornada() {
    inicioActual = new Date();

    document.getElementById("fechaInicio").innerText =
        "Fecha: " + inicioActual.toLocaleDateString();

    document.getElementById("horaInicio").innerText =
        "Hora de inicio: " + inicioActual.toLocaleTimeString();

    document.getElementById("panelActivo").style.display = "flex";
}

function cerrarJornada() {
    const cierre = new Date();
    const historial = document.getElementById("historial");
    const item = document.createElement("li");

    const fecha = document.createElement("span");
    fecha.innerText = inicioActual.toLocaleDateString();

    const inicio = document.createElement("span");
    inicio.innerText = inicioActual.toLocaleTimeString();

    const fin = document.createElement("span");
    fin.innerText = cierre.toLocaleTimeString();

    item.appendChild(fecha);
    item.appendChild(inicio);
    item.appendChild(fin);

    historial.appendChild(item);

    document.getElementById("panelActivo").style.display = "none";
}