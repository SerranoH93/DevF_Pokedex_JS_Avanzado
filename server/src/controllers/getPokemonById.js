const axios = require("axios");
const URL_API = 'https://pokeapi.co/api/v2/pokemon';

const getPokemons = async (req, res) => {
    try {        
        //*Se obtiene pokemons desde la API
        pokemonId = req.params.id
        const { data } = await axios.get(`${URL_API}/${pokemonId}`);        
        const pokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.other.dream_world.front_default,
            height: data.height,
            weight: data.weight,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            special_attack: data.stats[3].base_stat,
            special_defense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
            types: data.types.map(type => ({
                type: type.type.name
            })) 
        }
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(500).send(error.message);
    }     
};

module.exports = getPokemons;