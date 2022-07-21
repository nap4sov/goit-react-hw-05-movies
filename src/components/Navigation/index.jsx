import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    styles.link + (isActive ? ` ${styles.activeLink}` : '')
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/movies"
                className={({ isActive }) =>
                    styles.link + (isActive ? ` ${styles.activeLink}` : '')
                }
            >
                Movies
            </NavLink>
        </nav>
    );
};

export default Navigation;
