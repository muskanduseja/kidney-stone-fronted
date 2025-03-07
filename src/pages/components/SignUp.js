import React, { useState } from "react";
import { 
  Box, Typography, TextField, Button, IconButton, InputAdornment, Card 
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import KidneyStoneImage from "../../assets/kidney-stone-image.jpg"; // Adjust path as needed

const SignUp = () => {
  const [name, setName] = useState("");
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
        padding: "20px",
      }}
    >
      <Card
        sx={{
          width: "90%",
          maxWidth: "1200px",
          minHeight: "80vh",
          display: "flex",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        {/* Left Side - Welcome Section */}
        <Box
          sx={{
            flex: 1,
            background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            color: "#fff",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
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

        {/* Vertical Border Line */}
        <Box sx={{ width: "3px", backgroundColor: "#fff" }} />

        {/* Right Side - Sign Up Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
            padding: "40px",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}>
            Sign Up
          </Typography>

          {/* Sign Up Form */}
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
            {/* Name Field */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Typography variant="body1" sx={{ color: "#fff", marginBottom: "8px" }}>
                Name
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  marginBottom: "15px",
                  "& .MuiInputBase-input": {
                    color: "#000", // Ensures black text
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                }}
              />
            </Box>

            {/* Email Field */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Typography variant="body1" sx={{ color: "#fff", marginBottom: "8px" }}>
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
                  marginBottom: "15px",
                  "& .MuiInputBase-input": {
                    color: "#000", // Ensures black text
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" disablePointerEvents>
                      <Email sx={{ color: "#2193b0" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Password Field */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Typography variant="body1" sx={{ color: "#fff", marginBottom: "8px" }}>
                Password
              </Typography>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  marginBottom: "25px",
                  "& .MuiInputBase-input": {
                    color: "#000", // Ensures black text
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
                        {showPassword ? (
                          <Visibility sx={{ color: "#2193b0" }} />
                        ) : (
                          <VisibilityOff sx={{ color: "#2193b0" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Sign Up Button */}
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
              Sign Up
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default SignUp;
