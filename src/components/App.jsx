import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Navigation from './Navigation';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import MovieDetails from './MovieDetails';
import Reviews from './Reviews';

export function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:movieId" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />}></Route>
                    <Route path="reviews" element={<Reviews />}></Route>
                </Route>
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </div>
    );
}
