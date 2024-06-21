import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import bg2 from '../assets/img/bg2.png'
import { Height } from '@mui/icons-material';

const Section2 = () => {
  return (
    <Box sx={{ bgcolor: "#f1c50e", pt: 20 }}>
      <Container
        sx={{
          display: {xs:"flex-col",sm:"flex"},
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width:{xs:"100%" ,sm:"80%" ,md:"50%"}, flexGrow: 1  ,mr:10}}>
          <Typography
            variant="h5"
            sx={{ fontSize:{xs:"20px",sm:"40px"}, fontWeight: "bold" }}
          >
            About harness multimedia based collaboration.
          </Typography>
          <Typography variant='p' sx={{fontWeight:"bold" ,textAlign:"justify",
          fontFamily:"sans-serif",fontSize:"15px",mt:4,lineHeight:2,}} >
            Quickly incentivize impactful action items before tactical
            collaboration and idea-sharing. Monotonically engage market-driven
            intellectual capital through wireless opportunities. Progressively
            network performance based services for functionalized testing
            procedures.
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: {xs:"100%",sm:"50%"},
            height:"600px",
            // height: "550px",
            backgroundImage:"url('https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/3df88b415ef55033968052e4/pexelsphoto305241.png')",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat:"no-repeat",
            objectFit:"cover"
          }}
        >
            {/* <img src={bg2} alt="img"  height={550}/> */}
        </Box>
      </Container>
    </Box>
  );
}

export default Section2;
