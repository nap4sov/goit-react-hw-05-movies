import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const MovieSearchForm = ({ onSubmit, query }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(query ?? '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className={styles.input}
            />
            <button type="submit" disabled={!inputValue} className={styles.button}>
                Search
            </button>
        </form>
    );
};

MovieSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default MovieSearchForm;
