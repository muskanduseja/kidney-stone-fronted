import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Kidney Stones Detector
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/services">Services</Button>
            <Button color="inherit" component={Link} to="/about">About Us</Button>
            <Button variant="contained" sx={{ backgroundColor: "#44CBCB", marginLeft: 2 }} component={Link} to="/login">
              Login
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton edge="end" color="inherit" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {["Home", "Contact", "Services", "About Us"].map((text) => (
            <ListItem button key={text} component={Link} to={`/${text.toLowerCase().replace(" ", "")}`} onClick={handleDrawerToggle}>
              {text}
            </ListItem>
          ))}
          <ListItem button component={Link} to="/login" onClick={handleDrawerToggle}>
            Login
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
