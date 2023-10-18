import React from "react";
import Grid from "@mui/material/Grid";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Typography, Card } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const Overview = () => {
  const data = [
    { month: "Jan", udata: 150 },
    { month: "Feb", udata: 120 },
    { month: "Mar", udata: 100 },
    { month: "April", udata: 110 },
    { month: "May", udata: 50 },
    { month: "Jun", udata: 90 },
    { month: "July", udata: 170 },
    { month: "Aug", udata: 150 },
    { month: "Sept", udata: 80 },
    { month: "Oct", udata: 116 },
    { month: "Nov", udata: 145 },
    { month: "Dec", udata: 111 },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ margin: "20px 0" }}>
        <Typography sx={{ color: "#dbdbdb", fontSize: "12px" }}>
          Monthly Earning
        </Typography>
        <Grid item sm={12}>
          <Card
            variant="elevation"
            sx={{
              backgroundColor: "#fffff",
              display: "flex",
              flexWrap: "flex",
            
            }}
          ></Card>

          <Paper>
            <Chart data={data}>
              <ArgumentAxis />
              <ValueAxis max={100} />
              <BarSeries valueField="udata" argumentField="month" />

              <Animation />
            </Chart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
