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

async function cargarUsuario() {
    let user;
    let number = Math.floor(Math.random() * 4);
    let mensaje = document.querySelector("#mensaje");
    switch (number) {
        case 0:
            user = "torvalds";
            break;
        case 1:
            user = "gaearon";
            break;
        case 2:
            user = "yyx990803";
            break;
        case 3:
            user = "tj";
            break;
    }
    let userLink = `https://api.github.com/users/${user}`;
    mensaje.textContent = "Cargando...";
    try {
        const response = await fetch(userLink);
        if (!response.ok) {
            throw new Error(`Estado de la respuesta: ${response.status}`);
        }
        const result = await response.json();
        let perfil = construirPerfil(result);
        renderizarPerfil(perfil);
        mostrarEtiquetas(habilidades);
        mensaje.textContent = "";
    } catch (error) {
        console.error(error.message);
        mensaje.textContent = "Error al cargar usuario";
    }
}

document.querySelector("#btn").addEventListener("click", cargarUsuario);