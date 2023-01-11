import "./App.css";
import {
  Typography,
  Grid,
  Box,
  Stack,
  Item,
  Button,
  ListItemText,
  Link,
} from "@mui/material";
import Projects from "./Components/Projects";
import Homepage from "./Components/Homepage";
import Navigation from "./Components/Navigation";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <>
      <Grid>
        <Navigation></Navigation>
        <Homepage></Homepage>
        <Projects></Projects>
        <AboutMe></AboutMe>
      </Grid>
    </>
  );
}

export default App;
