import * as React from "react";
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

function Navigation() {
  return (
    <>
      <div>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "flex-end",
            margin: "0 auto",
          }}
        >
          <Stack direction="row" spacing={10}>
            <Typography>
              <Link color="black" underline="none" href="#Projects">
                About Me
              </Link>
            </Typography>
            <Typography>
              <Link color="black" underline="none" href="#Projects">
                My Work
              </Link>
            </Typography>
            <Typography>
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
    </>
  );
}

export default Navigation;
