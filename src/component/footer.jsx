import React from 'react';
import './component_style.css'; // Import the CSS
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from './TikTokIcon';  // Import the TikTokIcon

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Zeus Esports is the ultimate destination for gaming and relaxation. Visit us to experience top-notch services!</p>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/zeusxesports" target="_blank" rel="noopener noreferrer" style={{ width: "40px" }}>
                            <FacebookIcon color="gold" /> {/* Facebook Icon */}
                        </a>
                        <a href="https://www.instagram.com/zeusxesportscafe" target="_blank" rel="noopener noreferrer" style={{ width: "40px" }}>
                            <InstagramIcon color="gold" /> {/* Instagram Icon */}
                        </a>
                        <a className='tiktok-icon' href="https://www.tiktok.com/@zeusxesports" target="_blank" rel="noopener noreferrer" style={{ width: "40px" }}>
                            <TikTokIcon color="white" /> {/* TikTok Icon with pink color */}
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: info@zeusesports.com</p>
                    <p>Phone: +63 123 456 7890</p>
                    <p>Location: Davao City, Philippines</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Zeus Esports. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;