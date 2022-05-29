import React from 'react';
import { friendsList } from './frindsList';
import "./frienditem.css"


const FriendItem = () => {
  const arrayNames = friendsList.map(item =>{
    return(
      <div className="friendItem">
        <img src={item.profilePic} alt={item.profilePic} className="friendItemPic" />
        <span className=''>{item.name}</span>
        
      </div>
    )
  })
  return (
    <>
    {arrayNames}
    </>
  )
}

export default FriendItem;