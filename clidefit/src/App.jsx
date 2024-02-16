import Router from "./routes/Router.jsx";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>
      <Router />
      <CookieConsent
        location="bottom"
        cookieName="ClidefitCookies"
        style={{ background: "#14B8A6" }}
        buttonText="Acepto"
        declineButtonText="No, gracias"
        buttonStyle={{
          background: "#1E3A8A",
          color: "#FFFFFF",
          fontWeight: "bold",
          borderRadius: "20px",
          padding: "8px 12px",
        }}
        declineButtonStyle={{ background: "#14B8A6", color: "#FFFFFF" }}
        enableDeclineButton
        expires={150}
      >
        En nuestra web utilizamos cookies propias y de terceros para mejorar
        nuestros servicios y experiencia de navegación. Al hacer clic en
        &quot;Aceptar&quot;, aceptas el uso de todas las cookies. <br />
        Puedes leer más sobre nuestra política de cookies{" "}
        <a
          href="/politica-cookies"
          className="font-semibold underline underline-offset-4"
        >
          aquí
        </a>
        .
      </CookieConsent>
    </>
  );
}

export default App;
