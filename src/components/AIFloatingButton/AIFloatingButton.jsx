
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  X,
  Send,
  Bot,
  CalendarDays,
  Scissors,
  ArrowUpRight,
} from "lucide-react";

import "./AIFloatingButton.css";

const AIFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "assistant",
      text: "Welcome to AURELLE. I am your beauty assistant. How may I help you today?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: message.trim(),
      },
      {
        type: "assistant",
        text: "Thank you for reaching out. Our beauty team will be happy to help you. You can explore our services or book an appointment.",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="aurelle-ai-widget">

      {/* CHAT WINDOW */}
      <div
        className={`aurelle-ai-panel ${
          isOpen ? "ai-panel-open" : ""
        }`}
        aria-hidden={!isOpen}
      >

        {/* HEADER */}
        <div className="aurelle-ai-header">

          <div className="aurelle-ai-header-info">
            <div className="aurelle-ai-avatar">
              <Sparkles size={20} />
            </div>

            <div>
              <h3>AURELLE AI</h3>
              <span>
                <i className="ai-status-dot"></i>
                BEAUTY ASSISTANT
              </span>
            </div>
          </div>

          <button
            className="aurelle-ai-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close assistant"
          >
            <X size={21} />
          </button>

        </div>

        {/* CHAT BODY */}
        <div className="aurelle-ai-body">

          <div className="aurelle-ai-intro">
            <div className="aurelle-ai-welcome-icon">
              <Sparkles size={25} />
            </div>

            <h4>Beauty begins with you.</h4>

            <p>
              Discover your perfect beauty experience
              with AURELLE.
            </p>
          </div>

          <div className="aurelle-ai-messages">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`aurelle-chat-message ${
                  item.type === "user"
                    ? "user-message"
                    : "assistant-message"
                }`}
              >
                {item.type === "assistant" && (
                  <div className="aurelle-message-avatar">
                    <Bot size={15} />
                  </div>
                )}

                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* QUICK ACTIONS */}
          <div className="aurelle-ai-quick-actions">
            <span>EXPLORE AURELLE</span>

            <Link to="/services" onClick={() => setIsOpen(false)}>
              <Scissors size={16} />
              Explore Services
              <ArrowUpRight size={15} />
            </Link>

            <Link to="/booking" onClick={() => setIsOpen(false)}>
              <CalendarDays size={16} />
              Book Appointment
              <ArrowUpRight size={15} />
            </Link>
          </div>

        </div>

        {/* MESSAGE INPUT */}
        <form
          className="aurelle-ai-input-area"
          onSubmit={handleSend}
        >
          <input
            type="text"
            placeholder="Ask about our beauty services..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Your message"
          />

          <button
            type="submit"
            disabled={!message.trim()}
            aria-label="Send message"
          >
            <Send size={17} />
          </button>
        </form>

        <div className="aurelle-ai-footer-note">
          POWERED BY AURELLE BEAUTY STUDIO
        </div>

      </div>

      {/* FLOATING BUTTON */}
      <button
        className={`aurelle-ai-floating ${
          isOpen ? "ai-button-active" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
      >
        <span className="aurelle-ai-pulse"></span>

        <span className="aurelle-ai-button-icon">
          {isOpen ? (
            <X size={25} />
          ) : (
            <Sparkles size={25} />
          )}
        </span>
      </button>

      {!isOpen && (
        <div className="aurelle-ai-tooltip">
          ASK AURELLE
        </div>
      )}

    </div>
  );
};

export default AIFloatingButton;
