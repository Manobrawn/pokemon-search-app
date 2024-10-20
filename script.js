const searchButton = document.getElementById('search-button');
const searchInputElement = document.getElementById('search-input');
const toBeRended = document.querySelectorAll('.to-be-rended');
const [nameSpan, pokemonIdSpan, weightSpan, heightSpan, spriteImg, typesDiv, hpTd, attackTd, defenseTd, specialAttackTd, specialDefenseTd, speedTd] = toBeRended;

async function fetchPokemon() {
    const userInput = checkInput();
    if (!userInput) return; 
    const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${userInput}`;
    const res = await fetch(url);

    if (!res.ok) {
        alert('Pokémon not found');
        return null;
    }

    const data = await res.json();
    return data;
};

function checkInput() {
    const searchInput = searchInputElement.value;

    if (searchInput) {
        const cleanedInput = String(searchInput.trim().toLowerCase().replace(/\s+/g, '-'));
        return cleanedInput;
    } else {
        alert('Please enter a Pokémon name or ID');
        return null;
    }
};

function renderPokemon(pokemon) {
    nameSpan.innerText = `${pokemon.name}`;
    pokemonIdSpan.innerText = `${pokemon.id}`;
    weightSpan.innerText = `Weight: ${pokemon.weight}`;
    heightSpan.innerText = `Height: ${pokemon.height}`;
    spriteImg.src = pokemon.sprites.front_default; 

    typesDiv.innerHTML = '';

    pokemon.types.forEach((typeInfo) => {
        const typeElement = document.createElement('div');
        typeElement.innerHTML = typeInfo.type.name;
        typeElement.classList.add(`${typeInfo.type.name}`);
        typesDiv.appendChild(typeElement);
    });
    
    hpTd.innerText = `${pokemon.stats[0].base_stat}`;
    attackTd.innerText = `${pokemon.stats[1].base_stat}`;
    defenseTd.innerText = `${pokemon.stats[2].base_stat}`;
    specialAttackTd.innerText = `${pokemon.stats[3].base_stat}`;
    specialDefenseTd.innerText = `${pokemon.stats[4].base_stat}`;
    speedTd.innerText = `${pokemon.stats[5].base_stat}`;
};

searchButton.addEventListener('click', async (event) => {
    event.preventDefault();

    try {
        const pokemon = await fetchPokemon(); 
        if (pokemon) {
            renderPokemon(pokemon);  
        }
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
    searchInputElement.value = '';
});
