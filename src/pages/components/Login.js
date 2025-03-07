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
        padding: { xs: "10px", sm: "20px", md: "40px" },
      }}
    >
      <Card
        sx={{
          width: "95%",
          maxWidth: "1200px",
          minHeight: "80vh",
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
            padding: { xs: "20px", sm: "30px", md: "40px" },
            color: "#fff",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
            Welcome to Kidney
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mb: 3 }}>
            Your trusted platform for kidney stone detection and health insights.
          </Typography>
          <Box
            component="img"
            src={KidneyStoneImage}
            alt="Kidney Stone"
            sx={{
              width: "100%",
              maxWidth: "300px",
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
            padding: { xs: "20px", sm: "30px", md: "40px" },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}>
            User Login
          </Typography>

          <Box
            component="form"
            sx={{
              width: "100%",
              maxWidth: "350px",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              fullWidth
              label="Email"
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

            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              label="Password"
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

            <Button
              fullWidth
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                color: "#fff",
                fontWeight: "bold",
                padding: "12px",
                fontSize: "16px",
                "&:hover": { background: "linear-gradient(135deg, #2a5298, #1e3c72)" },
              }}
            >
              Login
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2, color: "#fff" }}>
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
