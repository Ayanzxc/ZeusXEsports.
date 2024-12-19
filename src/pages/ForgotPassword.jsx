import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after reset
import { auth } from "../Firebase"; // Import Firebase authentication methods
import { sendPasswordResetEmail } from "firebase/auth"; // Import the Firebase password reset method
import "./style.css"; // Import your styles
import logo from "../pictures/Zeus_half.png"; // Add your logo
import { Typography } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState(""); // State to store email input
  const [error, setError] = useState(""); // To handle error messages
  const [message, setMessage] = useState(""); // Success message after reset link is sent
  const navigate = useNavigate(); // Navigate to other pages after reset

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Send password reset email using Firebase
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Success - Show the success message and clear any errors
        setMessage("Password reset email sent! Please check your inbox.");
        setError("");
      })
      .catch((error) => {
        // Error - Set error message
        setError("Failed to send password reset email. Please try again.");
        setMessage("");
        console.error(error.message);
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
       
        {/* Right Section */}
        <div className="right-section">
          <h2>Forgot Password</h2>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Send Reset Email
            </button>
          </form>

          <p className="forgot-password" onClick={() => navigate("/login")}>
            Back to Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;