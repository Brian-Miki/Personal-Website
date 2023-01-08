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

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Homepage></Homepage>
      <Projects></Projects>
    </>
  );
}

export default App;
