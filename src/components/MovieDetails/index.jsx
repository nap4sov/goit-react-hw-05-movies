import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails, POSTER_BASE_URL, BACKGROUND_BASE_URL } from 'services/moviesApi';
import styles from './styles.module.css';

const MovieDetails = () => {
    const [
        { poster_path, backdrop_path, genres, overview, title, release_date, vote_average },
        setMovie,
    ] = useState({});
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        fetchMovieDetails(movieId).then(setMovie).catch(console.log);
    }, [movieId]);

    const poster = poster_path ? `${POSTER_BASE_URL}${poster_path}` : '';
    const background = backdrop_path ? `${BACKGROUND_BASE_URL}${backdrop_path}` : '';
    const genresList = genres?.map(genre => genre.name).join(', ');

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(2,0,36,0.5) 0%, rgba(0,0,0,0.5) 100%), url(${background})`,
    };

    return (
        <>
            <div>
                <div className={styles.movie}>
                    <img src={poster} alt={title} />
                    <div style={backgroundStyle} className={styles.info}>
                        <h2>
                            {title} ({release_date?.slice(0, 4)})
                        </h2>
                        <p>User score: {vote_average * 10}%</p>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                        <h3>Genres</h3>
                        <p>{genresList}</p>
                    </div>
                </div>
                <div>
                    <p>Additional information</p>
                    <ul className={styles.additionalLinks}>
                        <li>
                            <Link
                                to="cast"
                                state={{ from: location.state ? location.state.from : '/' }}
                            >
                                Cast
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="reviews"
                                state={{ from: location.state ? location.state.from : '/' }}
                            >
                                Reviews
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Suspense fallback="Loading...">
                <Outlet />
            </Suspense>
        </>
    );
};

export default MovieDetails;
