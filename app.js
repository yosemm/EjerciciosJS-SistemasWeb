let habilidades = ["JavaScript", "C#", "Python", "APIs", "R"];

function mostrarEtiquetas(habilidades) {
    const etiquetas = document.querySelector("#etiquetas");
    etiquetas.innerHTML = "<b>Etiquetas:</b> ";
    habilidades.forEach(element => {
        let span = document.createElement("span");
        span.classList.add("etiqueta");
        span.textContent = element + " ";
        etiquetas.appendChild(span);
    });
}

function construirPerfil(datos) {
    let perfil = {
        perfilName: datos.name !== null ? datos.name : "Sin nombre",
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
    nombre.textContent = "Nombre: " + perfil.perfilName;
    usuario.textContent = "Usuario: " + perfil.usuario;
    email.textContent = "Email: " + perfil.email;
    ciudad.textContent = "Ciudad: " + perfil.ciudad;
    avatar.setAttribute("src", perfil.avatar);
}

async function cargarUsuario() {
    let user;
    let number = Math.floor(Math.random() * 4);
    let mensaje = document.querySelector("#mensaje");
    if (!mensaje) {
        mensaje = document.createElement("p");
        mensaje.id = "mensaje";
        document.body.appendChild(mensaje);
    }
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
        if (!document.querySelector("#tarjeta")) {
            crearTarjetaPerfil();
        }
        let perfil = construirPerfil(result);
        renderizarPerfil(perfil);
        mostrarEtiquetas(habilidades);
        mensaje.textContent = "";
    } catch (error) {
        console.error(error.message);
        mensaje.textContent = "Error al cargar usuario";
    }
}

function crearTarjetaPerfil() {
    // Tarjeta de perfil
    const tarjeta = document.createElement('div');
    tarjeta.id = "tarjeta";
    const etiquetas = document.createElement('p');
    etiquetas.id = "etiquetas";
    tarjeta.appendChild(etiquetas);

    // Atributos tipo p
    let atributos = ['nombre', 'usuario', 'email', 'ciudad', 'avatar'];
    let listaAtributos = document.createElement('ul');
    atributos.forEach(atributo => {
        if (atributo == 'avatar') {
            let avatar = document.createElement('img');
            avatar.id = `${atributo}`;
            Object.assign(avatar.style, {
                width: "80%",
                padding: "10px",
                borderRadius: "50%",
            });
            listaAtributos.appendChild(avatar);
            return
        }
        let parrafoAtributo = document.createElement('li');
        parrafoAtributo.id = `${atributo}`;
        listaAtributos.appendChild(parrafoAtributo);
    })

    tarjeta.appendChild(listaAtributos);
    // Agregar al body
    document.body.appendChild(tarjeta);

    // Agregar estilos
    Object.assign(tarjeta.style, {
        maxWidth: "420px",
        margin: "0 auto",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px DimGray",
        background: "WhiteSmoke",
        fontFamily: "Arial, sans-serif"
    });
    Object.assign(etiquetas.style, {
        textAlign: "center",
        fontFamily: "monospace"
    });
}

function crearBoton() {
    const btn = document.createElement('button');
    btn.id = "btn";
    btn.addEventListener("click", cargarUsuario);
    btn.textContent = "Ver un perfil";
    document.body.appendChild(btn);
}

crearBoton();