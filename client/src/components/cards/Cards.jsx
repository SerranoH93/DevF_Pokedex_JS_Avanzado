import React from 'react';
import Card from '../card/Card'
import styles from './Cards.module.css'

const Cards = ({pokemons}) => {
    return (
        <div className={styles.cardsContainer}>
            {
                !pokemons.length
                ? <p>No pokemons to show</p>
                : pokemons.map(pokemon => (
                    <Card
                        key = { pokemon.id }
                        id = { pokemon.id }
                        image = { pokemon.image }
                        name = { pokemon.name}
                        pokemon = { pokemon.number }
                        types = { pokemon.types }                        
                    />
                ))
            }
        </div>
    )
}

export default Cards;