import { useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MainBg from "../assets/images/main_bg.jpg";
import SideBg from "../assets/images/main_bg2.png";

const Section1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [text, setText] = useState("ßOTANÌCA");
  const [subtext, setSubtext] = useState(
    "Medicinal Plants and Drugs Identification Platform"
  );
  const [text2, setText2] = useState(" ");
  const [subtext2, setSubtext2] = useState(" ");
  const [textOpacity, setTextOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const [scale2, setScale2] = useState(1);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const newScale = 1 + scrollValue * 0.0008;
      const newScale2 = 1 + scrollValue * 0.001;
      const newOpacity = 1.2 - scrollValue * 500;
      const newOpacity2 = 1.6 - scrollValue * 0.001;

      if (scrollValue > 450) {
        setText("");
        setTextOpacity(newOpacity);
      } else {
        setText("ßOTANÌCA");
        setTextOpacity(newOpacity);
      }

      if (scrollValue > 450) {
        setSubtext("");
        setTextOpacity(newOpacity);
      } else {
        setSubtext("Medicinal Plants and Drugs Identification Platform");
        setTextOpacity(newOpacity);
      }

      if (scrollValue > 450) {
        setText2(
          "Harnessing Machine Learning to Identify Nature's Healing Treasures Online"
        );
        setTextOpacity(newOpacity2);
      } else {
        setText2("");
        setTextOpacity(newOpacity2);
      }

      // if (scrollValue > 450) {
      //   setSubtext2('Botanica is your gateway to exploring the diverse world of medicinal plants. Our website leverages the power of machine learning to help you effortlessly identify and learn about various medicinal plants and raw materials.');
      //   setTextOpacity(newOpacity2);
      // } else {
      //   setSubtext2('');
      //   setTextOpacity(newOpacity2);
      // }

      setScale(newScale);
      setScale2(newScale2);

      const stickyStopThreshold = 1200;

      // if(scrollValue > 1200) {
      //   window.scrollBy(0,900)
      // }

      setIsSticky(scrollValue <= stickyStopThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "auto",
        m: 0,
        p: 0,
        position: isSticky ? "sticky" : "relative",
        top: isSticky ? 0 : "auto",
        zIndex: isSticky ? 100 : "auto",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          position: "relative",
          scrollSnapAlign: "center",
          m: 0,
          p: 0,
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "relative", m: 0, p: 0 }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "75%",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  position: "absolute",
                  top: isMobile ? "5%" : "8%",
                  left: isMobile ? "20%" : "11%",
                  fontSize: isMobile ? "3em" : "6em",
                  letterSpacing: "0.04em",
                  color: "#fff",
                  textShadow: "7px 8px #325721",
                  opacity: textOpacity,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Box>{text}</Box>
                <Box
                  sx={{
                    fontSize: isMobile ? "0.2em" : "0.4em",
                    textShadow: "2px 2px black",
                    alignSelf: "center",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {subtext}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "75%",
                  textAlign: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: isMobile ? "25%" : "20%",
                  left: isMobile ? "20%" : "11%",
                  fontSize: isMobile ? "2em" : "3em",
                  color: "#fff",
                  textShadow: "3px 5px #325721",
                  opacity: textOpacity,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Box>{text2}</Box>
                {/* <Box sx={{fontSize: isMobile ? '0.3em' : '0.8em',mt:4,textShadow:'1.5px 1.5px #5a6336',alignSelf:'center',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
                  {subtext2}
                </Box> */}
              </Box>
            </Box>
            <Box sx={{ position: "absolute", zIndex: -10, m: 0 }}>
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  transform: `scale(${scale})`,
                  transition: "transform 0.3s ease",
                  marginLeft: isMobile ? "-10%" : "0%",
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
                  objectFit: "cover",
                  transform: `scale(${scale2 * 1})`,
                  transition: "transform 0.3s ease",
                  marginLeft: isMobile ? "-10%" : "-5%",
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
