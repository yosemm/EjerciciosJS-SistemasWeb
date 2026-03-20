let habilidades = ["JavaScript", "C#", "Python", "APIs", "R"];


function mostrarEtiquetas(habilidades) {
    habilidades.forEach(element => {
        let span = document.createElement("span");
        span.classList.add("etiqueta");
        span.textContent = element;
        let etiquetas = document.querySelector("#etiquetas");
        etiquetas.appendChild(span);
    });
}