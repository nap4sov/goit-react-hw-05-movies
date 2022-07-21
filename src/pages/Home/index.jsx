import TrendingMoviesList from 'components/TrendingMoviesList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/moviesApi';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState(null);

    useEffect(() => {
        fetchTrendingMovies().then(setTrendingMovies).catch(console.log);
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            <ul>{trendingMovies && <TrendingMoviesList movies={trendingMovies} />}</ul>
        </>
    );
};

export default Home;
