import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map(friend => (
        <li className={style.item} key={friend.id}>
          <span className={friend.isOnline ? style.statusOnline : style.statusOffline}></span>
          <img className={style.avatar} src={friend.avatar} alt={friend.name} width="48" />
          <p className={style.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
