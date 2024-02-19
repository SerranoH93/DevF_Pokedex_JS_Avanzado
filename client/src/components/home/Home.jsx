import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import SearchBar from '../searchbar/SearchBar';

const pokedexLogo = 'https://pokedex.gabrielrapucci.com.br/_next/image?url=%2Fimages%2Fpokedex.png&w=256&q=75';

const Home = () => {

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
                
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Home;