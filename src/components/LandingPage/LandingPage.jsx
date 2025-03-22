import React from "react";
import "./LandingPage.css";
import heroImage from "../../assets/sign.webp"; // Replace with your actual hero image path
import calendarImage from "../../assets/sign.webp"; // Replace with your actual calendar image path
import testimonial1 from "../../assets/sign.webp"; // Replace with your actual testimonial images
import testimonial2 from "../../assets/sign.webp";
import testimonial3 from "../../assets/sign.webp";
import testimonial4 from "../../assets/sign.webp";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">CNNCT</div>
        <button className="signup-btn">Sign up free</button>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <h1>
            CNNCT – Easy <span>Scheduling Ahead</span>
          </h1>
          <button className="hero-btn">Sign up free</button>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
      </section>
      <section className="features">
        <h2>Simplified scheduling for you and your team</h2>
        <p>
          CNNCT eliminates the back-and-forth of scheduling meetings so you can
          focus on what matters. Set your availability, share your link, and let
          others book time with you instantly.
        </p>
      </section>
      <section className="calendar-meetings">
        <div className="calendar-section">
          <h2>Stay Organized with Your Calendar & Meetings</h2>
          <ul>
            <li>
              View all your upcoming meetings and appointments in one place.
            </li>
            <li>
              Syncs with Google Calendar, Outlook, and iCloud to avoid
              conflicts.
            </li>
            <li>
              Customize event types: one-on-ones, team meetings, group sessions,
              and webinars.
            </li>
          </ul>
        </div>
        <img src={calendarImage} alt="Calendar" className="calendar-image" />
      </section>
      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Here's what our customer has to say</h2>
        <button className="read-testimonials-btn">Read customer stories</button>
        <div className="testimonial-grid">
          {[1, 2, 3, 4].map((index) => (
            <div className="testimonial-item" key={index}>
              <p className="testimonial-quote">Amazing tool! Saved me months</p>
              <p className="testimonial-description">
                This is a placeholder for your testimonials and what your client
                has to say. Put them here and make sure it's 100% true and
                meaningful.
              </p>
              <div className="testimonial-author">
                <img
                  src={
                    index === 1
                      ? testimonial1
                      : index === 2
                      ? testimonial2
                      : index === 3
                      ? testimonial3
                      : testimonial4
                  }
                  alt="Avatar"
                  className="avatar"
                />
                <div>
                  <p className="author-name">John Master</p>
                  <p className="author-title">Director, Spark.com</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Integrations Section */}
      <section className="integrations">
        <h2>All Link Apps and Integrations</h2>
        <div className="integration-grid">
          {[
            {
              name: "Audiomack",
              description: "Add an Audiomack player to your Linktree",
            },
            {
              name: "Bandsintown",
              description: "Drive ticket sales by listing your events",
            },
            {
              name: "Bonfire",
              description: "Display and sell your custom merch",
            },
            { name: "Books", description: "Promote books on your Linktree" },
            {
              name: "Buy Me A Gift",
              description: "Let visitors support you with a small gift",
            },
            {
              name: "Cameo",
              description: "Make impossible fan connections possible",
            },
            {
              name: "Clubhouse",
              description: "Let your community in on the conversation",
            },
            { name: "Community", description: "Build an SMS subscriber list" },
            {
              name: "Contact Details",
              description: "Easily share downloadable contact details",
            },
          ].map((item, index) => (
            <div className="integration-item" key={index}>
              <img
                src={`https://via.placeholder.com/50x50?text=${item.name}`}
                alt={item.name}
                className="integration-icon"
              />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">About CNNCT</a>
          <a href="#">Blog</a>
          <a href="#">Privacy</a>
          <a href="#">Social Good</a>
          <a href="#">Contact</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Press</a>
          <a href="#">Cookie Notice</a>
          <a href="#">FAQs</a>
          <a href="#">Trust Center</a>
          <a href="#">Report a Violation</a>
        </div>
        <div className="footer-disclaimer">
          We acknowledge the Traditional Custodians of the land on which our
          office stands, The Wurundjeri people of the Kulin Nation, and pay our
          respects to Elders past, present and emerging.
        </div>
        <div className="footer-social">
          {["Twitter", "Instagram", "YouTube", "LinkedIn", "Facebook"].map(
            (platform, index) => (
              <a href="#" key={index}>
                <img
                  src={`https://via.placeholder.com/30x30?text=${platform}`}
                  alt={platform}
                  className="social-icon"
                />
              </a>
            )
          )}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
