import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPokemons } from '../../redux/actions';
import { NavLink } from 'react-router-dom';
import Cards from '../../components/cards/Cards';
import NavBar from '../../components/navbar/NavBar';
import SearchBar from '../../components/searchbar/SearchBar';

const pokedexLogo = 'https://pokedex.gabrielrapucci.com.br/_next/image?url=%2Fimages%2Fpokedex.png&w=256&q=75';

const Home = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemonsGetted);

    useEffect(() => {
        dispatch(getAllPokemons());
    }, [dispatch])


    return (
        <div >
            <div>
                <NavLink to='/home'>
                    <img src={pokedexLogo} alt="" />
                </NavLink>                
            </div>
            <div >
                <NavBar />
                <hr />
                <SearchBar />
                <hr />                
            </div>
            <div>
                <Cards pokemons = { pokemons }/>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Home;