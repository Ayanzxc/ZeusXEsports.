import { Button, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";
import './component_style.css';
import { BiBorderRadius } from "react-icons/bi";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700',
    },
    secondary: {
      main: '#fff',
      light: '#F5EBFF',
      contrastText: '#47008F',
    },
  },
});

function Header() {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully.");
        navigate("/Login");
        preventBackButton();
      })
      .catch((error) => {
        console.error("Error logging out:", error.message);
      });
  };

  // Prevent back button navigation
  const preventBackButton = () => {
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", () => {
      window.history.pushState(null, "", window.location.href);
    });
  };

  useEffect(() => {
    // Apply back button prevention
    preventBackButton();
    return () => {
      // Clean up event listener when the component unmounts
      window.removeEventListener("popstate", preventBackButton);
    };
  }, []);

  return (
    <Stack className="Stack" flexDirection="row" justifyContent="flex-end" gap={2}>
      <Link className="li" to="/Home">HOME</Link>
      {/* <Link className="li" to="/About">ABOUT</Link> */}
      <Link className="li" to="/Games">GAMES</Link>
      <Link className="li" to="/Specs">SPECS</Link>
      <Link className="li" to="/Location">LOCATION</Link>
     

      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" 
        sx={{
            borderRadius: '4px',
          }}
        onClick={handleLogout}>LOGOUT</Button>
      </ThemeProvider>
    </Stack>
  );
}

export default Header;