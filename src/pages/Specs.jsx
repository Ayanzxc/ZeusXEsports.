import React from 'react';
import './style.css';
import logo1 from '../pictures/image_icon1.png';
import logo2 from '../pictures/image_icon2.png';
import { Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HeadsetIcon from '@mui/icons-material/Headset';
import ComputerIcon from '@mui/icons-material/Computer';
import BoltIcon from '@mui/icons-material/Bolt';
import MouseIcon from '@mui/icons-material/Mouse';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import logo from '../pictures/Zeus_logo.png';



function Specs() {
    return (
            <><div className='LOGO'>
            <img src={logo} alt="zeus_logo" />
            <h1 className='zeus_logotext'> ZEUS ESPORTS</h1>

             </div>
             <div className="box " style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>

                <div>
                    <div className='leftside-specs'>
                        <h1>ZEUS ESPORTS AND CAFE</h1>
                        <h2>The ultimate  VIP experience</h2>

                        <div className='leftside-image'>
                            <img src={logo1} alt="img1" />
                            <img src={logo2} alt="img1" />
                        </div>
                    </div>
                </div>

                <div className='specs-container'>
                    <div className='specs-box'>
                        <h1 className='specs-text'>SPECS</h1>
                    </div>

                    <div style={{
                        backgroundColor: "",
                        height: '200px',
                        width: '200px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 2fr)', /* 4 columns */
                        gap: "10px", /* Spacing between items */
                        justifyContent: 'center'
                    }}>

                        <div>
                            <div className='spec-icons'><RemoveRedEyeIcon sx={{ color: 'white', fontSize: '50px' }}></RemoveRedEyeIcon>
                                <h1 className='spec-text'>MSI GAMING X RTX 3060 12GB GDDR6</h1>
                            </div>
                        </div>

                        <div>
                            <div className='spec-icons'><HeadsetIcon sx={{ color: 'white', fontSize: '50px' }}></HeadsetIcon>
                                <h1 className='spec-text'>COOLER MASTER CH331</h1>
                            </div>
                        </div>

                        <div>
                            <div className='spec-icons'><ComputerIcon sx={{ color: 'white', fontSize: '50px' }}></ComputerIcon>
                                <h1 className='spec-text'>T-COOLER 16GB 3600 MHz</h1>
                            </div>
                        </div>

                        <div>
                            <div className='spec-icons'><BoltIcon sx={{ color: 'white', fontSize: '50px' }}></BoltIcon>
                                <h1 className='spec-text'>AOC 27G2SP 27IN 165Hz</h1>
                            </div>
                        </div>

                        <div>
                            <div className='spec-icons'> <MouseIcon sx={{ color: 'white', fontSize: '50px' }}></MouseIcon>
                                <h1 className='spec-text'>MSI GM20 ELITE</h1>
                            </div>
                        </div>

                        <div>
                            <div className='spec-icons'>   <KeyboardIcon sx={{ color: 'white', fontSize: '50px' }}></KeyboardIcon>
                                <h1 className='spec-text'>CUSTOM RED DRAGON RGB TKL</h1>
                            </div>
                        </div>

                        <div>
                            <div className='spec-icons'>  <DeveloperBoardIcon sx={{ color: 'white', fontSize: '50px' }}></DeveloperBoardIcon>
                                <h1 className='spec-text'>AMD RYZEN 5 5600</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div></>
            
            
        
    );
}

export default Specs;