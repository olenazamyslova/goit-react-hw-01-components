import PropTypes from 'prop-types';
import { FriendCard } from '../FriendCard/FriendCard';
import { FriendListItems } from '../FriendList/FriendList.styled.js';


export const FriendList = ({ friends }) => {
  return (
    <FriendListItems>
      {friends.map(friend => (
        <div key={friend.id}>
          <FriendCard friend={friend} />
        </div>
      ))}
    </FriendListItems>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
