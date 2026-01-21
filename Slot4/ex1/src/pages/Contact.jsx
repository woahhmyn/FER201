// src/pages/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const pageStyle = {
    backgroundColor: "#333",
    minHeight: "calc(100vh - 80px)",
    paddingTop: "40px",
    paddingBottom: "40px",
  };

  const heroImageStyle = {
    height: "300px",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://via.placeholder.com/1200x400?text=Contact+Us')",
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

  const contactGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    marginTop: "40px",
  };

  const infoItemStyle = {
    marginBottom: "30px",
    padding: "20px",
    background: "#f9f9f9",
    borderLeft: "4px solid #ffc107",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const infoItemHover = {
    ...infoItemStyle,
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    transform: "translateX(5px)",
  };

  const infoTitleStyle = {
    fontSize: "18px",
    color: "#333",
    margin: "0 0 8px 0",
    fontWeight: "600",
  };

  const infoParagraphStyle = {
    fontSize: "15px",
    color: "#666",
    margin: "0",
  };

  const formGroupStyle = {
    marginBottom: "20px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  };

  const inputFocusStyle = {
    ...inputStyle,
    borderColor: "#ffc107",
    boxShadow: "0 0 8px rgba(255, 193, 7, 0.3)",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
  };

  const submitButtonStyle = {
    width: "100%",
    padding: "12px",
    background: "#333",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const submitButtonHover = {
    ...submitButtonStyle,
    background: "#555",
  };

  const successMessageStyle = {
    background: "#d4edda",
    border: "1px solid #c3e6cb",
    color: "#155724",
    padding: "15px",
    borderRadius: "4px",
    marginBottom: "20px",
  };

  const headingStyle = {
    fontSize: "28px",
    color: "#333",
    marginBottom: "25px",
    borderBottom: "3px solid #ffc107",
    paddingBottom: "10px",
    fontWeight: "600",
  };

  const [focusedField, setFocusedField] = useState(null);
  const [hoveredInfo, setHoveredInfo] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);

  return (
    <div style={pageStyle}>
      <div style={heroImageStyle}>
        <div>
          <h1 style={{ fontSize: "48px", margin: "0 0 10px 0", fontWeight: "bold" }}>
            Contact Us
          </h1>
          <p style={{ fontSize: "18px", margin: "0", opacity: 0.9 }}>
            We'd love to hear from you
          </p>
        </div>
      </div>

      <div style={contentStyle}>
        <div style={contactGridStyle}>
          <div>
            <h2 style={headingStyle}>Get in Touch</h2>

            {[
              {
                icon: "📍",
                title: "Address",
                content: "123 Pizza Street, Food City, FC 12345"
              },
              {
                icon: "📞",
                title: "Phone",
                content: "+1 (555) 123-4567"
              },
              {
                icon: "📧",
                title: "Email",
                content: "info@pizzarestaurant.com"
              },
              {
                icon: "⏰",
                title: "Hours",
                content: "Monday - Friday: 10:00 AM - 10:00 PM\nSaturday - Sunday: 11:00 AM - 11:00 PM"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                style={hoveredInfo === idx ? infoItemHover : infoItemStyle}
                onMouseEnter={() => setHoveredInfo(idx)}
                onMouseLeave={() => setHoveredInfo(null)}
              >
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>{item.icon}</div>
                <h3 style={infoTitleStyle}>{item.title}</h3>
                <p style={infoParagraphStyle}>{item.content}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 style={headingStyle}>Send us a Message</h2>

            {submitted && (
              <div style={successMessageStyle}>
                ✓ Thank you for your message! We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={formGroupStyle}>
                <label htmlFor="name" style={labelStyle}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={focusedField === "name" ? inputFocusStyle : inputStyle}
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <div style={formGroupStyle}>
                <label htmlFor="email" style={labelStyle}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={focusedField === "email" ? inputFocusStyle : inputStyle}
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <div style={formGroupStyle}>
                <label htmlFor="subject" style={labelStyle}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  style={focusedField === "subject" ? inputFocusStyle : inputStyle}
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <div style={formGroupStyle}>
                <label htmlFor="message" style={labelStyle}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  style={focusedField === "message" ? inputFocusStyle : textareaStyle}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                style={hoveredButton ? submitButtonHover : submitButtonStyle}
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}