import PropTypes from 'prop-types';
import styles from "./friends.module.css";

function FriendListItem({avatar, name, isOnline}) {
    return (<li className={styles.item}>
        <span className={`${styles.stat} ${isOnline? styles.online : styles.offline}`}></span>
        <img className={styles.img} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
    </li>)
}
 FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

export default FriendListItem


