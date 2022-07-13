import { useState } from 'react';
import MovieSearchForm from 'components/MovieSearchForm';

const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    console.log(searchQuery);

    return (
        <>
            <MovieSearchForm onSubmit={setSearchQuery} />
        </>
    );
};

export default Movies;
