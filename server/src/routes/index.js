const router = require("express").Router();
const getPokemonById = require("../controllers/getPokemonById.js");
const getPokemonsByName = require("../controllers/getPokemonsByName.js");


router.get('/pokemons', getPokemonsByName);
router.get("/pokemons/:id", getPokemonById);

module.exports = router;