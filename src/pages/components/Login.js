import React, { useState } from "react";
import { 
  Box, Typography, TextField, Button, IconButton, InputAdornment, Card 
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import KidneyStoneImage from "../../assets/kidney-stone-image.jpg"; // Adjust path as needed

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        padding: { xs: "20px", sm: "40px", md: "60px" },
      }}
    >
      <Card
        sx={{
          width: "95%",
          maxWidth: "1200px",
          minHeight: "85vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <Box
          sx={{
            flex: 1,
            background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: { xs: "30px", sm: "40px", md: "50px" },
            color: "#fff",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
            Welcome to Kidney
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
            Your trusted platform for kidney stone detection and health insights.
          </Typography>
          <Box
            component="img"
            src={KidneyStoneImage}
            alt="Kidney Stone"
            sx={{
              width: "100%",
              maxWidth: "320px",
              borderRadius: "10px",
            }}
          />
        </Box>

        <Box sx={{ width: "3px", backgroundColor: "#fff", display: { xs: "none", md: "block" } }} />

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
            padding: { xs: "30px", sm: "40px", md: "50px" },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff", mb: 4 }}>
            User Login
          </Typography>

          <Box
            component="form"
            sx={{
              width: "100%",
              maxWidth: "350px",
              display: "flex",
              flexDirection: "column",
              gap: 4, // Increased spacing between inputs
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mb: 2 }}>
              <Typography variant="body1" sx={{ color: "#fff", mb: 1.5 }}> {/* Moved label lower */}
                Email
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: "#2193b0" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mb: 2 }}>
              <Typography variant="body1" sx={{ color: "#fff", mb: 1.5 }}> {/* Moved label lower */}
                Password
              </Typography>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: "#2193b0" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <Visibility sx={{ color: "#2193b0" }} /> : <VisibilityOff sx={{ color: "#2193b0" }} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                color: "#fff",
                fontWeight: "bold",
                padding: "14px",
                fontSize: "16px",
                "&:hover": { background: "linear-gradient(135deg, #2a5298, #1e3c72)" },
              }}
            >
              Login
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 3, color: "#fff" }}>
              Don't have an account? {" "}
              <a href="/signup" style={{ color: "#fff", textDecoration: "underline" }}>
                Sign Up
              </a>
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
