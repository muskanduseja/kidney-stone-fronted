import React, { useState } from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, useMediaQuery } from "@mui/material";
import Result from "./components/Result";
import Checker from "./components/Checker";
import Card from "./components/CustomCard";
import DefaultCard01 from "./components/CustomCard01";
import DefaultCard02 from "./components/CustomCard02";
import DefaultCard03 from "./components/CustomCard03";
import Footer from "./components/Footer";

// Styled component for card items
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#00aaff",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  border: "2px dashed #00aaff",
  borderRadius: "8px",
  position: "relative",
  overflow: "hidden",
}));

export default function Home() {
  const [apiResponse, setApiResponse] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* Responsive layout */}
      <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: "#f4f4f9" }}>
        <Grid container spacing={2}>
          {/* Upload & Result Sections */}
          <Grid item xs={12} md={6}>
            <Item
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Checker setApiResponse={setApiResponse} />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Result apiResponse={apiResponse} />
            </Item>
          </Grid>

          {/* Cards Section */}
          <Grid container spacing={2} justifyContent="center" mt={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <Card />
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <DefaultCard01 />
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <DefaultCard02 />
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <DefaultCard03 />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}
