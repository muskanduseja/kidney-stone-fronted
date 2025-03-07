import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const PlaceholderImage = styled("div")({
  border: "3px dashed #44CBCB",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#aaa",
  borderRadius: "10px",
  width: "100%",
  height: "100%",
});

const placeholderStyle = {
  width: "400px",
  height: "200px",
};

export default function MediaCard() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/resultpage"); // Change to the route you want to navigate to
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "400px", padding: "16px" }}>
      <CardContent sx={{ textAlign: "center", fontWeight: "bold", letterSpacing: "5px" }}>
        <Typography variant="h4">
          The Result
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" style={{ marginBottom: "16px", marginTop: "10px" }}>
          Check your results
        </Typography>
      </CardContent>
      <Box sx={{ width: "60%", display: "flex", justifyContent: "center" }}>
        <PlaceholderImage style={placeholderStyle}>
          The Result will be displayed here...
        </PlaceholderImage>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Go to new Page
        </Button>
      </Box>
    </Card>
  );
}
