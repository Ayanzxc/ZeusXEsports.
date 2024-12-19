import { colors, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaTiktok, FaInstagram } from 'react-icons/fa';
import './style.css';
import logo from '../pictures/zeus_logo.png';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import backgroundImage from '../pictures/background.jpg';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Logged in as:", user.email);
                navigate("/home");
            })
            .catch((error) => {
                setError("Invalid username or password.");
                console.error("Login error:", error.message);
            });
    };

    const handleCreateAccount = () => {
        navigate("/create-account");
    };

    const handleForgotPassword = () => {
        navigate("/forgot-password");
    };

    return (
       
            <div className="container">

                <div className="text_home">
                    <h1 style={{fontSize:'20px'}}>
                    YOUR ULTIMATE DESTINATION FOR GAMING AND RELAXATION
                    </h1>
                    <div className="home_text1">ZEUS</div>
                    <div className="home_text2">ESPORTS</div>
                    <h1>
                    THE FIRST ALL-VIP AND NVIDIA GEFORCE CERTIFIED RTX 3060 INTERNET CAFE AND COFFEE SHOP IN DAVAO CITY
                    </h1>
                    <div className='sign_up_text'>
                    <h1 style={{color:'gold'}}> SIGN UP </h1>
                    <h1>TO KNOW MORE ABOUT US! </h1>
                    <KeyboardDoubleArrowRightIcon sx={{ color: 'gold', fontSize: 50, marginTop: '3px' }}> </KeyboardDoubleArrowRightIcon>
                    </div>
                    
                </div>
                {/* <div className="logo1">
                    <img
                        src={logo}
                        alt="Zeus X Esports Logo - An esports cafe and coffee shop in Davao City"
                    />
                </div> */}

                <div className="login-page">
                        <div className="login-container">
                        {/* <div className="left-section">
                            <img src={logo} alt="Zeus Esports Logo" className="zeus-logo" />
                            <Typography color="white" fontSize={85} className="zeus">ZEUS</Typography>
                            <Typography variant="h4" color="gold" className="esports">ESPORTS</Typography>
                        </div> */}

                        <div className="right-section">
                            <div className='login_header'>
                            <img src={logo} alt='zeus_icon' className="zeus-logo"></img>
                            <h2>SIGN UP</h2> 
                            </div>
                           
                            
                            
                            {error && <p className="error-message">{error}</p>}
                            <form onSubmit={handleSubmit} className="login-form">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        placeholder="EMAIL"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group password-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="PASSWORD"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <span
                                        className="password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash className="eye-icon" /> : <FaEye className="eye-icon" />}
                                    </span>
                                </div>
                                <button type="submit" className="login-button">SIGN IN</button>
                                <button type="button" className="create-button" onClick={handleCreateAccount}>CREATE ACCOUNT</button>
                                <p className="forgot-password" onClick={handleForgotPassword}>Forgot password?</p>
                                <p className="forgot-password">or log in with</p>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="icon" />
                                    </a>
                                    <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer">
                                        <FaGoogle className="icon" />
                                    </a>
                                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                                        <FaTiktok className="icon" />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="icon" />
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Login;