import { NavLink } from "react-router-dom";
import styles from './NotFound.module.css';

const error404 = "https://cdn.dribbble.com/users/817492/screenshots/3025820/media/49462eb71d0386f03f0ea2d19a6d300f.jpg";

export default function NotFound(props) {

    return (
        <div>
            <img src={error404} alt="Not Found" />
            <h2>ERROR 404</h2>
            < NavLink to='/home'>
                <button>HOME</button>
            </ NavLink>
        </div>
    );
}





