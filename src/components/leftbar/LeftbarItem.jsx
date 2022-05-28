import React from 'react';
import { itemList } from './ItemList';
import "./leftbaritem.css"

const LeftbarItem = ( ) => {

        const arraynames = itemList.map(item =>{
        return(
      
                    <li className='sidebarListItem'>
                        {item.sidebarIcon}
                        {item.itemtext }
                    </li>
               
        )} )
        
        
        return( 
        <div>   
           {arraynames}
        </div>
            );
    }

export default LeftbarItem;