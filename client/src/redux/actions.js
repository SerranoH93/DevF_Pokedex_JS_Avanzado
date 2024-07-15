import { GET_ALL_POKEMONS } from './action-types';
import axios from 'axios';

const serverURL = 'http://localhost:3001';

export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${serverURL}/pokemons`);
            const pokemons = data;
            dispatch({
                type: GET_ALL_POKEMONS,
                payload: pokemons
            })
        } catch (error) {
            alert(error.message);
        }
    }
}