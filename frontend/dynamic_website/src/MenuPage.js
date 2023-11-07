import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import Api from './api';
import DrinkMenu from './DrinkMenu'
import LunchMenu from './LunchMenu'
import DinnerMenu from './DinnerMenu'
import './Menu.css'

const MenuPage = () => {
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {type} = useParams()

    useEffect(() => {
        async function getContent() {
            let response = await Api.getMenuData(type)
            setContent(response)
            setIsLoading(false)
        }
        getContent();
    }, [])

    if(isLoading){
        return <p style={{color: 'black'}}>Loading . . .</p>
    }
    if(type === 'drinks'){
        return (
            <div className='menu-page'>
                <DrinkMenu content={content.menuItems} />
            </div>
        )
    }else if(type === 'lunch'){
        return (
            <div className='menu-page'>
                <LunchMenu content={content.menuItems} />
            </div>
        )
    }else if(type === 'dinner'){
        return (
            <div className='menu-page'>
                <DinnerMenu content={content.menuItems} />
            </div>
        )
    }
    
}

export default MenuPage;