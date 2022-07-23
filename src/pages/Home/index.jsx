import { lazy, Suspense, useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/moviesApi';

const TrendingMoviesList = lazy(() => import('../../components/TrendingMoviesList'));

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState(null);

    useEffect(() => {
        fetchTrendingMovies().then(setTrendingMovies).catch(console.log);
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            <Suspense>
                <ul>{trendingMovies && <TrendingMoviesList movies={trendingMovies} />}</ul>
            </Suspense>
        </>
    );
};

export default Home;
