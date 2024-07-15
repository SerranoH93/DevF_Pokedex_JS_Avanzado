import { GET_ALL_POKEMONS } from './action-types';

const initialState = {
    pokemons: [],
    pokemonsGetted: []    
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: [...action.payload],
                pokemonsGetted: action.payload 
            }
    
        default:
            return {...state};
    }
}

export default rootReducer;