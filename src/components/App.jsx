import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import MovieDetails from './MovieDetails';

export function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </div>
    );
}
