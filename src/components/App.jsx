import user from './User.json';
import Profile from './profile/Profile';
import data from './Data.json';
import Statistics from './statistics/Statistics';
import styles from './App.module.css';
import friends from './Friends.json';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactions/Transactions';
import items from './Transactions.json';

export const App = () => {
  return (
    <div className={styles.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
