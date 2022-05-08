import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ items, total, percentage }) => {
    const { good, neutral, bad } = items;
    return (
        <ul className={s.list}>
            <li className={s.item}>good: {good}</li>
            <li className={s.item}>neutral: {neutral}</li>
            <li className={s.item}>bad: {bad}</li>
            <li className={s.item}>Total: {total}</li>
            <li className={s.item}>
                Positive feedback: {!percentage ? 0 : `${percentage}%`}
            </li>
        </ul>
    );
};

export default Statistics;

Statistics.propTypes = {
    items: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};
