import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ stats }) => {
  // debugger;
  return (
    <ul className={styles.stats}>
      {Object.entries(stats).map(stat => {
        return (
          <li>
            <span className={styles.label}>{stat[0]}</span>
            <span className={styles.quantity}>{stat[1]}</span>
          </li>
        );
      })}
    </ul>
  );
};

Stats.propTypes = {
  stats: PropTypes.object,
};

export default Stats;
