import React from 'react';
import './style.css';
import { Stack, Typography } from '@mui/material';
import img1 from '../pictures/img1.png';
import img2 from '../pictures/img2.png';
import img3 from '../pictures/img3.png';
import img4 from '../pictures/img4.png';
import img5 from '../pictures/img5.png';
import logo from '../pictures/Zeus_logo.png';




function Home() {
    return (    
        
            <><div className='LOGO'>
                <img src={logo} alt="zeus_logo" />
                <h1 className='zeus_logotext'> ZEUS ESPORTS</h1>
            </div>

            <div className="box">
                <Typography variant="h5" className='home-title'>
                    THE FIRST ALL VIP and NVIDIA GeForce Certified RTX 3060 Internet Cafe and Coffee Shop in Davao City
                </Typography>
                <p>
                    “Our Zeus X has developed an optimal menu for food and beverages for PC Internet cafes.
                    We serve quality meals in quick seconds<br />while you enjoy our customized PC station.”
                </p>


                <div className="home-images">
                    <img src={img1} alt="Image 1" className="image1" />
                    <img src={img2} alt="Image 2" className="image2" />
                    <img src={img3} alt="Image 3" className="image3" />
                    <img src={img4} alt="Image 4" className="image4" />
                    <img src={img5} alt="Image 5" className="image5" />
                </div>


            </div></>
                
            
       
    );
}

export default Home;