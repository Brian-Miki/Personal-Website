import * as React from "react";
import { Typography, Grid, Box, Stack, Item, Button } from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Email,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";

function Homepage() {
  return (
    <>
      <div>
        <Box
          sx={{
            width: "80%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid>
            <Grid item xs={8} marginTop={40}>
              <Typography variant="h1">Hi, I am Brian Miki. </Typography>
              <Typography variant="b1" style={{ fontSize: 48 }}>
                A product manager who empowers others.
              </Typography>
              <br />
              <Typography variant="b1" style={{ fontSize: 48 }}>
                Prev @ Unity
              </Typography>
              <br />
              <a href="https://www.linkedin.com/in/brian-miki/">
                <LinkedIn color="primary" style={{ fontSize: 48 }}></LinkedIn>
              </a>
              <a href="https://github.com/Brian-Miki">
                <GitHub color="primary" style={{ fontSize: 48 }}></GitHub>
              </a>
              <a href="bmiki5508@gmail.com">
                <Email color="primary" style={{ fontSize: 48 }}></Email>
              </a>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          marginTop: "250px",
        }}
      >
        <div>
          <Typography variant="b1" style={{ fontSize: 48 }}>
            Scroll down to see my work!
            <KeyboardDoubleArrowDown
              style={{ fontSize: 48 }}
            ></KeyboardDoubleArrowDown>
          </Typography>
        </div>
      </Box>
    </>
  );
}

export default Homepage;