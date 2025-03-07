import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#121212",
        color: "#fff",
        padding: "20px 0",
        borderTop: "1px solid #444",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{
        width: "80%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        textAlign: "left",
      }}>
        {/* Column 1: Company Info */}
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#44CBCB" }}>Kidney Stone Detection</h2>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
            Our AI-powered Kidney Stone Detection system helps in early diagnosis and prevention, ensuring better healthcare outcomes.
          </p>
          <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ color: "#4A90E2", fontSize: "1.2rem" }}>📞</span>
            <span style={{ fontSize: "0.9rem" }}>+923063198722</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#44CBCB" }}>Quick Links</h2>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}>
            <li><a href="/faq" style={{ color: "#fff", textDecoration: "none" }}>F.A.Q</a></li>
            <li><a href="/cookies-policy" style={{ color: "#fff", textDecoration: "none" }}>Cookies Policy</a></li>
            <li><a href="/terms" style={{ color: "#fff", textDecoration: "none" }}>Terms of Service</a></li>
            <li><a href="/support" style={{ color: "#fff", textDecoration: "none" }}>Support</a></li>
            <li><a href="/careers" style={{ color: "#fff", textDecoration: "none" }}>Careers</a></li>
          </ul>
          <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
            <span style={{ color: "#4A90E2", fontSize: "1.2rem" }}>✉️</span>
            <span style={{ fontSize: "0.9rem" }}>mail@domain.com</span>
          </div>
        </div>

        {/* Column 3: Subscribe Section */}
        <div style={{ textAlign: "right" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#44CBCB" }}>Subscribe to Newsletters</h2>
          <form style={{ marginTop: "10px" }}>
            <input
              type="email"
              placeholder="Your email id here"
              style={{ padding: "8px", borderRadius: "5px", border: "none", width: "70%", marginRight: "5px" }}
              required
            />
            <button
              type="submit"
              style={{ padding: "8px 12px", backgroundColor: "#44CBCB", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Subscribe
            </button>
          </form>
          <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <a href="/" style={{ color: "#4A90E2", fontSize: "1.5rem" }}>📷</a>
            <a href="/" style={{ color: "#4A90E2", fontSize: "1.5rem" }}>🐦</a>
            <a href="/" style={{ color: "#4A90E2", fontSize: "1.5rem" }}>📘</a>
          </div>
          <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "5px" }}>
            <span style={{ color: "#4A90E2", fontSize: "1.2rem" }}>📍</span>
            <span style={{ fontSize: "0.9rem" }}>Sukkur IBA University</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ marginTop: "20px", textAlign: "center", fontSize: "0.8rem", borderTop: "1px solid #444", paddingTop: "10px" }}>
        &copy; 2025 Your Company | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
