import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Box, Paper } from "@mui/material";
import RecipeJamLogo from "../Photos/RecipeJam-Screen.png";
import BobaChats from "../Photos/Boba Chats-01.png";
import BobaScreen from "../Photos/Boba Chats-03.png";
import Boba from "../Photos/Question 2.png";
import Interview from "../Photos/InterviewME.png";
import Interview1 from "../Photos/InterviewME1.png";
import GL from "../Photos/GL_LOGO_WHITE.png";

export default function ActionAreaCard() {
  return (
    <>
      <div id="#Projects">
        <Box
          sx={{
            width: "80%",
            height: 300,
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            marginTop: 20,
          }}
        >
          <Grid container direction="row" justifyContent="center" spacing="40">
            <Grid item xs={6}>
              <Paper
                elevation={3}
                sx={{
                  Width: 600,
                  height: 450,
                  background: "linear-gradient(to right, #809fc9, #b5cde6)",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                    width: "80%",
                  }}
                >
                  <Grid container spacing="20">
                    <Grid item xs={7}>
                      <br></br>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={16} fontWeight="bold">
                        RecipeJam|
                      </Typography>
                      <Typography variant="b1" fontSize={16}>
                        Product Manager
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={24} fontWeight="bold">
                        Product development and launch of an app built to help
                        people find and make delicious recipes with leftovers.
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={16}>
                        After succesfully building an MVP, I led two
                        cross-functional teams as we refined our product GTM
                        strategies for RecipeJam.
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <img
                        src={RecipeJamLogo}
                        alt="RecipeJam logo"
                        style={{
                          boxShadow:
                            "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                          borderRadius: "5%",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                elevation={3}
                sx={{
                  Width: 600,
                  height: 450,
                  background: "linear-gradient(to right, #fed594, #cb9859)",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                    width: "80%",
                  }}
                >
                  <Grid container spacing="20">
                    <Grid item xs={7}>
                      <br></br>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={16} fontWeight="bold">
                        BobaTalks|
                      </Typography>
                      <Typography variant="b1" fontSize={16}>
                        Volunteer Product Manager
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={24} fontWeight="bold">
                        Product strategy and delivery of a BobaTalks product to
                        help students learn more about careers and majors they
                        can pursue.
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={16}>
                        After building the MVP, I leveraged our conversion
                        funnel to identify bottlenecks and optimize by A/B
                        testing different user interactions with my design team.
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <img
                        src={BobaChats}
                        alt="BobaChats Page"
                        style={{
                          marginTop: "20px",
                          boxShadow:
                            "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                          borderRadius: "5%",
                        }}
                      />
                      <br></br>
                      <img
                        src={BobaScreen}
                        alt="BobaChats Page"
                        style={{
                          boxShadow:
                            "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                          borderRadius: "5%",
                        }}
                      />
                      <img
                        src={Boba}
                        alt="BobaChats Page"
                        style={{
                          boxShadow:
                            "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                          borderRadius: "5%",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>{" "}
            <Grid item xs={6}>
              <Paper
                elevation={3}
                sx={{
                  Width: 600,
                  height: 450,
                  background: "linear-gradient(to right, #cdcbf0, #7d7199)",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                    width: "80%",
                  }}
                >
                  <Grid container spacing="20">
                    <Grid item xs={7}>
                      <br></br>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={16} fontWeight="bold">
                        Interview.ME|
                      </Typography>
                      <Typography variant="b1" fontSize={16}>
                        Product Manager + FE Dev
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={24} fontWeight="bold">
                        Rapid prototype of an AI based interviewing tool to ace
                        the behavioural interview.
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={16}>
                        I designed our product to leverage product led growth.
                        We established a freemium based pricing model to
                        leverage high user activity which stratigizing a user
                        flow which optimizes quick time to value.
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <img
                        src={Interview}
                        alt="Interview logo"
                        style={{
                          marginTop: "80px",
                          boxShadow:
                            "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                          borderRadius: "5%",
                        }}
                      />
                      <img
                        src={Interview1}
                        alt="Interview logo"
                        style={{
                          boxShadow:
                            "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                          borderRadius: "5%",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>{" "}
            <Grid item xs={6}>
              <Paper
                elevation={3}
                sx={{
                  Width: 600,
                  height: 450,
                  background: "linear-gradient(to right, #b5cde6, #809fc9)",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                    width: "80%",
                  }}
                >
                  <Grid container spacing="20">
                    <Grid item xs={7}>
                      <br></br>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={16} fontWeight="bold">
                        Glights|
                      </Typography>
                      <Typography variant="b1" fontSize={16}>
                        Product Marketing Manager
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={24} fontWeight="bold">
                        RBG lights to level up your viewing and gaming
                        experience by using software to sync with your monitor.
                      </Typography>
                      <br></br>
                      <br></br>
                      <Typography variant="b1" fontSize={16}>
                        I was assigned to work with the CMO as we established a
                        new GTM strategy. We leveraged our social media presence
                        by creating online content hoping to use the viral
                        product growth strategy.
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <img
                        src={GL}
                        alt="RecipeJam logo"
                        style={{
                          marginTop: "100px",
                          boxShadow:
                            "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                          borderRadius: "5%",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
