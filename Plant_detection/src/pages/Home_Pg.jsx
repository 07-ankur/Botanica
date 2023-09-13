import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import MainBG from "../assets/images/Homebg.png";
import logo from "../assets/images/logo.png";

const Home_Pg = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <img
          style={{ zIndex: 100, width: "10%", height: "10%" }}
          src={logo}
          alt="Logo"
        />
        <Typography sx={{ mt: 5 }} variant="h2">
          ßOTANÌCA
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          width: "160vh",
          mt:"-5%",
          mx: "10%",
          py: "5%",
        }}
      >
        <Typography
          sx={{ color: "white", textShadow: "1px 2px black", ml: 20 }}
          variant="h4"
        >
          Connecting You to Herbal Wellness!!
        </Typography>
        <Typography
          sx={{ color: "white", textShadow: "1px 2px green", ml: -5 }}
          variant="h1"
        >
          Connecting You to Herbal Wellness!!
        </Typography>
        <Typography
          sx={{ color: "white", textShadow: "1px 2px black", ml: -20 }}
          variant="h4"
        >
          Connecting You to Herbal Wellness!!
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", zIndex: -10, bottom: "0.1%" }}>
        <img src={MainBG} style={{ width: "100%", opacity: 1 }}></img>
      </Box>
    </Box>
  );
};

export default Home_Pg;
