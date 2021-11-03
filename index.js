const fetchPokemon = () => {

    const promises = [];
    // creeer een nieuwe array die ervoor zorgt dat alle items in de array parralel geladen worden,
    // zo hoeft niet elk individueel item achter elkaar geladen worden maar gebeurd dit tegelijk.

    for (let i = 1; i <= 150; i++) {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + i;
        promises.push(fetch(url)
            .then((response) => response.json())
            .catch(error => {
            console.error("Failed to fetch pokemon: " + i)
        }));
        // voor elke request pushen we de promise op de list van promises.
    }    

    Promise.all(promises).then(results => {
        // met Promise.all worden de items parralel geladen

        const pokemon = results.map((data) => ({
        // map function itereert door een array (results) en creert een nieuwe array dat ervoor zorgt dat
        // de items worden veranderd.

            name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map(type => type.type.name).join(', '),
                height: data.height,
                weight: data.weight,
        // elk item wordt veranderd naar de door ons opgestelde format zoals hierboven 
        // (Hierdoor krijgen we alleen de benodigde info voor elke pokemon uit de api).

        }));
        console.log(pokemon);
    }).catch(error => {
        const pokedexContainer = document.querySelector(".pokedex-container")
        const errorMessage = document.createElement("h3")
        errorMessage.innerHTML = "Failed to fetch all pokemon :("
        pokedexContainer.appendChild(errorMessage);
    });
};

fetchPokemon();
