import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'

const LandingPage = () => {
    return (
        <div >
            <div >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon Logo" />
                <h1>Gotta catch'em all!</h1>                
            </div>
            <div >
                <p>Conoce todo a cerca del mundo Pokémon</p>
                <Link to='/home'><button >LET'S GO!</button></Link>
            </div>
        </div>
    )
};

export default LandingPage;