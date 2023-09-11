import { Box, Typography } from "@mui/material";
// import React from 'react'
import Plant from "../assets/images/Plant.png";

const Section3 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        bgcolor: "#879452",
        height: "130vh",
        mt: 70
      }}
    >
      <Box>
        <Box sx={{ display: "flex", flexDirection: "row", mx:5, my:5 }}>
          <Box
            sx={{
              backgroundColor: "#EFAC48",
              border: "2px solid #EFAC48",
              borderRadius: "50%",
              height: "60px",
              width: "60px",
            }}
          />
          <Typography variant="h2" sx={{color:'#fff', ml:'-25px', textShadow:'2px 2px black'}}>Overview</Typography>
        </Box>
        <Box sx={{m:2, p:4}}>
        <Box>
        <Typography variant="h5" sx={{color:'#F6F5F8'}}>
          India's rich floral diversity holds a treasure trove of medicinal plants, a cornerstone of Ayurvedic Pharmaceutics. However, a pressing issue is the accurate identification of these plants.
        </Typography>
        </Box>
        <Box>
        <Typography variant="h5" sx={{color:'#F6F5F8',mx:1,my:1}}>
        However, the identification of these plants presents a pressing challenge. Many raw drugs share the same name in the market, causing confusion and misidentification. Collectors and traders struggle due to variations in morphology, seasonal shifts, and geographical differences. Additionally, high demand strains resources, fostering practices like adulteration and substitution, eroding trust in the efficacy of Ayurvedic medicine.
        </Typography>
        </Box>
        <Box>
        <Typography variant="h4" sx={{color:'#F6F5F8',my:5, textShadow:'1px 1px #EFAC48'}}>
        Botanica is your online resource for effortlessly identifying different medicinal plants and raw materials. Explore the world of medicinal plants from the comfort of your web browser.
        </Typography>
        </Box>
        </Box>
      </Box>
      <Box flex={1}>
        <img src={Plant} alt=" " />
        {/* <Box sx={{border:'2px solid #EFAC48', position:'relative', top:'2rem',width:'80px', height:'80px', borderRadius:"50%"}}/>
        <Box sx={{border:'2px solid #ffffff', position:'relative', left:'1rem',width:'80px', height:'80px', borderRadius:"50%"}}/> */}
      </Box>
    </Box>
  );
};

export default Section3;
