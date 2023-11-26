import user from './user.json';

function UserCard ({username,tag,location,avatar,stats}){
  return (
      <>
      <div className="profile">
<div className="description">
  <img
    src={avatar}
    alt="User avatar"
    className="avatar"
  />
  <p className="name">{username}</p>
  <p className="tag">{tag}</p>
  <p className="location">{location}</p>
</div>
<ul className="stats">
  <li>
    <span className="label">Follovers {stats.followers}</span>
    <span className="quantity">{stats.followers.data}</span>
  </li>
  <li>
    <span className="label">Views {stats.views}</span>
    <span className="quantity">{stats.views.data}</span>
  </li>
  <li>
    <span className="label">Stats {stats.likes}</span>
    <span className="quantity">{stats.likes.data}</span>
  </li>
</ul>
</div>
    </>
  )
};


export default function Profile (){
  return(
    <UserCard
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
  )
};


