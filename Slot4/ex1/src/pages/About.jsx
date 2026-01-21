// src/pages/About.jsx
import React from "react";

export default function About() {
  const pageStyle = {
    backgroundColor: "#333",
    minHeight: "calc(100vh - 80px)",
    paddingTop: "40px",
    paddingBottom: "40px",
  };

  const heroImageStyle = {
    height: "300px",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://via.placeholder.com/1200x400?text=About+Us')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    marginBottom: "40px",
  };

  const contentStyle = {
    padding: "40px 80px",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "white",
  };

  const sectionStyle = {
    marginBottom: "40px",
  };

  const headingStyle = {
    fontSize: "32px",
    color: "#333",
    marginBottom: "20px",
    borderBottom: "3px solid #ffc107",
    paddingBottom: "10px",
    fontWeight: "600",
  };

  const paragraphStyle = {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "20px",
  };

  const valuesGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "25px",
    marginTop: "20px",
  };

  const valueCardStyle = {
    padding: "25px",
    background: "#f9f9f9",
    borderLeft: "4px solid #ffc107",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const valueCardHover = {
    ...valueCardStyle,
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    transform: "translateY(-3px)",
  };

  const valueTitleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
  };

  const valueDescStyle = {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.6",
  };

  const teamGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    marginTop: "20px",
  };

  const teamCardStyle = {
    padding: "25px",
    background: "#f9f9f9",
    borderRadius: "4px",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const teamCardHover = {
    ...teamCardStyle,
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    transform: "translateY(-5px)",
    background: "#ffc107",
  };

  const avatarStyle = {
    fontSize: "60px",
    marginBottom: "15px",
  };

  const teamNameStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
    margin: "10px 0",
  };

  const teamRoleStyle = {
    fontSize: "14px",
    color: "#666",
    fontWeight: "500",
  };

  const [hoveredValue, setHoveredValue] = React.useState(null);
  const [hoveredMember, setHoveredMember] = React.useState(null);

  return (
    <div style={pageStyle}>
      <div style={heroImageStyle}>
        <div>
          <h1 style={{ fontSize: "48px", margin: "0 0 10px 0", fontWeight: "bold" }}>About Us</h1>
          <p style={{ fontSize: "18px", margin: "0", opacity: 0.9 }}>Discover our story and passion for pizza</p>
        </div>
      </div>

      <div style={contentStyle}>
        {/* Our Story */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Our Story</h2>
          <p style={paragraphStyle}>
            Founded in 2015, our pizza restaurant started with a simple mission: to bring authentic
            Italian pizza to our community. What began as a small family-run operation has grown into
            a beloved local favorite.
          </p>
          <p style={paragraphStyle}>
            Every day, our team works hard to deliver the best pizza experience possible, using only the finest ingredients and traditional cooking methods.
          </p>
        </div>

        {/* Our Mission */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Our Mission</h2>
          <p style={paragraphStyle}>
            We believe that great pizza is not just about ingredients, but about passion and dedication.
            Every pizza we make is crafted with love and attention to detail, ensuring that every customer
            enjoys an unforgettable dining experience.
          </p>
        </div>

        {/* Our Values */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Our Values</h2>
          <div style={valuesGridStyle}>
            {[
              { title: "Quality", desc: "We never compromise on the quality of our ingredients and service." },
              { title: "Authenticity", desc: "We stay true to traditional Italian pizza-making methods." },
              { title: "Customer First", desc: "Your satisfaction is our top priority." },
              { title: "Community", desc: "We support local farmers and suppliers." },
            ].map((value, idx) => (
              <div
                key={idx}
                style={hoveredValue === idx ? valueCardHover : valueCardStyle}
                onMouseEnter={() => setHoveredValue(idx)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <h3 style={valueTitleStyle}>{value.title}</h3>
                <p style={valueDescStyle}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Team */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Meet Our Team</h2>
          <div style={teamGridStyle}>
            {[
              { emoji: "👨‍🍳", name: "Marco Rossi", role: "Head Chef" },
              { emoji: "👩‍🍳", name: "Sofia Rossi", role: "Co-Founder" },
              { emoji: "👨‍💼", name: "Giovanni Rossi", role: "Manager" },
            ].map((member, idx) => (
              <div
                key={idx}
                style={hoveredMember === idx ? teamCardHover : teamCardStyle}
                onMouseEnter={() => setHoveredMember(idx)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div style={avatarStyle}>{member.emoji}</div>
                <h3 style={teamNameStyle}>{member.name}</h3>
                <p style={teamRoleStyle}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}