import React, {useState, useEffect} from 'react';
import './Section.css';
import MenuTiles from '../menu/MenuTiles';
import vibe from '../static/vibe.PNG';

/**Section component generated for <Home /> accepts 'content' and 'section'
 * to specify where and what content should be generated.
 * useEffect used on inital render only to format 'content' data to a more friendly
 * format for dynamically displaying.
 */

const Section = ({content, section}) => {
    const [contentObj, setContentObj] = useState({})
    const [headingObj, setHeadingObj] = useState({})
    useEffect(() => {
        /**Formats content recieved to a more friendly format */
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

    /**The structures of section vary based on design, conditional used to validate what
     * 'section' and return the appropriate component format.
     */
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