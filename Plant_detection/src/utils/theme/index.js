import { createTheme } from "@mui/material";
import typography from "./typography";

export const theme = createTheme({
  palette: {
    mode:'light',
    primary: {
      main: "#325721",
    },
    background: {
    //   default: "#E7E8EF",    
    //   default: "#142F3A",
      default: "#F5F6F8",
    },
    text: {
      secondary: "#AAAAAA",
    },
  },
  typography,
});