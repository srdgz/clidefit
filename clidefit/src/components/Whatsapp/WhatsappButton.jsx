import "./WhatsappButton.css";
import whatsappIcon from "../../assets/whatsapp.png";

const WhatsAppButton = () => {
  const phoneNumber = "+34623537891";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const openWhatsApp = () => {
    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${phoneNumber}`;
    } else {
      window.open(
        `https://web.whatsapp.com/send?phone=${phoneNumber}`,
        "_blank"
      );
    }
  };

  return (
    <button onClick={openWhatsApp} className="whatsapp-button">
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </button>
  );
};

export default WhatsAppButton;
