import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ width: "100vw", maxWidth: "100%", backgroundColor: "#000", color: "#fff" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
          Kidney Stones Detector
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/services">Services</Button>
          <Button color="inherit" component={Link} to="/about">About Us</Button>
          <Button 
            variant="contained" 
            sx={{ backgroundColor: "#44CBCB", color: "#fff", marginLeft: 2 }} 
            component={Link} 
            to="/login"
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
