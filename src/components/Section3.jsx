import React from 'react';
import { Grid ,Box, Card,IconButton,CardActions} from '@mui/material'
import CardComp from './CardComp';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Section3 = () => {
  return (
    <Grid container direction={{ xs: "column", sm: "row" }}>
      <Grid item xs sm={6} md={2.4}>
        <Card sx={{ bgcolor: "red", p: 2 }}>
          <CardComp
            cid="01"
            heading="Schematic Design"
            para="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          />
          <CardActions>
            <IconButton
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "red",
                fontSize: "60px",
                width: 60,
                height: 60,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs sm={6} md={2.4}>
        <Card sx={{ bgcolor: "#f1c50e", p: 2 }}>
          <CardComp
            cid="02"
            heading="Construction Documents"
            para="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          />
          <CardActions>
            <IconButton
              variant="contained"
              size="large"
              sx={{
                bgcolor: "black",
                color: "#f1c50e",
                fontSize: "60px",
                width: 60,
                height: 60,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs sm={6} md={2.4}>
        <Card sx={{ bgcolor: "#292d33", p: 2, height: "100%" }}>
          <CardComp
            cid="03"
            heading="Construction"
            para="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          />
          <CardActions>
            <IconButton
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "#292d33",
                fontSize: "60px",
                width: 60,
                height: 60,
                fontWeight:"bold"
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs sm={6} md={2.4}>
        <Card sx={{ bgcolor: "#555c66", p: 2 }}>
          <CardComp
            cid="04"
            heading="Build Construction"
            para="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          />
          <CardActions>
            <IconButton
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "#555c66",
                fontSize: "60px",
                width: 60,
                height: 60,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={2} md={2}>
        <Box sx={{ bgcolor: "gray" }}></Box>
      </Grid>
    </Grid>
  );
}

export default Section3;
