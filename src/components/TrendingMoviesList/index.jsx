import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrendingMoviesList = ({ movies }) => {
    const location = useLocation();

    return movies.map(movie => {
        return (
            <li key={movie.id}>
                <Link to={`movies/${movie.id}`} state={{ from: location }}>
                    {movie.title}
                </Link>
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
