const axios = require("axios");
const URL_API = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

const getPokemons = async (req, res) => {
    try {
        const { data } = await axios.get(URL_API);
        const urlPokemons = data.results.map(pokemon =>({
            url: pokemon.url
        }));
        
        const promises = urlPokemons.map(async pokemon => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        })

        const resultsAllPokemon = await Promise.all(promises);

        const fixedPokemons = resultsAllPokemon.map(pokemon =>({
            id: pokemon.id,
            name: pokemon.name,
            number: data.number,
            image: pokemon.sprites.other.dream_world.front_default,
            types: pokemon.types.map(type => ({
                type: type.type.name
            }))
        }))

        return res.status(200).json(fixedPokemons);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = getPokemons;



// const getPokemons = async (req, res) => {
    
//     res.status(200).json("Todos");
// }

// module.exports = getPokemons;