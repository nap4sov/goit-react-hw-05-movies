const API_KEY = 'api_key=37eb00bc9ebde6b8ee688dc1b47e357c';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = () => {
    return fetch(`${BASE_URL}trending/movie/day?${API_KEY}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Nothing was found');
            }
            return res.json();
        })
        .then(data => data.results);
};

export const fetchMovieDetails = movieId => {
    return fetch(`${BASE_URL}movie/${movieId}?${API_KEY}`).then(res => {
        if (!res.ok) {
            throw new Error('Nothing was found');
        }
        return res.json();
    });
};
