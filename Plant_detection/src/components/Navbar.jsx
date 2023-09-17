import {
    AppBar,
    Container,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import React from "react";
  import useScrollPosition from "./Hooks/useScrollPosition";
  import { useNavigate } from "react-router-dom";
  import LinkButton from "./Buttons/Link_btn";
import Logo from "./Logo";
import { Box } from "@mui/system";
  
  
  const Navbar = (props) => {
  
    const sp = props.sp || 0;
  
    const navigate = useNavigate();
  
    const scrollPosition = useScrollPosition();
  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);

  
    return (
      <AppBar
        elevation={0}
        sx={{
          py: 1,
          height: 82,
          bgcolor: scrollPosition > sp ? "rgba(221,232,193,.7)" : "transparent",
          backdropFilter: scrollPosition > 10 && "blur(60px)",
        }}
      >
        <Container
          sx={{
            [theme.breakpoints.up("lg")]: {
              maxWidth: "1380px!important",
            },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {/* Logo */}
            <Box sx={{display:'flex', alignItems:'row',mt:0.5}}>
            <Logo width='2.8em' height='3em'/>
            <Typography sx={{mx:1.5,color:'black',mt:1,fontSize:'1.8em'}}>ßOTANÌCA</Typography>
            </Box>
  
            {/* Links */}
            {!isMobile && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={20}
                sx={{ flex: 1, mt:0.5 }}
                flexWrap="wrap"
              >
                <LinkButton
                  // hover="#ebf1da"
                  aria-owns={open ? "Contents" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography sx={{fontSize:'1.3em'}}>Home</Typography>
                </LinkButton>
                <LinkButton 
                  // hover="#DDE8C1"
                  aria-owns={open ? "Contents" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography sx={{fontSize:'1.3em'}}>About</Typography>
                </LinkButton>
                
                <LinkButton 
                  hover="#DDE8C1"
                  aria-owns={open ? "About" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography sx={{fontSize:'1.3em'}}>Identification</Typography>
                </LinkButton>
              </Stack>
            )}
          </Stack>
        </Container>
      </AppBar>
    );
  };
  
  export default Navbar;
  