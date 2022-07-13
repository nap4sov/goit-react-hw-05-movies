import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/moviesApi';

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    console.log(movieId);

    useEffect(() => {
        fetchMovieDetails(movieId).then(setMovie);
    }, [movieId]);

    return <h1>{movie.title}</h1>;
};

export default MovieDetails;
