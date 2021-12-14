import StatisticItem from './StatisticItem'
import PropTypes from "prop-types";
import styles from './StatisticsItem.module.css';
  
  function Statistics(props)  {
      const el = props.stats.map(prop => <StatisticItem key = {prop.id} {...prop}/>)
    return(
      <section className={styles.container}>
          {props.title && <h2 className={styles.title}>{props.title}</h2>}
        <ul className={styles.list}>
            {el}
        </ul>
     </section>
    )
  }
  
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
    
  ).isRequired
}