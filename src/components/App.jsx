import Profile from './Profile/profile';
import Statistics from './Statistics/statistic';
import FriendsList from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendsList />
    </div>
  );
};
