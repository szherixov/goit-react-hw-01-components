import PropTypes from "prop-types";
import styles from "./friends.module.css";
import FriendListItem from './FriendListItem'


function FriendList({friends}) {
    // const el = props.stats.map(prop => <FriendList key = {prop.id} {...prop}/>)
  return(
    <ul className={`${styles.list} `}>
      {friends.map((friend) => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <li className={`${styles.item}`}>
            <span className={`${styles.stat} ${isOnline ? styles.online : styles.offline}`}>{friend.isOnline}</span>
            <img src={friend.avatar} alt={friend.name} className={styles.img} width="100px" height="100px"/>
            <h1>{friend.name}</h1>
          </li>
        );
      })}
    </ul>

  )
    
    // return(
    //     <section>
    //         <div>
    //             <span></span>
    //             <img src={props.avatar} alt="" />
    //             <h1>{props.name}</h1>
    //         </div>
    //     </section>
    // )
}

export default FriendList;