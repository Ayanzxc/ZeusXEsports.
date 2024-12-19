import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import "./style.css";
import logo from '../pictures/Zeus_logo.png';

// Game images
import valorantImg from "../pictures/valorant.jpg";
import dota2Img from "../pictures/dota.jpg";
import fortniteImg from "../pictures/fortnite.jpg";
import apexImg from "../pictures/apex.jpg";
import codImg from "../pictures/call_of_duty.jpg";
import pubgImg from "../pictures/pubg.jpg";
import overwatchImg from "../pictures/overwatch.jpg";
import lolImg from "../pictures/lol.jpg";
import minecraftImg from "../pictures/mc.jpg";

const games = [
  { title: "Valorant", image: valorantImg, link: "https://playvalorant.com" },
  { title: "Dota 2", image: dota2Img, link: "https://www.dota2.com" },
  { title: "Fortnite", image: fortniteImg, link: "https://www.epicgames.com/fortnite" },
  { title: "Apex Legends", image: apexImg, link: "https://www.ea.com/games/apex-legends" },
  { title: "Call of Duty", image: codImg, link: "https://www.callofduty.com" },
  { title: "PUBG", image: pubgImg, link: "https://www.pubg.com" },
  { title: "Overwatch", image: overwatchImg, link: "https://playoverwatch.com" },
  { title: "League of Legends", image: lolImg, link: "https://www.leagueoflegends.com" },
  { title: "Minecraft", image: minecraftImg, link: "https://www.minecraft.net" },
];

function Games() {
  return (
    <><div className='LOGO' style={{
      
      
    }}>
      <img src={logo} alt="zeus_logo" />
      <h1 className='zeus_logotext'> ZEUS ESPORTS</h1>
    </div>
    
    <div className="games-container" >
        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            fontSize: "24px", // Adjust the font size
            fontWeight: "bold", // Make it bold
            color: "#ffffff", // Set the text color to white
            textAlign: "center", // Center-align the text
            marginBottom: "20px", // Space below the title
            fontFamily:'sans-serif'
          }}
          className="games-title"
        >
          ZEUS X IS CAPABLE OF HANDLING ANY GAME'S WITH HIGH SETTINGS
        </Typography>

        {/* Grid Layout */}
        <Grid container spacing={2} className="games-grid">
          {games.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className="game-card" sx={{ maxWidth: "100%" }}>
                <a href={game.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      display: "flex", // Flexbox layout
                      justifyContent: "center", // Center horizontally
                      alignItems: "center", // Center vertically
                      width: "100%", // Full width of the container
                      height: "150px", // Adjusted height for the container
                      borderRadius: "8px", // Rounded corners
                      overflow: "hidden", // Ensure content does not overflow
                    }}
                  >
                    <img
                      src={game.image}
                      alt={game.title}
                      className="game-image"
                      style={{
                        width: "375px", // Image takes full width of the container
                        height: "100%", // Image fills the full height of the container
                        objectFit: "fill", // Ensures image fills container without distortion
                        objectPosition: "center", // Centers the image if it is cropped
                      }} />
                  </div>
                </a>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div></>
  );
}

export default Games;