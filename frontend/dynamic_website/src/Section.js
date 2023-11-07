import React, {useState, useEffect} from 'react';
import './Section.css';
import MenuTiles from './MenuTiles';
import vibe from './static/vibe.PNG';

const Section = ({content, section}) => {
    const [contentObj, setContentObj] = useState({})
    const [headingObj, setHeadingObj] = useState({})
    useEffect(() => {
        function addData() {
            for(let item of content.data){
                let locId = item.locId
                if(locId.endsWith(`h${section}`)){
                    setHeadingObj(data => ({
                        ...data,
                        locId: locId,
                        content: item.content}))
                }else if(locId.endsWith(`s${section}`)){
                    setContentObj(data => ({
                        ...data,
                        locId: locId,
                        content: item.content}))
                }
            }
        }
        addData()
    }, [])
    if(section === 1){
        return(
            <div className='section' style={{color: 'black'}}>
                <div className={headingObj.locId}>
                    <h4 className={headingObj.locId}>{`"${headingObj.content}"`}</h4>
                </div>
                <div className='section-content'>
                    <div className={contentObj.locId}>
                        <p>{contentObj.content}</p>
                    </div>
                    <div className='vibe'>
                        <img src={vibe}></img>
                    </div>
                </div>
            </div>
        )
    }else if(section === 2){
        return(
            <div className='section' style={{color: 'black'}}>
                <div className={headingObj.locId}>
                    <h4 className={headingObj.locId}>{`"${headingObj.content}"`}</h4>
                </div>
                <div className='section-content'>
                    <MenuTiles />
                    <div className={contentObj.locId}>
                        <p>{contentObj.content}</p>
                    </div>
                </div>
            </div>
        )
    }else if(section === 3){
        return(
            <div className='section' style={{color: 'black'}}>
                <div className={headingObj.locId}>
                    <h4 className={headingObj.locId}>{`"${headingObj.content}"`}</h4>
                </div>
                <div className='section-content-3'>
                    <div className={contentObj.locId}>
                        <p>{contentObj.content}</p>
                    </div>
                </div>
                <div className='button'>
                    <form action='/about'>
                        <button>Contact Us!</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Section;