import { Box } from '@mui/system'
import React from 'react'
import { Typography } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const About_card1 = (props) => {

  return (
    <Box sx={{width: "19em",
    borderRadius: "25px",
    height: "24em",
    mt:4,
    mb: 8,
    mx: 4,
    p: 3,
    pb:10,
    backgroundColor: "#fff",
    boxShadow: "0 0 20px green" ,}}>
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Typography variant='h4' sx={{mb:1}}>Welcome to Botanica</Typography>
        <img src={props.img} style={{width:'60%', marginBottom:10,filter: 'drop-shadow(0 0 0.55rem rgb(255, 217, 0))' }}/>
        <Typography sx={{textAlign:'center'}} variant='h5'>
            {props.title}
        </Typography>
        <Box sx={{display:'flex', alignItems:'row'}}>
        <Box sx={{width:'0.6em',height:'0.6em', bgcolor:`${props.colour1}`, border:`1px solid ${props.colour1}`, borderRadius:'100%',mx:0.5,my:1}}/>
        <Box sx={{width:'0.6em',height:'0.6em', bgcolor:`${props.colour2}`, border:`1px solid ${props.colour2}`, borderRadius:'100%',mx:0.5,my:1}}/>
        <Box sx={{width:'0.6em',height:'0.6em', bgcolor:`${props.colour3}`, border:`1px solid ${props.colour3}`, borderRadius:'100%',mx:0.5,my:1}}/>
        <Box/>
        <Box/>
        </Box>
        <Box sx={{display:'flex', flexDirection:'row'}}>
        <Box sx={{width:'7em',height:'3.5em', bgcolor:`#84914B`, borderRadius:'5%',mx:2,my:1,p:1, textAlign:'center', boxShadow: "0 0 20px olive"}}>
          <UploadIcon sx={{color:'white', fontSize:'1.3em'}}/>
          <Typography sx={{color:'white'}} variant='h6'>Upload Image</Typography>
        </Box>
        <Box sx={{width:'6.5em',height:'3.5em', bgcolor:`#84914B`, boxShadow: "0 0 20px olive", borderRadius:'5%',mx:2,my:1,p:1,textAlign:'center'}}>
          <CameraAltIcon sx={{color:'white', fontSize:'1.3em'}}/>
          <Typography sx={{color:'white'}} variant='h6'>Take Picture</Typography>
        </Box>
        </Box>
        <Box/>
      </Box>
      
    </Box>
  )
}

export default About_card1;