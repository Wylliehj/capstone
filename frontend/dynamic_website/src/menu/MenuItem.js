import React from 'react';

/** Accepts and item and a string pertaining to the menu type.
 * Based on the menu type a different format is returned
 */

const MenuItem = ({item, menu}) => {
    if(menu === 'drinks'){
        return (
            <div className='menu-item'>
                <h5 style={{color: 'black'}}>
                    {item.itemName}
                </h5>
                <p style={{color: 'black'}}>${item.price}</p>
            </div>
        )
    }else if(menu === 'lunch' || menu === 'dinner'){
        return (
            <div className='menu-item'>
                <h6 style={{color: 'black'}}>
                    {item.itemName}
                </h6>
                <p style={{color: 'black'}}>${item.price}</p>
                <p style={{color: 'black'}}>{item.itemDesc}</p>
            </div>
        )
    }
}

export default MenuItem;