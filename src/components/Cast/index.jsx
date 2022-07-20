import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits, CAST_PIC_BASE_URL } from 'services/moviesApi';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieCredits(movieId).then(movie => setCast(movie.cast.slice(0, 12)));
    }, [movieId]);

    console.log(cast);
    return (
        <ul>
            {cast.map(actor => {
                const profilePic = `${CAST_PIC_BASE_URL}${actor.profile_path}`;
                return (
                    <li key={actor.credit_id}>
                        {profilePic && <img src={profilePic} alt="" />}
                        <h4>{actor.name}</h4>
                        <p>Character: {actor.character}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default Cast;
