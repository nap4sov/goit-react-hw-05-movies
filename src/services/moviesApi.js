const API_KEY = 'api_key=37eb00bc9ebde6b8ee688dc1b47e357c';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
export const BACKGROUND_BASE_URL = 'https://image.tmdb.org/t/p/original/';
export const CAST_PIC_BASE_URL = 'https://image.tmdb.org/t/p/w200';

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

export const fetchMoviesByTitle = title => {
    return fetch(`${BASE_URL}search/movie?query=${title}&${API_KEY}`)
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

export const fetchMovieCredits = movieId => {
    return fetch(`${BASE_URL}movie/${movieId}/credits?${API_KEY}`).then(res => {
        if (!res.ok) {
            throw new Error('Nothing was found');
        }
        return res.json();
    });
};

export const fetchMovieReviews = movieId => {
    return fetch(`${BASE_URL}movie/${movieId}/reviews?${API_KEY}`).then(res => {
        if (!res.ok) {
            throw new Error('Nothing was found');
        }
        return res.json().then(data => data.results);
    });
};
