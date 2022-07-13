import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <NavLink to="/" className={styles.link}>
                Home
            </NavLink>
            <NavLink to="/movies" className={styles.link}>
                Movies
            </NavLink>
        </nav>
    );
};

export default Header;
