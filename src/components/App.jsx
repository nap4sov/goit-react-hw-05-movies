import Navigation from './Navigation';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import NotFound from 'pages/NotFound';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export function App() {
    const location = useLocation();

    useEffect(() => {
        return () => {
            if (location.pathname !== '/') {
                return <Navigate to="/" replace />;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </>
    );
}
