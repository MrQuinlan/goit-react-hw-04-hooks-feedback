import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => <p className={s.msg}>{message}</p>;

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};
