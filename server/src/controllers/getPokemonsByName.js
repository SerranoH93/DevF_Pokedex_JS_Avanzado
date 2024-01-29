const axios = require("axios");
const getPokemons = require("./getPokemons");
const API = 'http://localhost:5000/pokemons';


const getDriversByName = async (req, res) => {
    try {
        const searchPokemonName = req.query.name;
        if (!searchPokemonName) {
            return getPokemons(req, res);
        }        
        const { data } = await axios.get(API);
        const pokemonsFromAPI = data.filter(pokemon => {
            return new RegExp(searchPokemonName, 'i').test(pokemon.name);
        })
        const newPokemonsList = pokemonsFromAPI.map(pokemon => ({
            id: pokemon.id,
            number: pokemon.number,
            name: pokemon.name,            
            image: pokemon.ThumbnailImage,                       
            type: pokemon.type
        }));        
        if (newPokemonsList.length > 15) {
            newPokemonsList = newPokemonsList.slice(0, 15);
        }
        return res.status(200).json(newPokemonsList);
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = getDriversByName;