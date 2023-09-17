import React from 'react'
import { Box } from '@mui/system';
import logo from '../assets/images/logo.png'

const Logo = (width, height) => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "15px",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        width:width || '2.5em',
        height:height || '2em'}}>
      <img src={logo}/>
    </Box>
  )
}

export default Logo;