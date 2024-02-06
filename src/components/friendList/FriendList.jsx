import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  //   console.log(friends);
  //   debugger;
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        return (
          <li className={styles.item} key={friend.id}>
            {friend.isOnline ? (
              <span className={`${styles.status} ${styles.green}`}></span>
            ) : (
              <span className={`${styles.status} ${styles.red}`}></span>
            )}
            <img
              src={friend.avatar}
              alt={`${friend.name} avatar`}
              className={styles.avatar}
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
