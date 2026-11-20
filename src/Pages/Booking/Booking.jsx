
import { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock3,
  Scissors,
  ShieldCheck,
  Gem,
  UserRound,
  Headset,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Flower2,
  Sparkles,
  Phone,
  LockKeyhole,
  Star,
} from "lucide-react";
import "./Booking.css";

const services = [
  {
    name: "Hair Services",
    price: 1499,
    image: "/images/service-makeup/service-hair.jpg",
    description: "Hair styling and treatments",
  },
  {
    name: "Skin Care",
    price: 1199,
    image: "/images/service-makeup/service-skin.jpg",
    description: "Facials and skin treatments",
  },
  {
    name: "Makeup",
    price: 2499,
    image: "/images/service-makeup/service-makeup.jpg",
    description: "Professional makeup services",
  },
  {
    name: "Nail Care",
    price: 899,
    image: "/images/service-makeup/service-nails.jpg",
    description: "Nail art and care",
  },
  {
    name: "Bridal Services",
    price: 5999,
    image: "/images/gallery/gallery-bridal.jpg",
    description: "Luxury bridal experience",
  },
];

const experts = [
  {
    name: "Priya Sharma",
    role: "Hair Specialist",
    image: "/images/expert/expert-ananya.jpg",
  },
  {
    name: "Ananya Verma",
    role: "Skin Expert",
    image: "/images/expert/expert-kavya.jpg",
  },
  {
    name: "Riya Malhotra",
    role: "Makeup Artist",
    image: "/images/expert/expert-ritika.jpg",
  },
  {
    name: "Neha Singh",
    role: "Nail Specialist",
    image: "/images/team/expert-kritika.jpg",
  },
];

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
];

