import style from "./friends.module.css"
import PropTypes from 'prop-types';

function FriendListItem({avatar, name, isOnline}) {
    return <li className="">
        <span className=""></span>
        <img className="" alt="User avatar" width="48" />
        <p className="">{name}</p>
    </li>;  
}

export default 'FriendListItem'