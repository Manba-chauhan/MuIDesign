import { Grid ,Box, Stack, Container,Typography} from '@mui/material';
import React from 'react';
import card1 from '../assets/img/card1.png'

const Section5 = () => {
  return (
    <Box sx={{ bgcolor: "#292d33",  }}>
      <Container sx={{ textAlign: "center", pt: 30, pb: 20 }}>
        <Box
          sx={{
            bgcolor: "#ee1b24",
            width: { xs: "300px", sm: "500px" },
            height: { xs: "250px", sm: "200px" },
            mx: "auto",
            pt: { xs: "-20px", sm: "10px" },
            objectFit: "contain",
            // position:'absolute'
          }}
        >
          <Box
            sx={{
              position: "relative",
              top: { xs: 50, sm: -200 },
              bottom: 0,
              backgroundImage:
                "url('https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/bb5e195ad4b95d589db0e8ac/pexelsphoto412840.jpeg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width:{xs:"300px",sm:"400px "},
              height: "500px",
              mx: "auto",
            }}
          ></Box>
        </Box>
        <Box sx={{ mt:{xs:30,sm:20}, color: "white", maxWidth: "350px", mx: "auto" }}>
          <Typography
            varinat="h4"
            component={Box}
            sx={{ fontSize: "40px", fontWeight: "bold" }}
          >
            - Mike Norton
          </Typography>
          <Typography
            varinat="h3"
            component={Box}
            sx={{ fontSize: "15px", fontWeight: "bold" }}
          >
            "Success is not final; failure is not fatal: It is the courage to
            continue that counts."
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Section5;
