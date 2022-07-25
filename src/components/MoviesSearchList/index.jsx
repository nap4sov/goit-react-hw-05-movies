import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesSearchList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul>
            {movies.map(movie => {
                const path = `/movies/${movie.id}`;
                return (
                    <li key={movie.id}>
                        <Link to={path} state={{ from: location }}>
                            {movie.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

MoviesSearchList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ),
};

export default MoviesSearchList;
