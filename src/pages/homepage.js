import React, { useState } from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "@mui/material";
import Result from "./components/Result";
import Checker from "./components/Checker";
import Card from "./components/CustomCard";
import DefaultCard01 from "./components/CustomCard01";
import DefaultCard02 from "./components/CustomCard02";
import DefaultCard03 from "./components/CustomCard03";
import Footer from "./components/Footer"; // ✅ Footer remains

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#00aaff",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  border: "2px dashed #00aaff", // ✅ Adds bluish dashed border
  borderRadius: "8px", // ✅ Slightly rounded corners
  position: "relative",
  overflow: "hidden",
}));

export default function Home() {
  const [apiResponse, setApiResponse] = useState(null);

  return (
    <>
      {/* ❌ REMOVED Navbar to prevent duplication */}
      <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: "#f4f4f9" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6}>
            <Item component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Checker setApiResponse={setApiResponse} />
            </Item>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <Item component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Result apiResponse={apiResponse} />
            </Item>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
            <Item>
              <Card />
            </Item>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
            <Item>
              <DefaultCard01 />
            </Item>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
            <Item>
              <DefaultCard02 />
            </Item>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
            <Item>
              <DefaultCard03 />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Footer /> {/* ✅ Footer is fine to keep */}
    </>
  );
}
