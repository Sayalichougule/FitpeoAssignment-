import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MapIcon from "@mui/icons-material/Map";
import ListIcon from "@mui/icons-material/List";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import TokenIcon from "@mui/icons-material/Token";
import {
  Routes,
  Route,
  NavLink as RLink,
  useNavigate,
  Link,
  Outlet,
} from "react-router-dom";
const NavLink = styled(RLink)({
  backgroundColor: "#fff",
  textDecoration: "none",
  marginLeft: 6,
  textTransform: "capitalize",
});

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#040440",
          },
        }}
        variant="permanent"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <TokenIcon sx={{ color: "#ffff", ml: 1, mt: 3 }} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              ml: 3,
              mt: 3,
              color: "#acacbc",
              fontSize: 16,
              justifyContent: "center",
            }}
          >
            Dashboard
          </Typography>
        </DrawerHeader>

        <List sx={{ backgroundColor: "#040440", color: "#acacbc" }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <NavLink
              onClick={() => setOpen(false)  }
              to="/dashboard"
              style={({ isActive }) => ({
                color: isActive ? "#ffff" : "#acacbc",
                textDecoration: "none",
              })}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#ffff",
                  }}
                >
                  <TokenIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Dashboard"
                  sx={{ opacity: 1 }}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <NavLink
              onClick={() => setOpen(false)}
              to="/product"
              style={({ isActive }) => ({
                color: isActive ? "#ffff" : "#acacbc",
                textDecoration: "none",
              })}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#ffff",
                  }}
                >
                  <ListIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Product"
                  sx={{ opacity: 1 }}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <NavLink
              onClick={() => setOpen(false)}
              to="/ income"
              style={({ isActive }) => ({
                color: isActive ? "#ffff" : "#acacbc",
                textDecoration: "none",
              })}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#ffff",
                  }}
                >
                  <ListIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Income"
                  sx={{ opacity: 1 }}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <NavLink
              onClick={() => setOpen(false)}
              to="/promote"
              style={({ isActive }) => ({
                color: isActive ? "#ffff" : "#acacbc",
                textDecoration: "none",
              })}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#ffff",
                  }}
                >
                  <ListIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Promote"
                  sx={{ opacity: 1 }}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <NavLink
              onClick={() => setOpen(false)}
              to="/help"
              style={({ isActive }) => ({
                color: isActive ? "#ffff" : "#acacbc",
                textDecoration: "none",
              })}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#ffff",
                  }}
                >
                  <ListIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Help"
                  sx={{ opacity: 1 }}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
