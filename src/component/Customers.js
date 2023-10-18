import React, { Component } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import  Typography  from "@mui/material/Typography";
import Card from "@mui/material/Card";

const Customers = () => {
  const data = [
    { name: "Group A", value: 200 },
    { name: "Group B", value: 300 },
    { name: "Group D", value: 400 },
  ];
  const COLORS = ["#f7248d", "gray", "#633beb"];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ margin: "20px 0" }} alignItems={"center"} alignContent={"center"}>
        <Typography sx={{ color: "#dbdbdb", fontSize: "12px" }}>
          Customers that by product
        </Typography>
       
        <PieChart width={350} height={400}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={40}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            value="customer"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        </Grid>
    
    </Box>
  );
};

export default Customers;
