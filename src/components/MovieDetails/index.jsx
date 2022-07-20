import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails, POSTER_BASE_URL, BACKGROUND_BASE_URL } from 'services/moviesApi';

const useStyles = createUseStyles({
    movie: {
        display: 'flex',
    },
});

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieDetails(movieId).then(setMovie).catch(console.log);
    }, [movieId]);

    const poster = `${POSTER_BASE_URL}${movie.poster_path}`;
    const background = `${BACKGROUND_BASE_URL}${movie.backdrop_path}`;

    const classes = useStyles();
    const genres = movie.genres?.map(genre => genre.name).join(', ');
    const infoStyle = {
        color: 'white',
        padding: '30px 50px',
        backgroundImage: `linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(0,0,0,0.5) 100%), url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            {movie && (
                <div>
                    <div className={classes.movie}>
                        <img src={poster} alt={movie.title} />
                        <div style={infoStyle}>
                            <h2>
                                {movie.title} ({movie.release_date?.slice(0, 4)})
                            </h2>
                            <p>User score: {movie.vote_average * 10}%</p>
                            <h3>Overview</h3>
                            <p className={classes.description}>{movie.overview}</p>
                            <h3>Genres</h3>
                            <p>{genres}</p>
                        </div>
                    </div>
                    <div>
                        <p>Additional information</p>
                        <ul>
                            <li>
                                <Link to="cast">Cast</Link>
                            </li>
                            <li>
                                <Link to="reviews">Reviews</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            <Outlet />
        </>
    );
};

export default MovieDetails;
