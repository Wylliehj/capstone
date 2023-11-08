import React from 'react';
import drinks from '../static/drinks.PNG';
import lunch from '../static/lunch.PNG';
import dinner from '../static/dinner.PNG';
import './MenuTiles.css';
import {Link} from 'react-router-dom';

/**Compenent used to display tiles for respective menus, shown on the home page and
 * /menu route. The type of menu and format is static and should not change so 
 * data and logic is hard coded.
 */

const MenuTiles = () => {
    let imageArr = [{image: drinks, name: 'Drinks', link: 'drinks'}, 
                    {image: lunch, name: 'Lunch', link: 'lunch'}, 
                    {image: dinner, name: 'Dinner', link: 'dinner'}]
    return (
        <div className='menu-tiles'>
            {imageArr.map((i => (
                <Link to={`/menu/${i.link}`} key={i.name}>
                    <span>
                        <div className='menu-tile'>
                                <img src={i.image} className='menu-tile-image' alt=''></img>
                            <h5 className='image-text'>{i.name}</h5>
                        </div>
                    </span>
                </Link>
            )))}
        </div>
    )
}

export default MenuTiles;