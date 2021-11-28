import React, { Component } from "react";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions"
import Notification from "../Notification"
import style from "../Section/Section.module.css"


class Section extends Component {
    state =   {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positivePercentage: 100
    }

    goodHandleIncrement = () => {
      this.setState(prevState => ({
      good: prevState.good + 1,
      }));
      this.countTotalFeedback()
      this.countPositiveFeedbackPercentage()
    }
    neutralHandleIncrement = () => {
      this.setState((prevState) => {
        return {
          neutral: prevState.neutral + 1
        }
      })
      this.countTotalFeedback()
      this.countPositiveFeedbackPercentage()
    }
    badHandleIncrement = () => {
      this.setState((prevState) => {
        return {
          bad: prevState.bad + 1
        }
      })
      this.countTotalFeedback()
      this.countPositiveFeedbackPercentage()
    }
    countTotalFeedback = () => 
      this.setState(prevState => ({
        total: prevState.good + prevState.neutral + prevState.bad
      }))
      countPositiveFeedbackPercentage = () => {
       this.setState(prevState => ({
        positivePercentage: Math.floor(
        (  100 / (prevState.good + prevState.neutral + prevState.bad)
        ))
       }))
      }

      render() {
        const { good, neutral, bad, total, positivePercentage } = this.state;
          return (
            <div className={style.centeredDiv}>
           <h1>Please leave feedback</h1>
           <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedbackGood={this.goodHandleIncrement}
            onLeaveFeedbackNeutral={this.neutralHandleIncrement}
            onLeaveFeedbackBad={this.badHandleIncrement}
          />
            
            <h2>Statistics</h2>
            {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
        </div> 
          )
      }
}


export default Section
