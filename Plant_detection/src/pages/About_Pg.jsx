import { Box } from '@mui/system'
import React from 'react'
import MainBG from '../assets/images/About_bg.png'
import About_card2 from '../components/Cards/About_card2'
import About_card1 from '../components/Cards/About_card1'
import image1 from '../assets/images/Step_1.png'
import image2 from '../assets/images/Step_2.png'
import image3 from '../assets/images/Step_3.png'

const About_Pg = () => {

    const title1 = 'Dive into the world of botanical knowledge and discover the details with Botanica.'

    const title2 = 'Take picture of the plant and upload it to know the details and benefits'

    const title3 = 'Effortlessly uncover comprehensive plant information with a seamless experience.'

    const colour1 = '#F0AC49'
    const colour2 = 'green'

  return (
    <Box sx={{height:'100vh'}}>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Box sx={{mr:-10, zIndex:10}}>
        <About_card2 img={image2} title={title2} colour1={colour2} colour2={colour1} colour3={colour1}/>
        </Box>
        <About_card1 img={image1} title={title1} colour1={colour1} colour2={colour2} colour3={colour1}/>
        <Box sx={{ml:-10, zIndex:10}}>
        <About_card2 img={image3} title={title3} colour1={colour1} colour2={colour1} colour3={colour2}/>
        </Box>
      </Box>
    </Box>
  )
}

export default About_Pg