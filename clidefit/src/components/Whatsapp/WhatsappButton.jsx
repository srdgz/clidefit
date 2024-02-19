import "./WhatsappButton.css";
import whatsapp from "../../assets/whatsapp.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://web.whatsapp.com/send?phone=+34623537891"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src={whatsapp} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
