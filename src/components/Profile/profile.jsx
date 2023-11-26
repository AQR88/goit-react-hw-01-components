import user from './user.json';
import css from './profile.module.css';

function UserCard({ username, tag, location, avatar, stats }) {
  return (
    <>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
          <li className={css.elem}>
            <span className={css.label}>Follovers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li className={css.elem}>
            <span className={css.label}>Views </span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li className={css.elem}>
            <span className={css.label}>Stats </span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function Profile() {
  return (
    <UserCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}
