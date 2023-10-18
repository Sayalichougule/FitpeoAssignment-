
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card"

const columns = [
  { field: 'ProductName', headerName: 'ProductName', width:300 },
  { field: 'stack', headerName: 'Stack', width: 250 },
  { field: 'price', headerName: 'Price', width: 250 },
  {
    field: 'TotalSale',
    headerName: 'TotalSale',
    
    width: 140,
  },
]

const rows = [
  { id:1,ProductName: 'Abstract 3D', stack: '32 in stack', price:" $45.99",TotalSale:20 },
  { id:2,ProductName: 'Sarphen illustration', stack: '42 in stack', price:" $55.99",TotalSale:"20" },
  { id:3,ProductName: 'Abstract 3D', stack: '62 in stack', price:" $35.99",TotalSale:"20" },
  { id:4,ProductName: 'Abstract 3D', stack: '12 in stack', price:" $25.99",TotalSale:"20" },
  { id:5,ProductName: 'Abstract 3D', stack: '92 in stack', price:" $425.99",TotalSale:"20" },
  { id:6,ProductName: 'Abstract 3D', stack: '82 in stack', price:" $65.99",TotalSale:"20" },
  { id:7,ProductName: 'Abstract 3D', stack: '22 in stack', price:" $95.99",TotalSale:"20" },
];
const Tables=()=> {
  return (
    <div style={{ height: 400, width: '100%' }}>
         <Grid item sm={12}>
          <Card
            variant="elevation"
            sx={{
              backgroundColor: "#fffff",
              display: "flex",
              flexWrap: "flex",
            
            }}
          ></Card>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      </Grid>
    </div>

  );
} 
export default Tables