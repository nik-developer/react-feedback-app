import React from "react";
import style from "../Statistics/Statistics.module.css"
import PropTypes from 'prop-types';




const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
return (
  <ul className={style.StatisticsList}>
    
  <li className={style.StatisticsItem}>Good: {good}</li>
  <li className={style.StatisticsItem}>Neutral: {neutral}</li>
  <li className={style.StatisticsItem}>Bad: {bad}</li>
  <li className={style.StatisticsItem}>Total: {total}</li>
  <li>Positive feedback: {positivePercentage}%</li>

</ul>
)
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired

}

export default Statistics;