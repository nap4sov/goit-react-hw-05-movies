import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesSearchList = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie => {
                const path = `/movies/${movie.id}`;
                return (
                    <li key={movie.id}>
                        <Link to={path}>{movie.title}</Link>
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
