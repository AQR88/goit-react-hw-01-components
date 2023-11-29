import Profile from './Profile/profile';
import Statistics from './Statistics/statistic';
import FriendsList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/transaction';
import user from '../data/user.json';
import friends from '../data/friends.json';
import data from '../data/data.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
