import PropTypes from 'prop-types';
import {ProfileEx} from './Profile.styled'

export default function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <ProfileEx >
      <div className="mainInfo">
        <img src={avatar} alt="User avatar" className="userAvatar" />
        <p>@{tag}</p>
        <p>{username}</p>
        <p>{location}</p>
      </div>

      <ul className="descText">
        <li className='statisticInfo'>
          <span className='numbers'>Followers</span>
          <span >{followers}</span>
        </li>
        <li className='statisticInfo'>
          <span  className='numbers'>Views</span>
          <span >{views}</span>
        </li>
        <li className='statisticInfo'>
          <span  className='numbers'>Likes</span>
          <span >{likes}</span>
        </li>
      </ul>
    </ProfileEx>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
