import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits, CAST_PIC_BASE_URL } from 'services/moviesApi';
import styles from './styles.module.css';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieCredits(movieId)
            .then(movie => setCast(movie.cast.slice(0, 12)))
            .catch(console.log);
    }, [movieId]);

    return (
        <ul className={styles.list}>
            {cast.map(({ profile_path, credit_id, name, character }) => {
                const profilePic = profile_path
                    ? `${CAST_PIC_BASE_URL}${profile_path}`
                    : 'https://st3.depositphotos.com/1322515/35964/v/200/depositphotos_359648638-stock-illustration-image-available-icon.jpg';
                return (
                    <li key={credit_id} className={styles.item}>
                        {profilePic && <img src={profilePic} alt={name} />}
                        <h4>{name}</h4>
                        <p>Character: {character}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default Cast;
