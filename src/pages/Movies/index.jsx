import { useState } from 'react';
import MovieSearchForm from 'components/MovieSearchForm';
import MoviesSearchList from 'components/MoviesSearchList';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchMoviesByTitle } from 'services/moviesApi';
import ErrorMessage from './ErrorMessage';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) {
            return;
        }
        fetchMoviesByTitle(query)
            .then(movies => {
                if (movies.length === 0) {
                    setSearchParams({});
                    throw new Error("Your query doesn't match any results");
                }
                setMovies(movies);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    }, [query, setSearchParams]);

    const setQuery = formQuery => {
        setSearchParams(formQuery ? { query: formQuery } : {});
    };

    return (
        <>
            <MovieSearchForm onSubmit={setQuery} />
            {!error ? <MoviesSearchList movies={movies} /> : <ErrorMessage message={error} />}
        </>
    );
};

export default Movies;
