import React, {useState, useEffect} from 'react';
import MenuItem from './MenuItem';

/**All menu components act similarly, different components used because items
 * on different menus have different formats and menu sections.
 * 'content' is passed and used to map components to compArr, from there
 * useEffect is used to determine what section a particular component should 
 * belong in then saved to state.
 */

const LunchMenu = ({content}) => {
    const [appetizers, setAppetizers] = useState([])
    const [sides, setSides] = useState([])
    const [entrees, setEntrees] = useState([])
    const [sandwiches, setSandwiches] = useState([])
    let compArr = content.map(item => (
        <MenuItem item={item} menu='lunch' key={item.itemName} />
    ))
    useEffect(() => {
        function makeSections() {
            for(let component of compArr){
                let splitArr = component.props.item.locID.split('-');
                let section = splitArr[splitArr.length - 2]
                if(section === 'appetizer'){
                    setAppetizers(data => ([...data, component]))
                }else if(section === 'sides'){
                    setSides(data => ([...data, component]))
                }else if(section === 'entrees'){
                    setEntrees(data => ([...data, component]))
                }else if(section === 'sandwiches'){
                    setSandwiches(data => ([...data, component]))
                }
            }
        }
        makeSections()
    }, [])

    return (
        <div className='menu' style={{color: 'black'}}>
            <h1 className='menu-title'>Lunch Menu</h1>
            <div className='menu-section'>
                <h2 style={{color: 'black'}}>Appetizers</h2>
                {appetizers}
            </div>
            <div className='menu-section'>
                <h2 style={{color: 'black'}}>Sandwiches</h2>
                {sandwiches}
            </div>
            <div className='menu-section'>
                <h2 style={{color: 'black'}}>Entrees</h2>
                {entrees}
            </div>
            <div className='menu-section'>
                <h2 style={{color: 'black'}}>Sides</h2>
                {sides}
            </div>
        </div>
    )
}

export default LunchMenu;