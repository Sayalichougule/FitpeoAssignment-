import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Cards from "../component/Cards";
import Overview from "../component/Overview";
import Customers from "../component/Customers";
import Tables from "../component/Tables"
import Sidebar from "../component/Sidebar";
const Dashboard = () => {
  const [SearchTerm, setSearchTerm] = useState("");

  const handlechange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <Container maxWidth="xl" sx={{ padding:'30px 0', background:'#f5f6f8' }}>
      <Grid container>
        <Grid item xs={2}>
        <Sidebar/>
        </Grid>
        <Grid item xs={10} sx={{paddingLeft:'10px'}}>
      <Grid container Spacing={2}>
        <Grid item xs={9}>
          <Typography variant="h6" sx={{ fontSize: "16", fontFamily: "serif" }}>
            Hello Sayali
            <WavingHandIcon sx={{ ml: 1 }} />
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="serach"
            type="search"
            placeholder="Search"
            value={SearchTerm}
            onChange={handlechange}
            sx={{ width: 250, textAlign: "right" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

      </Grid>
      <Cards/> 
      <Grid container spacing={2}>
        <Grid item xs={8} md={8}>
            Overview
            <Overview/>
        </Grid>
        <Grid item xs={4} md={4}>
            Customer
            <Customers/>
        </Grid>

      </Grid>
      <Grid Conatiner spacing={1}>
        <Grid item xs={12} md={12}>
            Product Sell
            <Tables/>
        </Grid>
      </Grid>
       </Grid>     
      </Grid>
    </Container>
  );
};

export default Dashboard;
