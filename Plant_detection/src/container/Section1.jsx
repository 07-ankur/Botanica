import { useEffect } from 'react';
import { Box } from '@mui/material';
import MainBg from '../assets/images/main_bg.jpg';
import SideBg from '../assets/images/main_bg2.png';

const Section1 = () => {
  useEffect(() => {
    const mainBg = document.getElementById('main-bg');
    const sideBg = document.getElementById('side-bg');

    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      // Adjust the scale factor based on the desired parallax effect
      const scale = 1 + scrollValue * 0.0005;

      // Apply the scale to the images
      mainBg.style.transform = `scale(${scale})`;
      sideBg.style.transform = `scale(${scale})`;
    });

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Box sx={{ height: '100vh', overflow: 'hidden', m: 0, p: 0 }}>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          position: 'relative',
          scrollSnapAlign: 'center',
          m: 0,
          p: 0,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'relative', m: 0, p: 0 }}>
          <Box>
            <Box sx={{ position: 'absolute', top:'20%', left:'45%', fontSize: '5em', color: '#fff' }}>
              Plant
            </Box>
            <Box sx={{ position: 'absolute', zIndex: -10, m: 0 }}>
              <img
                style={{width:'100%',objectFit:'cover'}}
                id="main-bg"
                src={MainBg}
                height="30%"
                alt="Main Background"
              ></img>
            </Box>
            <Box>
              <img
                id="side-bg"
                src={SideBg}
                style={{objectFit:'cover',marginLeft:'-5%'}}
                alt="Side Background"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
