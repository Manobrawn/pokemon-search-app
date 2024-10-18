const searchButton = document.getElementById('search-button');
const searchInputElement = document.getElementById('search-input')
const toBeRended = document.querySelectorAll('.to-be-rended');
const [nameSpan, pokemonIdSpan, weightSpan, heightSpan, spriteImg, typesDiv, hpTd, attackTd, defenseTd, specialAttackTd, specialDefenseTd, speedTd] = toBeRended;


const pikachu = {
    name: 'PIKACHU',
    id: 25,
    weight: 60,
    height: 4,
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90,
    imgSrc: 'front_default',
    type: 'ELECTRIC'
};

const gengar = {
    name: 'GENGAR',
    id: 94,
    weight: 405,
    height: 15,
    hp: 60,
    attack: 65,
    defense: 60,
    specialAttack: 130,
    specialDefense: 75,
    speed: 110,
    imgSrc: 'front_default',
    type: ['GHOST', 'POISON']
};

function fetchPokemon() {

};

function checkInput() {
    const searchInput = searchInputElement.value;
    if (searchInput ) {
        const cleanedInput = searchInput.trim().toUpperCase();
        switch(cleanedInput) {
            case pikachu.name.toUpperCase():
            case String(pikachu.id):
                renderPokemon(pikachu);
                console.log('Pokémon name:' + pikachu.name, 'Pokémon ID:' + pikachu.id);
                break;
            case gengar.name.toUpperCase():
            case String(gengar.id):
                renderPokemon(gengar);
                console.log('Pokémon name:' + gengar.name, 'Pokémon ID:' + gengar.id);
                break;
            default: 
                alert("Pokémon not found");
        }
    } else {
        alert('Please enter a Pokémon name or ID');
    }
};

function renderPokemon(pokemon) {
    nameSpan.innerText = `${pokemon.name}`;
    pokemonIdSpan.innerText = `${pokemon.id}`;
    weightSpan.innerText = `${pokemon.weight}`;
    heightSpan.innerText = `${pokemon.height}`;
    spriteImg.src = `${pokemon.imgSrc}`;
    pokemon.id === 94? typesDiv.innerText = `${pokemon.type[0]}, ${pokemon.type[1]}`: typesDiv.innerText = pokemon.type;
    hpTd.innerText = `${pokemon.hp}`;
    attackTd.innerText = `${pokemon.attack}`;
    defenseTd.innerText = `${pokemon.defense}`;
    specialAttackTd.innerText = `${pokemon.specialAttack}`;
    specialDefenseTd.innerText = `${pokemon.specialDefense}`;
    speedTd.innerText = `${pokemon.speed}`;
};


searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    checkInput();
});