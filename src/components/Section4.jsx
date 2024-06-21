import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import card1 from "../assets/img/card1.png";
import card2 from '../assets/img/card2.png'
import card3 from "../assets/img/card3.png";
import card4 from "../assets/img/card4.png";
import card5 from "../assets/img/card5.png";
import card6 from "../assets/img/card6.png";
import card7 from "../assets/img/card7.png";
const Section4 = () => {
  return (
    // <Container>
    <Grid container >
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ bgcolor: "#f1c50e", p: 20, }}
      ></Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={9}
        sx={{ bgcolor: "#292d33", p: 20 }}
      ></Grid>
      <Box sx={{ position: "relative", bgcolor: "#f1c50e", width: "100%",pb:10 }}>
        <Container>
          <Grid
            container
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={3} md={4} sx={{ mt: { xs: -70, md: -30 } }}>
              {/* <img src={card2} alt="img" width={330} height={300} /> */}
              <Box
                sx={{
                  backgroundImage:
                    "url('https://images03.nicepage.com/c461c07a441a5d220e8feb1a/d5967689c8aa5fc2be5831d1/b4704305-02b9-df44-9385-ca1f598b4375.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  // width: "100%",
                  width: {   xs: "300px", sm: "600px", md: "330px" },
                  height: "300px",
                  objectFit: "contain",
                  // height:"200px"
                }}
              ></Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ mt: { xs: 0, sm: -10, md: -30 } }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url('https://images03.nicepage.com/c461c07a441a5d220e8feb1a/f043cc7c85975ca2adce4aa5/69567504b5d4d46d3d02a525a5798654.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  // width: "100%",
                  width: {   xs: "300px", sm: "600px", md: "330px" },
                  height: "300px",
                  objectFit: "contain",
                  // height:"200px"
                }}
              ></Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ mt: { xs: 0, sm: 0, md: -30 } }}
            >
              {/* <img src={card1} alt="img" width={350} height={350} /> */}
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <Box
                sx={{
                  backgroundImage:
                    "url('https://images02.nicepage.com/c461c07a441a5d220e8feb1a/8c24c611593e58a7b87b8b8d/3aca5d6784ab3df60fe6cdf1e45adec7.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  // width: "100%",
                  width: {   xs: "300px", sm: "600px", md: "330px" },
                  height: "300px",
                  objectFit: "contain",
                  // height:"200px"
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <Box
                sx={{
                  backgroundImage:
                    "url('https://images02.nicepage.com/c461c07a441a5d220e8feb1a/7d860013b11f5e71b4439b6c/82f152dd4d93f03c195531c931a4eb70.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  // width: "100%",
                  width: {   xs: "300px", sm: "600px", md: "330px" },
                  height: "300px",
                  objectFit: "contain",
                  // height:"200px"
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <Box
                sx={{
                  backgroundImage:
                    "url('https://images03.nicepage.com/c461c07a441a5d220e8feb1a/8c0dacb5c46155ada9fe0956/5396baf5a88516441c2b2d30f9c941ae.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  // width: "100%",
                  width: {   xs: "300px", sm: "600px", md: "330px" },
                  height: "300px",
                  objectFit: "contain",
                  // height:"200px"
                }}
              ></Box>
            </Grid>

            <Grid item xs={12} sm={3} md={4}>
              <Box
                width={330}
                sx={{
                  mt: 10,
                  width: {   xs: "300px", sm: "600px", md: "330px" },
                }}
              >
                <Typography
                  variant="p"
                  sx={{ fontSize: "38px", fontWeight: 600 }}
                >
                  Digital Marketing
                </Typography>
                <br></br>
                <Typography
                  variant="p"
                  component={Box}
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    // textAlign: "justify",
                    lineCamp: 8,
                    letterSpacing: 1,
                    pr: 4,
                    pt: 2,
                    mb: 2,
                  }}
                >
                  Quickly incentivize impactful action items before tactical
                  collaboration and idea-sharing. Monotonically engage
                  market-driven intellectual capital through wireless
                  opportunities. Progressively network performance based
                  services for functionalized testing procedures.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <Box
                sx={{
                  backgroundImage:
                    "url('https://images03.nicepage.com/c461c07a441a5d220e8feb1a/3a05aeb90c53554c96cf5ed6/PRFotografie_FirmenportraitskopfundkragenFotografie.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  // width: "100%",
                  width: {   xs: "300px", sm: "600px", md: "330px" },
                  height: "500px",
                  objectFit: "contain",
                  // height:"200px"
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <Box
                sx={{
                  backgroundImage:
                    "url('https://images03.nicepage.com/c461c07a441a5d220e8feb1a/ea62561a6157542980de8de4/1q.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  // width: "100%",
                  width: {   xs: "300px", sm: "600px", md: "330px" },
                  height: "500px",
                  objectFit: "cover",
                  // height:"200px"
                }}
              ></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Grid>
    // </Container>
  );
}

export default Section4;
