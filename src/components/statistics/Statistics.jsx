import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  //   debugger;
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(stat => {
          return (
            <li className={styles.item} style={setBg()} key={stat.id}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{`${stat.percentage}%`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return { backgroundColor: '#' + randomColor };
};

export default Statistics;
