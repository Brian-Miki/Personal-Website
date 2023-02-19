import * as React from "react";
import { Typography, Grid, Box, Stack, Link } from "@mui/material";

function Navigation() {
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          marginTop: "10px",
        }}
      >
        <Typography variant="h6" fontSize={{ xs: 8, sm: 18 }} fontWeight="bold">
          Brian Miki | Aspiring Product Manager
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "flex-end",
          margin: "0 auto",
          marginTop: "10px",
        }}
      >
        <Stack direction="row" spacing={{ xs: 2, sm: 10 }}>
          <Typography
            variant="h6"
            fontSize={{ xs: 8, sm: 18 }}
            fontWeight="bold"
          >
            <Link
              color="black"
              underline="none"
              href="/Components/Projects.js#Projects"
            >
              Projects
            </Link>
          </Typography>
          <Typography
            variant="h6"
            fontSize={{ xs: 8, sm: 18 }}
            fontWeight="bold"
          >
            <Link
              color="black"
              underline="none"
              href="/Components/AboutMe.js#AboutMe"
            >
              About me
            </Link>
          </Typography>
          <Typography
            variant="h6"
            fontSize={{ xs: 8, sm: 18 }}
            fontWeight="bold"
          >
            <Link
              color="black"
              underline="none"
              href="https://docs.google.com/document/d/13-WkTSkqNItLixLmI7MuazMvdRBIFw4md3SwOHJIJz8/edit?usp=sharing"
            >
              Resume
            </Link>
          </Typography>
        </Stack>
      </Box>
    </div>
  );
}

export default Navigation;
