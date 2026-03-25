const requestOptions = {
    method: "GET",
    redirect: "follow"
};

const divTexto = document.querySelector("#informacion");

const requestsPokemon = (() => {
    // Boton1
    const cargarListaPokemones = () => {
        fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
        clearText();
    };
    // Boton2
    const detallarPokemonPorID = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/132", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
        clearText();
    };
    // Boton3
    const busquedaPorNombre = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
        clearText();
    };
    // Boton4
    const obtenerPrimerosVeinte = () => {
        fetch("https://pokeapi.co/api/v2/type", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
        clearText();
    };
    // Boton5
    const obtenerSiguientesVeinte = () => {
        fetch("https://pokeapi.co/api/v2/type/?limit=20&offset=20", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
        clearText();
    };
    // Boton6
    const obtenerSiguientesPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
        clearText();
    };

    return { cargarListaPokemones, detallarPokemonPorID, busquedaPorNombre, obtenerPrimerosVeinte, obtenerSiguientesVeinte, obtenerSiguientesPokemon };
}
)();

function addButtonListeners() {
    // Boton de Cargar Lista de Pokemones
    const button1 = document.querySelector("#button-first-list");
    button1.addEventListener("click", requestsPokemon.cargarListaPokemones);

    // Boton de Detallar Pokemon por ID
    const button2 = document.querySelector("#button-id");
    button2.addEventListener("click", requestsPokemon.detallarPokemonPorID);

    // Boton de Buscar Pokemon por Nombre
    const button3 = document.querySelector("#button-name");
    button2.addEventListener("click", requestsPokemon.busquedaPorNombre);

    // Boton de Obtener primeros 20 tipos
    const button4 = document.querySelector("#button-first-type");
    button2.addEventListener("click", requestsPokemon.obtenerPrimerosVeinte);

    // Boton de obtener siguientes 20 tipos
    const button5 = document.querySelector("#button-second-type");
    button2.addEventListener("click", requestsPokemon.obtenerSiguientesVeinte);

    // Boton de obtener siguientes 20 pokemones
    const button6 = document.querySelector("#button-second-list");
    button2.addEventListener("click", requestsPokemon.obtenerSiguientesPokemon);
}

function clearText() {
    divTexto.textContent = "";
}

function addText(type) {
    switch (type) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
    }
}
addButtonListeners();