import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const prevLocation = location.state?.from;

    const handleButtonClick = () => {
        navigate(prevLocation);
    };

    return (
        <>
            <nav className={styles.navigation}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        styles.link + (isActive ? ` ${styles.activeLink}` : '')
                    }
                    state={{ from: location }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/movies"
                    className={({ isActive }) =>
                        styles.link + (isActive ? ` ${styles.activeLink}` : '')
                    }
                    state={{ from: location }}
                >
                    Movies
                </NavLink>
            </nav>
            {prevLocation && (
                <button onClick={handleButtonClick} type="button" className={styles.button}>
                    Back
                </button>
            )}
        </>
    );
};

export default Navigation;