function Booking() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedExpert, setSelectedExpert] = useState(experts[0]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [monthDate, setMonthDate] = useState(new Date());
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const monthName = monthDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const calendarDays = useMemo(() => {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    return [
      ...Array(firstDay).fill(null),
      ...Array.from({ length: totalDays }, (_, i) => i + 1),
    ];
  }, [monthDate]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formatDate = (day) => {
    const date = new Date(
      monthDate.getFullYear(),
      monthDate.getMonth(),
      day
    );
    return date.toISOString().split("T")[0];
  };

  const changeMonth = (direction) => {
    setMonthDate(
      new Date(
        monthDate.getFullYear(),
        monthDate.getMonth() + direction,
        1
      )
    );
  };

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert("Please select your preferred date and time.");
      return;
    }

    const phoneDigits = form.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    setSubmitted(true);
  };

  const resetBooking = () => {
    setSubmitted(false);
    setForm({ name: "", phone: "", email: "", message: "" });
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <div className="booking-page">

      {/* HERO */}

      <section className="booking-hero">
        <div className="booking-hero-overlay" />

        <div className="booking-hero-content">
          <span className="booking-eyebrow">
            <span />
            BOOK AN APPOINTMENT
          </span>

          <h1>
            Schedule Your
            <em> Beauty Appointment</em>
          </h1>

          <p>
            Choose your service, expert and preferred time.
            Your personalised beauty experience awaits at AURELLE.
          </p>

          <div className="booking-hero-features">
            <div>
              <CalendarDays />
              <span>
                <strong>Easy Booking</strong>
                <small>Book in few steps</small>
              </span>
            </div>

            <div>
              <Gem />
              <span>
                <strong>Expert Services</strong>
                <small>By certified professionals</small>
              </span>
            </div>

            <div>
              <ShieldCheck />
              <span>
                <strong>Personalised Care</strong>
                <small>Tailored to your needs</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CONTENT */}

      <section className="booking-main">
        <form className="booking-form-card" onSubmit={handleBooking}>

          {/* SERVICE */}

          <div className="booking-step">
            <div className="booking-step-heading">
              <div className="step-title">
                <span className="step-number">1</span>
                <h2>Select a Service</h2>
              </div>
              <p>Choose the service you want to book.</p>
            </div>

            <div className="service-selection">
              {services.map((service) => (
                <button
                  type="button"
                  key={service.name}
                  className={`service-option ${
                    selectedService.name === service.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="service-option-image">
                    <img src={service.image} alt={service.name} />
                    {selectedService.name === service.name && (
                      <span className="selection-check">
                        <Check size={15} />
                      </span>
                    )}
                  </div>
                  <strong>{service.name}</strong>
                </button>
              ))}
            </div>
          </div>

          {/* EXPERT */}

          <div className="booking-step">
            <div className="booking-step-heading">
              <div className="step-title">
                <span className="step-number">2</span>
                <h2>Choose Your Expert</h2>
              </div>
              <p>Book with your preferred beauty expert.</p>
            </div>

            <div className="expert-selection">
              {experts.map((expert) => (
                <button
                  type="button"
                  key={expert.name}
                  className={`expert-option ${
                    selectedExpert.name === expert.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedExpert(expert)}
                >
                  <div className="expert-image">
                    <img src={expert.image} alt={expert.name} />
                    {selectedExpert.name === expert.name && (
                      <span className="selection-check">
                        <Check size={14} />
                      </span>
                    )}
                  </div>
                  <strong>{expert.name}</strong>
                  <small>{expert.role}</small>
                </button>
              ))}
            </div>
          </div>

          {/* DATE AND TIME */}

          <div className="booking-step">
            <div className="booking-step-heading">
              <div className="step-title">
                <span className="step-number">3</span>
                <h2>Select Date and Time</h2>
              </div>
              <p>Pick a date and a convenient time slot.</p>
            </div>

            <div className="date-time-layout">
              <div className="booking-calendar">
                <div className="calendar-header">
                  <button
                    type="button"
                    onClick={() => changeMonth(-1)}
                    aria-label="Previous month"
                  >
                    <ChevronLeft />
                  </button>

                  <strong>{monthName}</strong>

                  <button
                    type="button"
                    onClick={() => changeMonth(1)}
                    aria-label="Next month"
                  >
                    <ChevronRight />
                  </button>
                </div>

                <div className="calendar-grid">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <span className="calendar-weekday" key={day}>
                        {day}
                      </span>
                    )
                  )}

                  {calendarDays.map((day, index) => {
                    if (!day) {
                      return <span key={`empty-${index}`} />;
                    }

                    const dateValue = formatDate(day);
                    const isPast =
                      new Date(
                        monthDate.getFullYear(),
                        monthDate.getMonth(),
                        day
                      ) < today;

                    return (
                      <button
                        type="button"
                        key={dateValue}
                        disabled={isPast}
                        className={
                          selectedDate === dateValue ? "selected" : ""
                        }
                        onClick={() => setSelectedDate(dateValue)}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="time-slot-container">
                <h3>Available Time Slots</h3>

                <div className="time-slot-grid">
                  {timeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      className={selectedTime === time ? "selected" : ""}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CUSTOMER DETAILS */}

          <div className="booking-step last-step">
            <div className="booking-step-heading">
              <div className="step-title">
                <span className="step-number">4</span>
                <h2>Your Details</h2>
              </div>
              <p>Share your details to confirm the booking.</p>
            </div>

            <div className="booking-input-grid">
              <label>
                Full Name *
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={updateForm}
                  required
                />
              </label>

              <label>
                Phone Number *
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={updateForm}
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={updateForm}
                />
              </label>

              <label>
                Special Requests
                <textarea
                  name="message"
                  placeholder="Any preference or note for our team?"
                  value={form.message}
                  onChange={updateForm}
                  rows="2"
                />
              </label>
            </div>
          </div>

          <button className="booking-submit-mobile" type="submit">
            Confirm Appointment <ArrowRight size={18} />
          </button>
        </form>

        {/* BOOKING SUMMARY */}

        <aside className="booking-summary">
          <h2>Booking Summary</h2>

          <div className="summary-divider" />

          <div className="summary-item">
            <span className="summary-icon"><Scissors /></span>
            <div>
              <small>Service</small>
              <strong>{selectedService.name}</strong>
            </div>
            <b>₹{selectedService.price.toLocaleString("en-IN")}</b>
          </div>

          <div className="summary-item">
            <span className="summary-icon"><UserRound /></span>
            <div>
              <small>Expert</small>
              <strong>{selectedExpert.name}</strong>
            </div>
          </div>

          <div className="summary-item">
            <span className="summary-icon"><CalendarDays /></span>
            <div>
              <small>Date</small>
              <strong>
                {selectedDate
                  ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )
                  : "Not selected"}
              </strong>
            </div>
          </div>

          <div className="summary-item">
            <span className="summary-icon"><Clock3 /></span>
            <div>
              <small>Time</small>
              <strong>{selectedTime || "Not selected"}</strong>
            </div>
          </div>

          <div className="summary-divider" />

          <div className="summary-total">
            <strong>Estimated Total</strong>
            <b>₹{selectedService.price.toLocaleString("en-IN")}</b>
          </div>

          <button
            className="booking-confirm-button"
            type="button"
            onClick={() => {
              document
                .querySelector(".booking-form-card")
                ?.requestSubmit();
            }}
          >
            Confirm Appointment <ArrowRight size={19} />
          </button>

          <p className="secure-note">
            <LockKeyhole size={14} />
            Your information is safe and secure.
          </p>

          <div className="summary-divider" />

          <div className="booking-help">
            <span className="help-icon"><Headset /></span>
            <div>
              <h3>Need Help with Booking?</h3>
              <p>Our team is here to assist you.</p>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="summary-contact-button"
          >
            Chat on WhatsApp
          </a>

          <a
            href="tel:+919876543210"
            className="summary-contact-button"
          >
            <Phone size={16} /> Call Now
          </a>
        </aside>
      </section>

      {/* WHY BOOK WITH US */}

      <section className="booking-benefits">
        <div className="benefits-heading">
          <span />
          <h2>Why Book with AURELLE?</h2>
          <span />
        </div>

        <div className="benefits-grid">
          <div className="benefit-item">
            <CalendarDays />
            <h3>Flexible Scheduling</h3>
            <p>Choose a time that works for you.</p>
          </div>

          <div className="benefit-item">
            <Flower2 />
            <h3>Personalised Experience</h3>
            <p>Care designed around you.</p>
          </div>

          <div className="benefit-item">
            <Gem />
            <h3>Hygienic and Safe</h3>
            <p>Highest standards of cleanliness.</p>
          </div>

          <div className="benefit-item">
            <Star />
            <h3>Premium Care</h3>
            <p>Luxury services and expert support.</p>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}

      {submitted && (
        <div className="booking-success-overlay">
          <div className="booking-success-modal">
            <span className="success-icon"><Check size={30} /></span>
            <h2>Thank You, {form.name}!</h2>
            <p>
              Your appointment request has been prepared.
              Our team will contact you to confirm availability.
            </p>

            <div className="success-details">
              <strong>{selectedService.name}</strong>
              <span>{selectedExpert.name}</span>
              <span>{selectedDate} at {selectedTime}</span>
              <b>₹{selectedService.price.toLocaleString("en-IN")}</b>
            </div>

            <button onClick={resetBooking}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
