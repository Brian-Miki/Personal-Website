import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Grid, Box, Stack, Button } from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Email,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";

function Homepage() {
  const theme = useTheme();

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
            <Grid item xs={8} marginTop={30}>
              <Typography
                variant="h1"
                style={{ fontWeight: "bold" }}
                className="homepage-heading"
              >
                Hi, I am Brian Miki.
              </Typography>
              <Typography variant="h1" className="homepage-subheading">
                A product manager who empowers others.
              </Typography>
              <br />
              <Typography variant="h1" className="homepage-subheading">
                Ex @ Unity
              </Typography>
              <br />
              <Stack direction="row" spacing={2}>
                <Button href="https://www.linkedin.com/in/brian-miki/">
                  <LinkedIn />
                </Button>
                <Button href="https://github.com/Brian-Miki">
                  <GitHub />
                </Button>
                <Button href="bmiki5508@gmail.com">
                  <Email />
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </div>
      <style jsx>{`
        @media screen and (max-width: ${theme.breakpoints.values.md}px) {
          .homepage-heading {
            font-size: 32px;
          }
          .homepage-subheading {
            font-size: 24px;
          }
        }
        @media screen and (max-width: ${theme.breakpoints.values.sm}px) {
          .homepage-heading {
            font-size: 24px;
          }
          .homepage-subheading {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}

export default Homepage;
