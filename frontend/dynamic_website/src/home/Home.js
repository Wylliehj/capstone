import React, {useState, useEffect} from 'react';
import Section from './Section';
import './Home.css'
import Api from '../api';

/**Component that loads and houses everything for the homepage. Content is split up into
 * 'sections' and generated using a <Section />  component.
 * useEffect used on initial render to make a request to API for content, content then passed
 * to child components.
 */

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
            <Section content={content} section={1} key={1} />
            <Section content={content} section={2} key={2} />
            <Section content={content} section={3} key={3} />

        </div>
    )
}

export default Home;