import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Embrace the dark mode trend for a sleek look
    primary: {
      main: "#419345", // Use a bold pink for a pop of color
    },
    secondary: {
      main: "#419345", // Complement with a warm amber for secondary elements
    },
    background: {
      default: "#000000", // Deep blue for a striking default background
      paper: "#3333333", // A lighter shade of blue for paper elements
    },
    text: {
      primary: "#ffff", // Keep text white for contrast and readability
      secondary: "#ffff", // Maintain light gray for secondary text
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      letterSpacing: "-0.01562em",
    },
    // ... other typography settings
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px", // Rounded buttons for a modern touch
          padding: "10px 25px",
        },
      },
    },
    // ... other component overrides
  },
});
export default theme;
