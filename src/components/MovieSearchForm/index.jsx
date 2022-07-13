import { useState } from 'react';

const MovieSearchForm = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button type="submit">Search</button>
        </form>
    );
};

export default MovieSearchForm;
