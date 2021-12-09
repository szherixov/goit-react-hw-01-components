import PropTypes from "prop-types";
import styles from "./profileStyle.module.css";

function Profile(props)  {
    return(
      <div className={styles.container}>
       <img src={props.avatar} alt={props.name} width='100px' height='100px' border-radius= '100%' /> 
       <h2 className={styles}>{props.username}</h2>
       <p className={styles.tag}>{props.tag}</p>
       <p className={styles.locations}>{props.location}</p>
       <div className={styles.stats}>
         <p className={styles.item}>followers: {props.stats.followers}</p>
         <p className={styles.item}>views: {props.stats.views}</p>
         <p className={styles.item}>likes: {props.stats.likes}</p>
       </div>
     </div>
    )
  }

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats:  PropTypes.shape({
     followers: PropTypes.number,
    likes: PropTypes.number,
    views: PropTypes.number,
  }).isRequired,

}


