import { Grid } from "@mui/material";
import React from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Typography, Card } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Box from "@mui/material/Box";
const Cards = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{margin:'20px 0'}}>
        {/* first card */}
        <Grid item xs={12} sm={3}>
          <Card
            variant="elevation"
            sx={{
              backgroundColor: "#fffff",
              display: "flex",
              flexWrap: "flex",
            }}
          >
            <Grid container>
              <Grid
                item
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "4px",
                  padding: "5px",
                }}
              >
                <Box sx={{ borderRadius: "50%", background: "#e8fef2" }}>
                  <CurrencyExchangeIcon
                    sx={{ fontSize: 80, color: "#00a848", padding: "5px" }}
                  />
                </Box>
              </Grid>
              <Grid item sm={6} sx={{ padding: "20px 0" }}>
                <Typography sx={{ color: "#dbdbdb", fontSize: "12px" }}>
                  Earning
                </Typography>
                <Typography variant="h6">$198k</Typography>
                <span>
                  <Typography sx={{ color: "#00a848", fontSize: "12px" }}>
                    <ArrowUpwardIcon
                      sx={{ color: "00a848", fontSize: "15px" }}
                    />
                    37.8% this month
                  </Typography>
                </span>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* second card */}
        <Grid item xs={12} sm={3}>
          <Card
            variant="elevation"
            sx={{
              backgroundColor: "#fffff",
              display: "flex",
              flexWrap: "flex",
            }}
          >
            <Grid container>
              <Grid
                item
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "4px",
                  padding: "5px",
                }}
              >
                <Box sx={{ borderRadius: "50%", background: "#e7dbff" }}>
                  <ListAltIcon
                    sx={{ fontSize: 80, color: "#a40cfe", padding: "5px" }}
                  />
                </Box>
              </Grid>
              <Grid item sm={6} sx={{ padding: "20px 0" }}>
                <Typography sx={{ color: "#dbdbdb", fontSize: "12px" }}>
                  Orders
                </Typography>
                <Typography variant="h6">$2.4k</Typography>
                <span>
                  <Typography sx={{ color: "#d31b5a", fontSize: "12px" }}>
                    <ArrowDownwardIcon
                      sx={{ color: "#d31b5a", fontSize: "15px" }}
                    />
                    2% this month
                  </Typography>
                </span>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* third card */}
        <Grid item xs={12} sm={3}>
          <Card
            variant="elevation"
            sx={{
              backgroundColor: "#fffff",
              display: "flex",
              flexWrap: "flex",
            }}
          >
            <Grid container>
              <Grid
                item
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "4px",
                  padding: "5px",
                }}
              >
                <Box sx={{ borderRadius: "50%", background: "#ccf2ff" }}>
                  <AccountBalanceWalletIcon
                    sx={{ fontSize: 80, color: "#1664c3", padding: "5px" }}
                  />
                </Box>
              </Grid>
              <Grid item sm={6} sx={{ padding: "20px 0" }}>
                <Typography sx={{ color: "#dbdbdb", fontSize: "12px" }}>
                  Balance
                </Typography>
                <Typography variant="h6">$198k</Typography>
                <span>
                  <Typography sx={{ color: "#d31b5a", fontSize: "12px" }}>
                    <ArrowUpwardIcon
                      sx={{ color: "d31b5a", fontSize: "15px" }}
                    />{" "}
                    37.8% this month
                  </Typography>
                </span>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Fourth card */}
        <Grid item xs={12} sm={3}>
          <Card
            variant="elevation"
            sx={{
              backgroundColor: "#fffff",
              display: "flex",
              flexWrap: "flex",
            }}
          >
            <Grid container>
              <Grid
                item
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "4px",
                  padding: "5px",
                }}
              >
                <Box sx={{ borderRadius: "50%", background: "#ffaed7" }}>
                  <ShoppingBagIcon
                    sx={{ fontSize: 80, color: "#db0a24", padding: "5px" }}
                  />
                </Box>
              </Grid>
              <Grid item sm={6} sx={{ padding: "20px 0" }}>
                <Typography sx={{ color: "#dbdbdb", fontSize: "12px" }}>
                  Total Sales
                </Typography>
                <Typography variant="h6">$89k</Typography>
                <span>
                  <Typography sx={{ color: "#00a848", fontSize: "12px" }}>
                    <ArrowUpwardIcon
                      sx={{ color: "00a848", fontSize: "15px" }}
                    />{" "}
                    11% this month
                  </Typography>
                </span>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cards;
