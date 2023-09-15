import React from "react";
import {
  Box,
  Container,
  Typography,
  FormControl,
  TextField,
  IconButton,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";
import Auth_btn from "../../components/Buttons/Auth_btn";
import jumpingPlant from "../../assets/animations/Jumpingplant_anim.json";
import Leafscan from "../../assets/animations/leafscan_anim.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const TextFieldstyled = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 3px solid #325721;
    }
  }
`;

const OutlinedInputstyled = styled(OutlinedInput)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 3px solid;
    }
  }
`;

const Signup_pg = () => {
  const location = useLocation();
  const { email } = location.state || {};
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right,#DDE8C1 , #3ea886, #DDE8C1)",
          height: "100vh",
          p: 4,
        }}
      >
        <Container
          sx={{
            mt: 4,
            height: "34rem",
            width: "45rem",
            backgroundColor: "white",
            border: "5px solid #3ea886",
            borderRadius: "20px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "row", mt: 1 }}>
                <img src={logo} style={{ width: "10%" }} />
                <Typography
                  sx={{ mx: 1, mt: 1.5, color: "black", fontSize: "1.8em" }}
                >
                  ßOTANÌCA
                </Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{ letterSpacing: "0.01em", mt: 1, color: "#3ea886" }}
              >
                Create Your New Account
              </Typography>
              <Typography
                variant="h4"
                sx={{ letterSpacing: "0.01em", mb: 3, color: "#4d5980" }}
              >
                Instant Plant Recognition at Your Fingertips!!{" "}
              </Typography>
              <Box>
                <TextFieldstyled
                  sx={{ m: 1 }}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
                <TextFieldstyled
                  sx={{ m: 1 }}
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Box>
              <Box>
                <TextFieldstyled
                  sx={{ m: 1, width: "30ch" }}
                  id="outlined-basic"
                  label="Email Address"
                  value={email}
                  variant="outlined"
                />
              </Box>
              <Box>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInputstyled
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Auth_btn label={"Sign Up"} />
                <Typography
                  variant="h6"
                  sx={{
                    letterSpacing: "0.01em",
                    mb: 3,
                    color: "#4d5980",
                    mt: 4,
                    mr: 1,
                  }}
                >
                  Or already have an account?{" "}
                </Typography>
                <Typography
                  variant="h5"
                  onClick={() => navigate("/auth/login")}
                  sx={{
                    letterSpacing: "0.01em",
                    mb: 3,
                    color: "purple",
                    mt: 4,
                    mr: 1,
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Login{" "}
                </Typography>
                <Lottie
                  style={{ width: "25%", marginTop: -100, marginLeft: 30 }}
                  animationData={Leafscan}
                  loop
                  autoplay
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Signup_pg;
