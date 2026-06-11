import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./workshops.css";

function Workshops() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <Navbar />

      <main className="workshops-page">
        <section className="workshops-hero">
          <div className="container workshops-hero-container">
            <div className="workshops-hero-image">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                alt="Cooking workshop"
              />
            </div>

            <div className="workshops-hero-content">
              <p className="workshops-label">WORKSHOPS</p>
              <h1>Cooking Workshops</h1>
              <p>
                Sample text. Click to select the Text Element. Build this page
                with a clean image-and-content split layout and a strong action
                button.
              </p>
              <button className="workshops-btn">LEARN MORE</button>
            </div>
          </div>
        </section>

        <section className="classes-section">
          <div className="container classes-container">
            <div className="classes-content">
              <p className="workshops-label">BOOK A SESSION</p>
              <h2>Cooking classes</h2>
              <p>
                Choose a date from the calendar to reserve your cooking class.
                This calendar works and updates the selected booking date below.
              </p>

              <div className="selected-date-box">
                Selected Date:{" "}
                <strong>{selectedDate.toDateString()}</strong>
              </div>
            </div>

            <div className="calendar-box">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
                minDate={new Date()}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Workshops;