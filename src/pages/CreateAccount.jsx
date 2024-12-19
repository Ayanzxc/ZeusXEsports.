import { colors, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaTiktok, FaInstagram } from 'react-icons/fa';
import './style.css';
import logo from '../pictures/zeus_logo.png';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import backgroundImage from '../pictures/background.jpg';

function CreateAccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Account created:", userCredential.user.email);
                navigate("/home");
            })
            .catch((error) => {
                setError("Failed to create an account. Please try again.");
                console.error("Error creating account:", error.message);
            });
    };

    const handleGoBack = () => {
        navigate("/login");
    };

    return (
        <div className="container">
            <div className="text_home">
                <h1 style={{ fontSize: '20px' }}>
                    YOUR ULTIMATE DESTINATION FOR GAMING AND RELAXATION
                </h1>
                <div className="home_text1">ZEUS</div>
                <div className="home_text2">ESPORTS</div>
                <h1>
                    THE FIRST ALL-VIP AND NVIDIA GEFORCE CERTIFIED RTX 3060 INTERNET CAFE AND COFFEE SHOP IN DAVAO CITY
                </h1>
                <div className="sign_up_text">
                    <h1 style={{ color: 'gold' }}>SIGN UP</h1>
                    <h1>TO KNOW MORE ABOUT US!</h1>
                    <KeyboardDoubleArrowRightIcon sx={{ color: 'gold', fontSize: 50, marginTop: '3px' }}> </KeyboardDoubleArrowRightIcon>
                </div>
            </div>

            <div className="login-page">
                <div className="login-container">
                    <div className="right-section">
                        <div className="login_header">
                            <img src={logo} alt="zeus_icon" className="zeus-logo" />
                            <h2>CREATE ACCOUNT</h2>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    placeholder="EMAIL"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                            <div className="input-group password-group">
                                <input
                                    type="password"
                                    placeholder="CONFIRM PASSWORD"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="login-button">CREATE ACCOUNT</button>
                            <button type="button" className="go-back-button" onClick={handleGoBack}>GO BACK TO LOGIN</button>
                            <p className="forgot-password">or sign up with</p>
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

export default CreateAccount;