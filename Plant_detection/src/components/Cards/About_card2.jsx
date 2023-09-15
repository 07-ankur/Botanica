import { Box } from '@mui/system'
import React from 'react'
import { Typography } from '@mui/material'

const About_card2 = (props) => {

  return (
    <Box sx={{width: "17em",
    borderRadius: "25px",
    height: "17em",
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
        <img src={props.img} style={{width:'70%', marginBottom:10, filter: 'drop-shadow(0 0 0.35rem green)' }}/>
        <Typography sx={{textAlign:'center'}} variant='h5'>
            {props.title}
        </Typography>
        <Box sx={{display:'flex', alignItems:'row'}}>
        <Box sx={{width:'0.6em',height:'0.6em', bgcolor:`${props.colour1}`, border:`1px solid ${props.colour1}`, borderRadius:'100%',mx:0.5,my:1}}/>
        <Box sx={{width:'0.6em',height:'0.6em', bgcolor:`${props.colour2}`, border:`1px solid ${props.colour2}`, borderRadius:'100%',mx:0.5,my:1}}/>
        <Box sx={{width:'0.6em',height:'0.6em', bgcolor:`${props.colour3}`, border:`1px solid ${props.colour3}`, borderRadius:'100%',mx:0.5,my:1}}/>
        <Box/>
        </Box>
        <Box/>
      </Box>
      
    </Box>
  )
}

export default About_card2;