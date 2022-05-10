import React, { Component } from 'react';
import Container from './Container';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    options = Object.keys(this.state);

    onLeaveFeedback = option => {
        this.setState(prevState => {
            return { [option]: prevState[option] + 1 };
        });
    };

    countTotalFeedback = () =>
        Object.values(this.state).reduce((total, value) => total + value);

    countPositiveFeedbackPercentage = () =>
        Math.round((this.state.good / this.countTotalFeedback()) * 100);

    render() {
        return (
            <div>
                <Container>
                    <Section title="Please leave feedback">
                        <FeedbackOptions
                            buttons={this.options}
                            onLeaveFeedback={this.onLeaveFeedback}
                        />
                    </Section>

                    <Section title="Statistics">
                        {this.countTotalFeedback() ? (
                            <Statistics
                                items={this.state}
                                values={this.state}
                                total={this.countTotalFeedback()}
                                percentage={this.countPositiveFeedbackPercentage()}
                            />
                        ) : (
                            <Notification message="There is no feedback" />
                        )}
                    </Section>
                </Container>
            </div>
        );
    }
}

export default App;
