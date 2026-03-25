const requestOptions = {
    method: "GET",
    redirect: "follow"
};

const divStatus = document.querySelector("#status");
const divTexto = document.querySelector("#informacion");

const requestsPokemon = (() => {
    // Boton1
    const cargarListaPokemones = () => {
        divStatus.textContent = "Loading...";
        fetch("https://pokeapi.co/api/v2/pokemon", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                divStatus.textContent = "";
                addText(1, result);
                console.log(result);
            })
            .catch((error) => {
                divStatus.textContent = error;
                console.error(error);
            });
    };
    // Boton2
    const detallarPokemonPorID = () => {
        divStatus.textContent = "Loading...";
        fetch("https://pokeapi.co/api/v2/pokemon/132", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                divStatus.textContent = "";
                addText(2, result);
                console.log(result);
            })
            .catch((error) => {
                divStatus.textContent = error;
                console.error(error);
            });
    };
    // Boton3
    const busquedaPorNombre = () => {
        divStatus.textContent = "Loading...";
        let pokemonName = prompt("Ingresa el nombre de un Pokemon:", "Piplup");
        if (pokemonName && pokemonName.trim() !== "") {
            pokemonName = pokemonName.trim().toLowerCase();
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Pokemon "${pokemonName}" no encontrado.`);
                    }
                    return response.json();
                })
                .then((result) => {
                    divStatus.textContent = "";
                    addText(3, result);
                    console.log(result);
                })
                .catch((error) => {
                    divStatus.textContent = error;
                    console.error(error);
                });
        } else {
            divStatus.textContent = "";
        }
    };
    // Boton4
    const obtenerPrimerosVeinte = () => {
        divStatus.textContent = "Loading...";
        fetch("https://pokeapi.co/api/v2/ability", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                divStatus.textContent = "";
                addText(4, result);
                console.log(result);
            })
            .catch((error) => {
                divStatus.textContent = error;
                console.error(error);
            });
    };
    // Boton5
    const obtenerSiguientesVeinte = () => {
        divStatus.textContent = "Loading...";
        fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                divStatus.textContent = "";
                addText(5, result);
                console.log(result);
            })
            .catch((error) => {
                divStatus.textContent = error;
                console.error(error);
            });
    };
    // Boton6
    const obtenerSiguientesPokemon = () => {
        divStatus.textContent = "Loading...";
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                divStatus.textContent = "";
                addText(6, result);
                console.log(result);
            })
            .catch((error) => {
                divStatus.textContent = error;
                console.error(error);
            });
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
    button3.addEventListener("click", requestsPokemon.busquedaPorNombre);

    // Boton de Obtener primeros 20 tipos
    const button4 = document.querySelector("#button-first-type");
    button4.addEventListener("click", requestsPokemon.obtenerPrimerosVeinte);

    // Boton de obtener siguientes 20 tipos
    const button5 = document.querySelector("#button-second-type");
    button5.addEventListener("click", requestsPokemon.obtenerSiguientesVeinte);

    // Boton de obtener siguientes 20 pokemones
    const button6 = document.querySelector("#button-second-list");
    button6.addEventListener("click", requestsPokemon.obtenerSiguientesPokemon);

    // Boton de limpiar texto
    const button7 = document.querySelector("#clean-button");
    button7.addEventListener("click", clearText);
}

function clearText() {
    divTexto.innerHTML = "";
}

function createSection(title, info) {
    const titleList = document.createElement("li");
    const section = document.createElement("ul");
    titleList.textContent = title;

    info.forEach(text => {
        const textItem = document.createElement("li");
        textItem.textContent = text;
        section.appendChild(textItem);
    });

    titleList.appendChild(section);
    return titleList;
}

function mapArrayElement(element, title) {
    return element.map(e => e[title].name);
}

function addText(type, pokemon) {
    clearText();
    const listado = document.createElement("ol");
    switch (type) {
        case 1:
            listado.textContent = "Listado de Pokémon:"
            pokemon.results.forEach(poke => {
                const infoElement = document.createElement("li");
                infoElement.textContent = poke.name;
                listado.appendChild(infoElement);
            });
            divTexto.appendChild(listado);
            break;
        case 2:
            listado.textContent = `Pokémon con ID ${pokemon.id}:`;
            // 1. Nombre
            const nameElement = document.createElement("li");
            nameElement.textContent = "Nombre: " + pokemon.name;
            listado.appendChild(nameElement);
            // 2. Experiencia base
            const experienceElement = document.createElement("li");
            experienceElement.textContent = "Experiencia base: " + pokemon.base_experience;
            listado.appendChild(experienceElement);
            // 3. Altura
            const heightElement = document.createElement("li");
            heightElement.textContent = "Altura: " + pokemon.height + " decimetros.";
            listado.appendChild(heightElement);
            // 4. Habilidades
            listado.appendChild(createSection("Habilidades: ", mapArrayElement(pokemon.abilities, "ability")));
            // 5. Objetos que carga
            listado.appendChild(createSection("Objetos que carga: ", mapArrayElement(pokemon.held_items, "item")));

            divTexto.appendChild(listado);
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