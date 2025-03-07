import React from "react";
import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import Footer from "./Footer"; // ✅ Keep Footer
import ContactImage from "../../assets/con.jpg"; // ✅ Image imported

const Contact = () => {
  return (
    <>
      {/* ❌ Removed Navbar to avoid duplication */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          background: "#000", 
          padding: "40px 20px",
        }}
      >
        <Typography variant="h4" align="center" sx={{ color: "#fff", fontWeight: "bold", mb: 3 }}>
          Contact Us
        </Typography>

        <Grid container spacing={4} maxWidth="lg" alignItems="center">
          {/* Left Side - Image */}
          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={ContactImage} // ✅ Use the imported image here
              alt="Support Agent"
              style={{ 
                width: "100%", // ✅ Make the image responsive
                height: "450px", // ✅ Set a fixed height
                maxWidth: "500px", // ✅ Increase max width
                borderRadius: "15px", // ✅ Rounded corners
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // ✅ Add shadow
                objectFit: "cover", // ✅ Ensure the image covers the area
              }}
            />
          </Grid>

          {/* Right Side - Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={5} sx={{ padding: "30px", borderRadius: "15px", background: "#000" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#000",
                        color: "#fff",
                        "& fieldset": { borderColor: "#fff" },
                        "&:hover fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiInputLabel-root": { color: "#fff" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#000",
                        color: "#fff",
                        "& fieldset": { borderColor: "#fff" },
                        "&:hover fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiInputLabel-root": { color: "#fff" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone number"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#000",
                        color: "#fff",
                        "& fieldset": { borderColor: "#fff" },
                        "&:hover fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiInputLabel-root": { color: "#fff" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#000",
                        color: "#fff",
                        "& fieldset": { borderColor: "#fff" },
                        "&:hover fieldset": { borderColor: "#fff" },
                      },
                      "& .MuiInputLabel-root": { color: "#fff" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "#44CBCB",
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "bold",
                      '&:hover': { background: "#44CBCB" },
                    }}
                  >
                    Contact us now
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* ✅ Footer remains */}
      <Footer />
    </>
  );
};

export default Contact;
