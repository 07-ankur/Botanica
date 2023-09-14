import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import MainBG from "../assets/images/Homebg2.png";
// import logo from "../assets/images/logo.png";
import Navbar from "../components/Navbar";
import Auth_btn from "../components/Buttons/Auth_btn";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import About_Pg from "./About_Pg";

const Home_Pg = () => {
  return (
    <Box>
      <Navbar/>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "160vh",
          mx: "10%",
          py: "4%",
        }}
      >
        <Typography
          sx={{ color: "#DDE8C1", ml: 10,mb:2 }}
          variant="h4"
        >
          Bringing Clarity to the World of Medicinal Plants...
        </Typography>
        <Typography
          sx={{ color: "white", textShadow: "2px 3px green", ml: -15, mb:2 }}
          variant="h1"
        >
          Connecting You to Herbal Wellness !!
        </Typography>
        <Typography
          sx={{ color: "#DDE8C1", ml: -50 }}
          variant="h4"
        >
          "Instant Plant Recognition at Your Fingertips"
        </Typography>
        <Box sx={{mt:2, ml:-60}}>
        <Auth_btn label={<span style={{ fontSize: "1.2em" }}>Let's Identify <ImageSearchIcon sx={{mt:0.5}}/></span>} />
        </Box>
      </Box>
      <Box sx={{ position: "absolute", zIndex: -10, bottom: "0.1%" }}>
        <img src={MainBG} style={{ width: "100%", opacity: 1 }}></img>
      </Box>
      <About_Pg/>
    </Box>
  );
};

export default Home_Pg;
