const axios = require("axios");
const API = 'http://localhost:5000/pokemons';

const getPokemons = async (req, res) => {
    try {        
        //*Se obtiene drivers desde la API
        const { data } = await axios.get(API); 
        const pokemons = data.map(pokemon => ({
            id: pokemon.id,
            number: pokemon.number,
            name: pokemon.name,            
            image: pokemon.ThumbnailImage,                       
            type: pokemon.type
        }));
        const pokemonsGetted = [...pokemons];
        return res.status(200).json(pokemonsGetted);
    } catch (error) {
        return res.status(500).send(error.message);
    }     
};

module.exports = getPokemons;



// const getPokemons = async (req, res) => {
    
//     res.status(200).json("Todos");
// }

// module.exports = getPokemons;