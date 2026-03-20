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

function construirPerfil(datos) {
    let perfil = {
        perfilName: datos.name,
        usuario: datos.login,
        email: datos.email !== null ? datos.email : "No disponible",
        ciudad: datos.location !== null ? datos.location : "Sin ubicación",
        avatar: datos.avatar_url
    };

    return perfil;
}

function renderizarPerfil(perfil) {
    // Elementos del DOM
    let nombre = document.querySelector("#nombre");
    let usuario = document.querySelector("#usuario");
    let email = document.querySelector("#email");
    let ciudad = document.querySelector("#ciudad");
    let avatar = document.querySelector("#avatar");
    // Actualizarlos con valores de perfil
    nombre.textContent = perfil.perfilName;
    usuario.textContent = perfil.usuario;
    email.textContent = perfil.email;
    ciudad.textContent = perfil.ciudad;
    avatar.setAttribute("src", perfil.avatar);
}
