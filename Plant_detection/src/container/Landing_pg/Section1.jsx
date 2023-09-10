// import React from 'react'
import { Box, Typography } from "@mui/material";
import topbg from '../../assets/images/top_bg.png';
import logo from '../../assets/images/logo.png'
import Lottie from "lottie-react";
import topanim from "../../assets/animations/topbg_anim.json"
// import topanim2 from "../../assets/animations/topbg2_anim.json"


const Section1 = () => {
  return (
    <>
    <Box>
        <img 
          src={topbg}
          alt=" "
          style={{position:'absolute', top:0, left:0,width:'20%',zIndex:-10}}
        />
        <Lottie 
          animationData={topanim}
          loop
          autoplay
          style={{position:'absolute', top:180, left:-98,width:'30%'}}
        />
        {/* <Lottie 
          animationData={topanim2}
          loop
          autoplay
          style={{position:'absolute', top:0, right:0,width:'30%'}}
        /> */}
      </Box>
      <Box sx={{display:'flex', flexDirection:'row'}}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "15px",
        mt: 4,
        ml: 22,
        backgroundColor: "#ffffff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        width:'6%'}}>
        <img 
          style={{zIndex:100}}
          src={logo}
          alt="Logo"
        />
      </Box>
      <Typography sx={{mt:6,mx:2}} variant="h2">Plant</Typography>
      </Box>
      <Box sx={{border:'2px solid #879452',bgcolor:'#879452', width:'400px',height:'400px',borderRadius:'50%',position:'absolute',top:300,right:20,zIndex:-10}}>
        <Box sx={{border:'2px solid #F5F6F8', width:'250px', height:'250px', borderRadius:'50%',ml:7,mt:7}}/>
      </Box>
      </>
  )
}

export default Section1