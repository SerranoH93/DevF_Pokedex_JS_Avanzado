import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ id, image, name, number, types}) => {

    return (
        <div className= {styles.Card}>
            <img className={styles.pokeImg } src={ image } alt={ name } />
            <p>Name: { name }</p>
            <p>Number: #0{ id }</p>
            {/* <p>Types: { types }</p> */}
        </div>
    )
}

export default Card;