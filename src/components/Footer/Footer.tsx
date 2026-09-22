import { Contact } from "../Contact/Contact";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer section" id="contact">
      <div className="section__inner footer__inner">
        <h2 className="section__title">Contact</h2>
        <p className="footer__lead">
          Want to collaborate or chat about a role? Reach out anytime.
        </p>
        <Contact />
      </div>
    </footer>
  );
}
