
import PropTypes from "prop-types";
import styles from './StatisticsItem.module.css';

const StatisticItem = (props) => {
    return(
    <li className={styles.item}>
      <span className={styles.label}>{props.label}</span>
      <br/>
      <span className={styles.procent}>{props.percentage}%</span>
    </li>
    )
}

export default StatisticItem;

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
