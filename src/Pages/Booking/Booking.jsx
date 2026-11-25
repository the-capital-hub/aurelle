
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
  Phone,
  LockKeyhole,
  Star,
  User,
} from "lucide-react";
import "./Booking.css";

/* =========================================
   SERVICES
========================================= */

const serviceGroups = {
  Men: [
    {
      id: "mens-grooming",
      name: "Men's Grooming",
      description: "Haircuts, beard styling and complete grooming",
      image: "/images/services/grooming/grooming-hero.jpg",
    },
    {
      id: "mens-skin",
      name: "Skin & Facial Care",
      description: "Deep cleansing, charcoal and hydration treatments",
      image: "/images/services/mens-skin/mens-skin-hero.jpg",
    },
    {
      id: "groom-packages",
      name: "Groom Packages",
      description: "Premium grooming for your special occasion",
      image: "/images/services/packages/packages-groom.jpg",
    },
  ],

  Women: [
    {
      id: "hair-styling",
      name: "Hair & Styling",
      description: "Haircuts, styling and professional hair treatments",
      image: "/images/service-makeup/service-hair.jpg",
    },
    {
      id: "skin-facial",
      name: "Skin & Facial Care",
      description: "Facials and personalised skin treatments",
      image: "/images/services/skin/skin-hero.jpg",
    },
    {
      id: "makeup-bridal",
      name: "Makeup & Bridal",
      description: "Professional makeup and bridal beauty",
      image: "/images/service-makeup/service-makeup.jpg",
    },
    {
      id: "nail-studio",
      name: "Nail Studio",
      description: "Beautiful nail care and nail art",
      image: "/images/service-makeup/service-nails.jpg",
    },
    {
      id: "waxing-threading",
      name: "Waxing & Threading",
      description: "Professional waxing and threading services",
      image: "/images/services/waxing/waxing-hero.jpg",
    },
    {
      id: "manicure-pedicure",
      name: "Manicure & Pedicure",
      description: "Relaxing hand, nail and foot care",
      image: "/images/services/pedicure/pedicure-hero.jpg",
    },
    {
      id: "body-spa",
      name: "Body & Spa",
      description: "Relaxing body therapies and spa rituals",
      image: "/images/services/body-spa/body-hero.jpg",
    },
    {
      id: "bridal-packages",
      name: "Bridal Packages",
      description: "Exclusive bridal and pre wedding experiences",
      image: "/images/services/packages/packages-bridal.jpg",
    },
  ],
};

/* =========================================
   EXPERTS
   Replace placeholder names and image paths
   with your actual salon team details.
========================================= */

const expertGroups = {
  Men: [
    {
      id: "men-grooming-expert",
      name: "Men's Grooming Expert",
      role: "Professional Barber & Grooming Specialist",
      image: "/images/team/expert-grooming.jpg",
      services: ["mens-grooming"],
    },
    {
      id: "men-skin-expert",
      name: "AURELLE Skin Specialist",
      role: "Men's Skin & Facial Expert",
      image: "/images/experts/mens-skin-expert.jpg",
      services: ["mens-skin"],
    },
    {
      id: "groom-consultant",
      name: "AURELLE Groom Consultant",
      role: "Wedding Groom Specialist",
      image: "/images/experts/mens-groom-package-expert.jpg",
      services: ["groom-packages"],
    },
  ],

  Women: [
    {
      id: "priya-sharma",
      name: "Priya Sharma",
      role: "Hair Specialist",
      image: "/images/expert/expert-ananya.jpg",
      services: ["hair-styling"],
    },
    {
      id: "ananya-verma",
      name: "Ananya Verma",
      role: "Skin Expert",
      image: "/images/expert/expert-kavya.jpg",
      services: ["skin-facial"],
    },
    {
      id: "riya-malhotra",
      name: "Riya Malhotra",
      role: "Makeup Artist",
      image: "/images/expert/expert-ritika.jpg",
      services: ["makeup-bridal", "bridal-packages"],
    },
    {
      id: "neha-singh",
      name: "Neha Singh",
      role: "Nail Specialist",
      image: "/images/team/expert-kritika.jpg",
      services: ["nail-studio", "manicure-pedicure"],
    },
    {
      id: "waxing-specialist",
      name: "AURELLE Beauty Specialist",
      role: "Waxing & Threading Expert",
      image: "/images/experts/womens-waxing-expert.jpg",
      services: ["waxing-threading"],
    },
    {
      id: "spa-therapist",
      name: "AURELLE Spa Therapist",
      role: "Body & Spa Specialist",
      image: "/images/experts/womens-spa-expert.jpg",
      services: ["body-spa"],
    },
  ],
};

