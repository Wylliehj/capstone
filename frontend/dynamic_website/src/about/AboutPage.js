import React, {useState, useEffect} from 'react'
import Api from '../api'
import './About.css'

/**Generated from /about route, useEffect triggers only on initial render and 
 * requests api for 'hours' about restaurant. Bootstrap used to create a table for 
 * these hours and other restaurant like location is statically generated.
 */

const AboutPage = () => {
    const [hours, setHours] = useState([])

    useEffect(() => {
        async function getInfo() {
            let hoursRes = await Api.getHours()
            setHours(hoursRes.data)
        }
        getInfo()
    }, [])

    return(
        <div className='about-page'>
            <div className='title'>
                <h1 style={{color: 'black'}}>About Us!</h1>
            </div>
            <div style={{color: 'black'}} className='section'>
                <h3>Hours</h3>
                <table className="table table-striped">
                    <thead>
                        <tr scope='col'></tr>
                        <tr scope='col'></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>Monday</th>
                            <td>{hours.monday}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Tuesday</th>
                            <td>{hours.tuesday}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Wednesday</th>
                            <td>{hours.wednesday}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Thursday</th>
                            <td>{hours.thursday}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Friday</th>
                            <td>{hours.friday}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Saturday</th>
                            <td>{hours.saturday}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Sunday</th>
                            <td>{hours.sunday}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{color: 'black'}} className='section'>
                <h3>Store Information</h3>
                <h5>Phone Number : (727)-555-5555</h5>
                <h5>Address : 123 Main st Dunedin, FL 34698</h5>
                <h5>Email : contactus@thebestaurant.com</h5>
            </div>
        </div>
    )
}

export default AboutPage;