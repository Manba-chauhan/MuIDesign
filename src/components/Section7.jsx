import {
  Box,
  Container,
  Stack,
  Typography,
  List,
  ListItem,
  IconButton,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import React from "react";

const Section7 = () => {
  return (
    <Box sx={{ bgcolor: "#292d33", color: "white" }}>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems={{ xs: "center", sm: "center", md: "start" }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <Box
              sx={{
                mt: 10,
                position: "relative",
                zIndex: 22,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{ fontSize: "30px", mb: 2, fontWeight: "bold" }}
              >
                Location
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ width: { xs: "100%" }, mx: "auto" }}
              >
                28 Jackson Blvd Ste 1020 Chicago IL 60604-2340
              </Typography>

              <Typography
                variant="h4"
                component="div"
                sx={{ fontSize: "30px", mt: 10, fontWeight: "bold" }}
              >
                Follow Us!
              </Typography>
              <Stack
                direction="column"
                justifyContent="start"
                alignItems={{ xs: "center", sm: "center", md: "start" }}
                sx={{ pt: 5, pb: 2, mt: -5, ml: -2 }}
              >
                <List sx={{ display: "flex" }}>
                  {["facebook-f", "twitter", "instagram", "google-plus-g"].map(
                    (icon, index) => (
                      <ListItem key={index}>
                        <IconButton
                          sx={{
                            color: "black",
                            bgcolor: "white",
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                        >
                          <i className={`fa-brands fa-${icon}`}></i>
                        </IconButton>
                      </ListItem>
                    )
                  )}
                </List>
              </Stack>
              <Typography variant="body2">©2018 Privacy policy</Typography>
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={4}>
            <Box
              sx={{
                width: "100%",
                height: {xs:"100px",sm:"700px",md:"600px"},
                bgcolor: "#f1c50e",
                mx: "auto",
                mt: { xs: "-710px", sm: "-380px", md: 0 },
                ml: { xs: 0,sm:0, md: 4 },
                display:{xs:"none" ,sm:"inline-block"}
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              sx={{
                ml: { xs: 0, sm: 0, md: -25 },
                mt: {xs:'10px' ,sm:'-300px' ,md:10},
                position: "relative",
                zIndex: 22,
              }}
            >
              <Typography
                variant="h1"
                component="div"
                sx={{ fontSize: "30px", mb: 2, fontWeight: "bold" ,textAlign:{xs:"center",sm:"center",md:"left"} }}
              >
                Contact Form
              </Typography>
              <Box>
                {[
                  "Enter Your Name",
                  "Enter Your Email",
                  "Enter Your Message",
                ].map((placeholder, index) => (
                  <TextField
                    key={index}
                    placeholder={placeholder}
                    fullWidth
                    sx={{ bgcolor: "white", my: 2 }}
                    multiline={index === 2}
                    rows={index === 2 ? 4 : 1}
                  />
                ))}
                <Button
                  variant="outlined"
                  sx={{
                    border: "2px solid white",
                    px: 4,
                    letterSpacing: 2,
                    color: "white",
                    fontSize: "15px",
                    textTransform: "uppercase",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section7;
