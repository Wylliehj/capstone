import React, {useState, useEffect} from 'react';
import './Section.css';

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
    console.log(contentObj)
    console.log(headingObj)

    return(
        <div className='section' style={{color: 'black'}}>
            <div className={headingObj.locId}>
                <h4 className={headingObj.locId}>{`"${headingObj.content}"`}</h4>
            </div>
            <div className={contentObj.locId}>
                <p>{contentObj.content}</p>
            </div>
            <div>
                <img></img>
            </div>
        </div>
    )
}

export default Section;