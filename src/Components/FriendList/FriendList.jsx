import PropTypes from "prop-types";
import styles from "./friends.module.css";
import FriendListItem from './FriendListItem'

  function FriendList({ friends }) {
      const elements = friends.map((friend) => {
            const { avatar, name, isOnline, id } = friend;
             return  (<FriendListItem
                name={name}
                avatar={avatar}
                isOnline={isOnline}
                key={id}
              />)
          })
      return (
        <ul className={styles.list}>
          {elements}
        </ul>);
    }
    
    export default FriendList;

    FriendList.propTypes = {
      friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }))
    }
  
