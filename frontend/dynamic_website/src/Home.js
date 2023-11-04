import React, {useState, useEffect} from 'react';
import Section from './Section';
import './Home.css'
import Api from './api';

const Home = () => {
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getContent() {
            let response = await Api.getHome()
            setContent(response)
            setIsLoading(false)
        }
        getContent();
    }, [])

    if(isLoading){
        return <p style={{color: 'black'}}>Loading . . .</p>
    }

    return(
        <div className='home-page'>
            <div className='title-div'>
                <h1 className='title'>The Bestaurant</h1>
            </div>
            <div className='slogan-div'>
                <h4 className='slogan'>'When the best is what you want!'</h4>
            </div>
            <Section content={content} section={1} />
            <Section content={content} section={2} />
            <Section content={content} section={3} />

        </div>
    )
}

export default Home;