/* =========================================
   TIME SLOTS
========================================= */

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
];

/* =========================================
   BOOKING COMPONENT
========================================= */

function Booking() {
  const [selectedGender, setSelectedGender] = useState("Men");

  const [selectedService, setSelectedService] = useState(
    serviceGroups.Women[0]
  );

  const [selectedExpert, setSelectedExpert] = useState(
    expertGroups.Women[0]
  );

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

  /* AVAILABLE SERVICES */

  const availableServices = serviceGroups[selectedGender];

  /* AVAILABLE EXPERTS */

  const availableExperts = useMemo(() => {
    return expertGroups[selectedGender].filter((expert) =>
      expert.services.includes(selectedService.id)
    );
  }, [selectedGender, selectedService]);

  /* CALENDAR */

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
      ...Array.from({ length: totalDays }, (_, index) => index + 1),
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

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const dateDay = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${dateDay}`;
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

  /* CATEGORY CHANGE */

  const changeGender = (gender) => {
    setSelectedGender(gender);
    setSelectedService(serviceGroups[gender][0]);
    setSelectedExpert(expertGroups[gender][0]);
    setSelectedDate("");
    setSelectedTime("");
  };

  /* SERVICE CHANGE */

  const changeService = (service) => {
    setSelectedService(service);

    const matchingExperts = expertGroups[selectedGender].filter(
      (expert) => expert.services.includes(service.id)
    );

    setSelectedExpert(matchingExperts[0] || null);
  };

  /* FORM UPDATE */

  const updateForm = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* SUBMIT BOOKING */

  const handleBooking = (event) => {
    event.preventDefault();

    if (!selectedService) {
      alert("Please select a service.");
      return;
    }

    if (!selectedExpert) {
      alert("No expert is currently assigned to this service.");
      return;
    }

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

  /* RESET BOOKING */

  const resetBooking = () => {
    setSubmitted(false);

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    setSelectedDate("");
    setSelectedTime("");
  };

  /* =========================================
     RENDER
  ========================================= */

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
            <em> AURELLE Experience</em>
          </h1>

          <p>
            Choose your preferred service, expert and appointment
            time. Enjoy a personalised luxury salon experience.
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
                <small>Professional care</small>
              </span>
            </div>

            <div>
              <ShieldCheck />
              <span>
                <strong>Personalised Care</strong>
                <small>Made around you</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CONTENT */}

      <section className="booking-main">

        <form
          className="booking-form-card"
          onSubmit={handleBooking}
        >

          {/* CATEGORY SELECTION */}

          <div className="booking-step">
            <div className="booking-step-heading">
              <div className="step-title">
                <span className="step-number">1</span>
                <h2>Choose Your Category</h2>
              </div>

              <p>Select the services you are looking for.</p>
            </div>

            <div className="booking-gender-selection">

              <button
                type="button"
                className={
                  selectedGender === "Men"
                    ? "booking-gender-option active"
                    : "booking-gender-option"
                }
                onClick={() => changeGender("Men")}
              >
                <User size={22} />

                <span>
                  <strong>Men</strong>
                  <small>Men's Services</small>
                </span>

                {selectedGender === "Men" && (
                  <Check className="gender-check" size={18} />
                )}
              </button>

              <button
                type="button"
                className={
                  selectedGender === "Women"
                    ? "booking-gender-option active"
                    : "booking-gender-option"
                }
                onClick={() => changeGender("Women")}
              >
                <Flower2 size={22} />

                <span>
                  <strong>Women</strong>
                  <small>Women's Services</small>
                </span>

                {selectedGender === "Women" && (
                  <Check className="gender-check" size={18} />
                )}
              </button>

            </div>
          </div>

          {/* SERVICE SELECTION */}

          <div className="booking-step">
            <div className="booking-step-heading">
              <div className="step-title">
                <span className="step-number">2</span>
                <h2>Select a Service</h2>
              </div>

              <p>
                Explore {selectedGender.toLowerCase()}'s services.
              </p>
            </div>

            <div className="service-selection">

              {availableServices.map((service) => (
                <button
                  type="button"
                  key={service.id}
                  className={`service-option ${
                    selectedService.id === service.id ? "active" : ""
                  }`}
                  onClick={() => changeService(service)}
                >
                  <div className="service-option-image">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                    />

                    {selectedService.id === service.id && (
                      <span className="selection-check">
                        <Check size={15} />
                      </span>
                    )}
                  </div>

                  <strong>{service.name}</strong>

                  <small className="service-option-description">
                    {service.description}
                  </small>
                </button>
              ))}

            </div>
          </div>

          {/* EXPERT SELECTION */}

          <div className="booking-step">
            <div className="booking-step-heading">
              <div className="step-title">
                <span className="step-number">3</span>
                <h2>Choose Your Expert</h2>
              </div>

              <p>
                Select your preferred {selectedGender.toLowerCase()}'s
                service professional.
              </p>
            </div>

            <div className="expert-selection">

              {availableExperts.map((expert) => (
                <button
                  type="button"
                  key={expert.id}
                  className={`expert-option ${
                    selectedExpert?.id === expert.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedExpert(expert)}
                >
                  <div className="expert-image">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      loading="lazy"
                    />

                    {selectedExpert?.id === expert.id && (
                      <span className="selection-check">
                        <Check size={14} />
                      </span>
                    )}
                  </div>

                  <strong>{expert.name}</strong>
                  <small>{expert.role}</small>
                </button>
              ))}

              {availableExperts.length === 0 && (
                <p className="expert-unavailable">
                  No expert is currently assigned to this service.
                  Please contact our team.
                </p>
              )}

            </div>
          </div>

          {/* DATE AND TIME */}

          <div className="booking-step">
            <div className="booking-step-heading">
              <div className="step-title">
                <span className="step-number">4</span>
                <h2>Select Date and Time</h2>
              </div>

              <p>Choose a convenient appointment slot.</p>
            </div>

            <div className="date-time-layout">

              <div className="booking-calendar">
                <div className="calendar-header">

                  <button
                    type="button"
                    onClick={() => changeMonth(-1)}
                    disabled={
                      monthDate.getFullYear() === today.getFullYear() &&
                      monthDate.getMonth() === today.getMonth()
                    }
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

                    const currentDay = new Date(
                      monthDate.getFullYear(),
                      monthDate.getMonth(),
                      day
                    );

                    const isPast = currentDay < today;

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
                      className={
                        selectedTime === time ? "selected" : ""
                      }
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
                <span className="step-number">5</span>
                <h2>Your Details</h2>
              </div>

              <p>Share your details for the appointment request.</p>
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
            Confirm Appointment
            <ArrowRight size={18} />
          </button>

        </form>

        {/* BOOKING SUMMARY */}

        <aside className="booking-summary">

          <h2>Booking Summary</h2>

          <div className="summary-divider" />

          <div className="summary-item">
            <span className="summary-icon">
              <UserRound />
            </span>

            <div>
              <small>Category</small>
              <strong>{selectedGender}'s Services</strong>
            </div>
          </div>

          <div className="summary-item">
            <span className="summary-icon">
              <Scissors />
            </span>

            <div>
              <small>Service</small>
              <strong>{selectedService.name}</strong>
            </div>
          </div>

          <div className="summary-item">
            <span className="summary-icon">
              <UserRound />
            </span>

            <div>
              <small>Expert</small>
              <strong>
                {selectedExpert?.name || "Not assigned"}
              </strong>
            </div>
          </div>

          <div className="summary-item">
            <span className="summary-icon">
              <CalendarDays />
            </span>

            <div>
              <small>Date</small>

              <strong>
                {selectedDate
                  ? new Date(
                      `${selectedDate}T00:00:00`
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "Not selected"}
              </strong>
            </div>
          </div>

          <div className="summary-item">
            <span className="summary-icon">
              <Clock3 />
            </span>

            <div>
              <small>Time</small>
              <strong>{selectedTime || "Not selected"}</strong>
            </div>
          </div>

          <div className="summary-divider" />

          <div className="summary-total">
            <strong>Estimated Price</strong>
            <b>On Consultation</b>
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
            Confirm Appointment
            <ArrowRight size={19} />
          </button>

          <p className="secure-note">
            <LockKeyhole size={14} />
            Your information is safe and secure.
          </p>

          <div className="summary-divider" />

          <div className="booking-help">
            <span className="help-icon">
              <Headset />
            </span>

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
            <Phone size={16} />
            Call Now
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

            <span className="success-icon">
              <Check size={30} />
            </span>

            <h2>Thank You, {form.name}!</h2>

            <p>
              Your appointment request has been prepared.
              Our team will contact you to confirm availability.
            </p>

            <div className="success-details">

              <strong>{selectedGender}'s Services</strong>

              <strong>{selectedService.name}</strong>

              <span>{selectedExpert?.name}</span>

              <span>
                {selectedDate} at {selectedTime}
              </span>

              <b>Price on Consultation</b>

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
