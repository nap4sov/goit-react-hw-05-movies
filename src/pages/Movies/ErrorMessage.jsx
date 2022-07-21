import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
    return <p className={styles.message}>{message}</p>;
};

ErrorMessage.propTypes = {
    movies: PropTypes.string.isRequired,
};

export default ErrorMessage;
