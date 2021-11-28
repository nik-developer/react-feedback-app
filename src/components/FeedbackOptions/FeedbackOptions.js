import React from "react";
import style from "../FeedbackOptions/FeedbackOptions.module.css"
import PropTypes from "prop-types";


const FeedbackOptions = ({options, onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad}) => {
return (
    <div>
    <button type="button" onClick={() => onLeaveFeedbackGood(options[0])} className={style.buttons}>Good</button>
    <button type="button" onClick={() => onLeaveFeedbackNeutral(options[1])} className={style.buttons}>Neutral</button>
    <button type="button" onClick={() => onLeaveFeedbackBad(options[2])} className={style.buttons}>Bad</button>
      </div>
)
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired
}

export default FeedbackOptions