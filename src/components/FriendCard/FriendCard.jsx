import PropTypes from 'prop-types';
import { FriendCardItem, UserSpan} from './FriendCard.styled.js'


export const FriendCard = ({
  friend: { avatar, name, isOnline },
}) => {
  return (
    <FriendCardItem color={isOnline.toString()}>
      <UserSpan color={isOnline.toString()}></UserSpan>
  <img className="FriendAvatar" src={ avatar } alt={name} width="48" />
      <p className="FriendName">{name}</p>
    </FriendCardItem>
  );
};

FriendCard.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
