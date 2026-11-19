
import { FaWhatsapp } from "react-icons/fa";
import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {

  // Replace with actual salon WhatsApp number
  const phoneNumber = "91XXXXXXXXXX";

  const message = encodeURIComponent(
    "Hello AURELLE Beauty Studio! I would like to know more about your beauty services and appointments."
  );

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="aurelle-whatsapp-widget">

      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="aurelle-whatsapp-button"
        aria-label="Chat with AURELLE on WhatsApp"
      >
        <span className="aurelle-whatsapp-pulse"></span>

        <FaWhatsapp className="aurelle-whatsapp-icon" />

      </a>

      <div className="aurelle-whatsapp-tooltip">
        <MessageCircle size={15} />
        <span>CHAT WITH US</span>
      </div>

    </div>
  );
};

export default WhatsAppButton;
