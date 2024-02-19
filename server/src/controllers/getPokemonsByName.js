const axios = require("axios");
const getPokemons = require("./getPokemons");
const URL_API = 'https://pokeapi.co/api/v2/pokemon/';


const getDriversByName = async (req, res) => {
    try {
        const searchPokemonName = req.query.name;
        if (!searchPokemonName) {
            return getPokemons(req, res);
        }        
        const { data } = await axios.get(`${URL_API}/${searchPokemonName}`);
        
        const pokemon = {
            id: data.id,
            number: data.number,
            name: data.name,            
            image: data.sprites.other.dream_world.front_default,                       
            type: data.types.map(type => ({
                type: type.type.name
            }))
        };        
        
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = getDriversByName;