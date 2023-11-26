import Profile from './Profile/profile';
import Statistics from './Statistics/statistic';
import FriendsList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/transaction';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendsList />
      <TransactionHistory />
    </div>
  );
};
