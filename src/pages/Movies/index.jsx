import { useState } from 'react';
import MovieSearchForm from 'components/MovieSearchForm';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchMoviesByTitle } from 'services/moviesApi';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) {
            return;
        }
        fetchMoviesByTitle(query).then(setMovies);
    }, [query]);

    const setQuery = formQuery => {
        setSearchParams(formQuery ? { query: formQuery } : {});
    };

    return (
        <>
            <MovieSearchForm onSubmit={setQuery} />
            {movies && (
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
            )}
        </>
    );
};

export default Movies;
