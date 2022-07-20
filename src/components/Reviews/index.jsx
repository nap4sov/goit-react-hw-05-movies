import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';
import ErrorMessage from './ErrorMessage';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews);
    }, [movieId]);

    if (reviews.length === 0) {
        return <ErrorMessage message="We don't have any reviews for this movie" />;
    }

    return (
        <ul>
            {reviews.map(review => {
                return (
                    <li key={review.id}>
                        <h4>{review.author}</h4>
                        <p>{review.content}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default Reviews;
