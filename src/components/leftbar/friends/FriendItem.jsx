import React from 'react';
import { friendsList } from './frindsList';
import "./frienditem.css";



const FriendItem = () => {
  const arrayNames = friendsList.map(item =>{
    return(
      <li className="friendItem">
        <img src={item.profilePic} alt={item.profilePic} className="friendItemPic" />
        <span className='friendItemText'>{item.name}</span>
      </li>
    )
  })
  return (
    <>
    {arrayNames}
    </>
  )
}

export default FriendItem;