import React, {useEffect, useState} from 'react';
import MenuItem from './MenuItem';

/**All menu components act similarly, different components used because items
 * on different menus have different formats and menu sections.
 * 'content' is passed and used to map components to compArr, from there
 * useEffect is used to determine what section a particular component should 
 * belong in then saved to state.
 */

const DrinkMenu = ({content}) => {
    const [beer, setBeer] = useState([]);
    const [wine, setWine] = useState([]);
    const [cocktails, setCocktails] = useState([])
    let compArr = content.map(item => (
        <MenuItem item={item} menu='drinks' key={item.itemName}/>
    ))
    useEffect(() => {
        function makeSections() {
            for(let component of compArr){
                let splitArr = component.props.item.locID.split('-');
                let section = splitArr[splitArr.length - 2]
                if(section === 'beer'){
                    setBeer(data => ([...data, component]))
                }else if(section === 'wine'){
                    setWine(data => ([...data, component]))
                }else if(section === 'cocktails'){
                    setCocktails(data => ([...data, component]))
                }
            }
        }
        makeSections()
    }, [])
    return (
        <div className='menu'>
            <h1 style={{color: 'black'}}>Drink Menu</h1>
            <div className='menu-section'>
                <h2 style={{color: 'black'}}>Beer</h2>
                {beer}
            </div>
            <div className='menu-section'>
                <h2 style={{color: 'black'}}>Wine</h2>
                {wine}
            </div>
            <div className='menu-section'>
                <h2 style={{color: 'black'}}>Cocktails</h2>
                {cocktails}
            </div>
        </div>
    )
}

export default DrinkMenu