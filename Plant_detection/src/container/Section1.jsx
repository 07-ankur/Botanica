import { useEffect, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import MainBg from '../assets/images/main_bg.jpg';
import SideBg from '../assets/images/main_bg2.png';

const Section1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [text, setText] = useState('Plant');
  const [text2, setText2] = useState('Problem Statement');
  const [textOpacity, setTextOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const [scale2, setScale2] = useState(1);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const newScale = 1 + scrollValue * 0.0005;
      const newScale2 = 1 + scrollValue * 0.0010;
      const newOpacity = 1 - scrollValue * 0.01;
      const newOpacity2 = 1 - scrollValue * 0.002;

      if (scrollValue > 150) {
        setText('');
        setTextOpacity(newOpacity);
      } else {
        setText('Plant');
        setTextOpacity(newOpacity);
      }

      if (scrollValue > 150) {
        setText2('');
        setTextOpacity(newOpacity2);
      } else {
        setText2('Problem Statement');
        setTextOpacity(newOpacity2);
      }

      setScale(newScale);
      setScale2(newScale2);

      const stickyStopThreshold = 750;

      setIsSticky(scrollValue <= stickyStopThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        overflow: 'auto',
        m: 0,
        p: 0,
        position: isSticky ? 'sticky' : 'relative',
        top: isSticky ? 0 : 'auto',
        zIndex: isSticky ? 100 : 'auto',
      }}
    >
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
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: isMobile ? '5%' : '10%',
                  left: isMobile ? '20%' : '40%',
                  fontSize: isMobile ? '3em' : '5em',
                  color: '#fff',
                  opacity: textOpacity,
                  transition: 'opacity 0.3s ease',
                }}
              >
                {text}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: isMobile ? '25%' : '30%',
                  left: isMobile ? '20%' : '37%',
                  fontSize: isMobile ? '1.5em' : '2em',
                  color: '#fff',
                  opacity: textOpacity,
                  transition: 'opacity 0.3s ease',
                }}
              >
                {text2}
              </Box>
            </Box>
            <Box sx={{ position: 'absolute', zIndex: -10, m: 0 }}>
              <img
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  transform: `scale(${scale})`,
                  transition: 'transform 0.3s ease',
                  marginLeft: isMobile ? '-10%' : '0%', // Adjust the marginLeft for mobile
                }}
                id="main-bg"
                src={MainBg}
                alt="Main Background"
              />
            </Box>
            <Box>
              <img
                id="side-bg"
                src={SideBg}
                style={{
                  objectFit: 'cover',
                  transform: `scale(${scale2 * 1})`,
                  transition: 'transform 0.3s ease',
                  marginLeft: isMobile ? '-10%' : '0%', // Adjust the marginLeft for mobile
                }}
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
