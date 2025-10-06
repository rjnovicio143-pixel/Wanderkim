import React, { useState } from "react";
import "./Booking.css";
import Footer from "../components/Footer";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    package: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.date || !formData.package) {
      alert("Please fill in all fields.");
      return;
    }

    // Save booking to localStorage (demo purposes)
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(formData);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      date: "",
      package: "",
    });
  };

  return (
    <>
      <div className="booking-container">
        <h1>Book Your Switzerland Adventure!</h1>

        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Travel Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Package:
            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
            >
              <option value="">Select Package</option>
              <option value="nature">Nature & Mountains</option>
              <option value="city">City Tour</option>
              <option value="mixed">Mixed Adventure</option>
            </select>
          </label>
          <button type="submit">Submit Booking</button>
        </form>
        
      </div>

              {submitted && (<div className="confirmation-message">
            ✅ Your booking was successfully submitted!
          </div>
        )}


      

      {/* 📸 Poster image BELOW the form */}
      <div className="poster-image-container">
        <h2>Here's Our Package Booking</h2>
        <img src="/poster1.png" alt="Switzerland Poster" className="poster-image" />
        <img src="/poster2.png" alt="Switzerland Poster" className="poster-image" />
        <img src="/poster3.png" alt="Switzerland Poster" className="poster-image" />
      </div>

      <Footer />
    </>
  );
}