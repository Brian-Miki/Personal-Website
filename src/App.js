import logo from "./logo.svg";
import "./App.css";
import { Typography, Grid, Card, CardMedia, Button } from "@mui/material";
import Profile from "./Profile.png";

function App() {
  return (
    <div style={{ textAlign: "center" }} className="text">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Typography variant="h2">
          <Grid item xs={12}>
            <p>Hi, I'm Brian</p>
          </Grid>
          <Grid item xs={12}>
            <p>An Aspiring Product Manager</p>
          </Grid>
        </Typography>
      </Grid>
    </div>
  );
}

export default App;
