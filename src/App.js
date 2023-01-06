import "./App.css";
import { Typography, Grid, Box, Stack, Item, Button } from "@mui/material";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justify: "flex-end",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button>My Portfolio</Button>
            <Button>About Me</Button>
            <Button href="https://www.linkedin.com/in/brian-miki/">
              Resume
            </Button>
          </Stack>
        </Box>
      </div>
      <div>
        <Box
          sx={{
            width: "100%",
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
              marginTop: "8",
            },
          }}
        />
      </div>
      <div>
        <Grid container direction="column" marginTop={8}>
          <Projects />
        </Grid>
      </div>
    </>
  );
}

export default App;
