import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ buttons, onLeaveFeedback }) => {
    return (
        <ul className={s.list}>
            {buttons.map(btn => {
                return (
                    <li className={s.item} key={btn}>
                        <button
                            type="button"
                            className={s.btn}
                            name={btn}
                            onClick={() => {
                                onLeaveFeedback(btn);
                            }}
                        >
                            {btn}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
