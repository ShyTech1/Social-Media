import React from 'react';
import { itemList} from "../shortcuts/ItemList"
import "./leftbaritem.css"

const LeftbarItem = ( ) => {

        const arraynames = itemList.map(item =>{
        return(
            <li className='sidebarListItem'>
                {item.sidebarIcon}
                <span className='sidebarListItemText'>{item.itemtext }</span> 
            </li>     
        )});
        
        return( 
        <div className='LeftbarItem'>
            {arraynames}
        </div>  
            );
    }

export default LeftbarItem;