import logo from "./logo.svg";
import "./App.css";
import { Typography, Grid, Card, CardMedia } from "@mui/material";
import Profile from "./Profile.png";

function App() {
  return (
    <div>
      <Grid container alignItems="center" direction="column">
        <Typography variant="h1">Hi, I'm Brian</Typography>;
        <Typography variant="h2">An Aspring Product Manager</Typography>;
        <CardMedia>image = {Profile}</CardMedia>
      </Grid>
    </div>
  );
}

export default App;
