import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Box } from "@mui/material";
import RecipeJamLogo from "../Photos/RecipeJamLogo.png";
import BobaChats from "../Photos/Boba Chats-02 (1).png";
import Interview from "../Photos/Interview.jpg";

export default function ActionAreaCard() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 300,
        }}
        display="flex"
        justifyContent="center"
      >
        <Grid container direction="row" justifyContent="center" spacing="20">
          <Grid item xs={3}>
            <Card elevation={3} sx={{ Width: 600, height: 450 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={BobaChats}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Explore Majors & Careers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Role: Volunteer Product Manager @BobaTalks
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Helping freshmen and highschool seniors figure out what
                    careers fit their passions and strenghts.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card elevation={3} sx={{ Width: 600, height: 450 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={Interview}
                  alt="Interview.ME"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Interview.ME
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    Role: Product Manager
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    An AI based tool to help you better ace the behavioural and
                    situational interview.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card elevation={3} sx={{ Width: 600, height: 450 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={RecipeJamLogo}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    RecipeJam
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Role: Product Manager
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Input ingredients and get reccomendations on recipes in
                    secounds.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
