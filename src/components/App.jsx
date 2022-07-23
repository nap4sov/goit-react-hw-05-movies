import Navigation from './Navigation';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export function App() {
    return (
        <>
            <Navigation />
            <Suspense fallback="Loading...">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />}></Route>
                        <Route path="reviews" element={<Reviews />}></Route>
                    </Route>
                    <Route path="/movies" element={<Movies />} />
                </Routes>
            </Suspense>
        </>
    );
}
