import React from 'react';
import './style.css';
import img_loc from '../pictures/zeus_loc.png';
import logo from '../pictures/Zeus_logo.png';


function Location() {
    return (
        <><div className='LOGO'>
        <img src={logo} alt="zeus_logo" />
           <h1 className='zeus_logotext'> ZEUS ESPORTS</h1>
        </div>
        
        
        <div className="box">
            <div className='loc_container'>
                <div className="map-container">
                    <iframe
                        title="ZeusX Esports Cafe Location"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126702.52393198403!2d125.5302835!3d7.0732593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96dffe4b363e3%3A0xa777fb3571b55e1b!2sZeusX%20Esports%20and%20Cafe!5e0!3m2!1sen!2sph!4v1715223783179!5m2!1sen!2sph"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>
                <div className="info-box">
                <h1 className="title">ZEUS X ESPORTS CAFE</h1>
                <p className="address">3A-3C, 3rd Floor, Barangay, Emilio Jacinto Street</p>
                
                <img
                    src={img_loc} 
                    alt="Zeus X Logo"
                    className="zeus-img"
                />
                </div>
                
            </div>
        </div>
    
            
            
        </>
    );
}

export default Location;