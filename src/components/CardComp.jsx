import React from "react";
import { Box, Button, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const CardComp = (props) => {
  return (
    <Box>
      {/* <Card> */}
      <CardContent>
        <Typography
          varinat="h1"
          sx={{ color: "white", fontWeight: "bold", fontSize: "50px" }}
        >
          {props.cid}
        </Typography>
        <Typography
          varinat="h3"
          sx={{ color: "white", mt: 3, fontSize: "20px", textWrap:{xs:"wrap",lg:"nowrap"}}}
        >
          {props.heading}
        </Typography>
        <Typography
          varinat="p"
          sx={{
            color: "white",
            fontWeight: "light",
            // fontSize:{xs:"13px" ,sm:"15px"},
            fontFamily: "'Open Sans', sans-serif;",
            my: 3,
            letterSpacing: 1,
            // textWrap: "nowrap",
          }}
        >
          {props.para}
        </Typography>
      </CardContent>
      
    </Box>
  );
};

export default CardComp;
