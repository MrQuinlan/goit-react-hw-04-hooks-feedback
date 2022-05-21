import { useState } from 'react';
import Container from './Container';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = { good, neutral, bad };

    const onLeaveFeedback = option => {
        if (option === 'good') {
            setGood(val => val + 1);
        }

        if (option === 'neutral') {
            setNeutral(val => val + 1);
        }

        if (option === 'bad') {
            setBad(val => val + 1);
        }
    };

    const countTotalFeedback = () =>
        Object.values(options).reduce((total, value) => total + value);

    const countPositiveFeedbackPercentage = () =>
        Math.round((good / countTotalFeedback()) * 100);

    return (
        <div>
            <Container>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        buttons={options}
                        onLeaveFeedback={onLeaveFeedback}
                    />
                </Section>

                <Section title="Statistics">
                    {countTotalFeedback() ? (
                        <Statistics
                            items={options}
                            total={countTotalFeedback()}
                            percentage={countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </Container>
        </div>
    );
}

export default App;
