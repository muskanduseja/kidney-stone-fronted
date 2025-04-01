import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Card,
  Snackbar,
  Alert,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import KidneyStoneImage from "../../assets/kidney-stone-image.jpg";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify({
          username: data.username,
          email: data.email
        }));
        
        setIsAuthenticated(true);
        setSuccess("Login successful!");
        
        // Redirect to intended page or home
        const from = location.state?.from?.pathname || "/home";
        navigate(from, { replace: true });
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setError(null);
    setSuccess(null);
  };

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
            Your trusted platform for kidney stone detection and health
            insights.
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

        {/* Right Side - Login Section */}
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
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}
          >
            User Login
          </Typography>

          {/* Login Form */}
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              width: "100%",
              maxWidth: "350px",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Email Field */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#fff", marginBottom: "8px" }}
              >
                Email
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  marginBottom: "15px",
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

            {/* Password Field */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#fff", marginBottom: "8px" }}
              >
                Password
              </Typography>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  marginBottom: "25px",
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
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
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

            {/* Login Button */}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                color: "#fff",
                fontWeight: "bold",
                padding: "12px",
                fontSize: "16px",
                "&:hover": {
                  background: "linear-gradient(135deg, #2a5298, #1e3c72)",
                },
                "&:disabled": {
                  opacity: 0.7,
                },
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

            {/* Sign Up Link */}
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: "#fff" }}
            >
              Don't have an account?{" "}
              <a
                href="/signup"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                Sign Up
              </a>
            </Typography>
          </Box>
        </Box>
      </Card>

      {/* Error/Success Snackbars */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
      
      <Snackbar
        open={!!success}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          {success}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;