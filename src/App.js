import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/components/Navbar"; // ✅ Corrected path
import HomePage from "./pages/homepage"; 
import Contact from "./pages/components/Contact"; 
import Services from "./pages/components/Services";
import AboutUs from "./pages/components/AboutUs";
import Login from "./pages/components/Login"; 
import SignUp from "./pages/components/SignUp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar /> {/* ✅ Navbar is now global */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} /> {/* ✅ Fixed capitalization */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
