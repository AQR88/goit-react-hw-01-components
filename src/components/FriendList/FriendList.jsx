import friends from './friends.json';
import css from './friends.module.css';

function List({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span
            className={css.status}
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
          >
            {isOnline}
          </span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

export default function FriendsList() {
  return <List friends={friends} />;
}
