import * as React from "react";
import {
  Typography,
  Grid,
  Box,
  Stack,
  Item,
  Button,
  Paper,
} from "@mui/material";
import {} from "@mui/icons-material";
import Headshot from "../Photos/Headshot.jpg";

function AboutMe() {
  return (
    <>
      <div>
        <Box
          sx={{
            width: "80%",
            height: 300,
            margin: "0 auto",
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            marginTop={100}
            spacing={2}
            sx={{
              "@media (max-width: 600px)": {
                marginTop: 50,
              },
            }}
          >
            <Grid
              container
              justify="center"
              spacing={2}
              sx={{ "@media (max-width: 600px)": { flexDirection: "column" } }}
            >
              <Grid item xs={8.6}>
                <Typography
                  variant="h1"
                  style={{
                    fontWeight: "bold",
                    fontSize: 32,
                    "@media (max-width: 600px)": { fontSize: 24 },
                  }}
                >
                  About me{" "}
                </Typography>
                <br></br>
                <Typography
                  variant="b1"
                  style={{
                    fontSize: 24,
                    "@media (max-width: 600px)": { fontSize: 16 },
                  }}
                >
                  I am currently a 2nd year business and computer science
                  student at Simon Fraser University pursuing a career in
                  product management. I am a retired case competitor at the
                  Beedie School of Business, now I focus on peer mentorship and
                  learning about start ups through our start up accelerator
                  program at SFU.
                  <br></br>
                  <br></br>
                  <div id="#AboutMe"></div>
                  Outside of school I am apart of ProductBC where I help run our
                  mentorship and roundtable programs. Mentorship is something I
                  value highly. I strive to provide the same support that I was
                  given when first entering my career to younger students and
                  aspiring product managers.
                  <br></br>
                  <br></br>I have been practicing kendo, a japanese martial art
                  for over 10 years now. Often times, students neglect there
                  mental health in university and is a big reason why I preach
                  finding balance while going through school. Once I establish
                  my career, I will compete on the Canadian National Team in the
                  world kendo championships.
                </Typography>
              </Grid>
              <Grid
                item
                sx={5}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <img
                  src={Headshot}
                  style={{
                    marginLeft: "auto",
                    borderRadius: "5%",
                    float: "right",
                    marginBottom: "30px",
                    width: "100%",
                    "@media (min-width: 600px)": {
                      width: "auto",
                    },
                  }}
                ></img>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default AboutMe;
