import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrendingMoviesList = ({ movies }) => {
    return movies.map(movie => {
        return (
            <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
        );
    });
};

TrendingMoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ),
};

export default TrendingMoviesList;
