import "../CSS/contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <footer id="contact" className="contact-section">
        <div className="links-list-container">
          <ul className="links-list">
            <li>FIND ME ON</li>
            <li>
              <a href="https://www.linkedin.com/in/mohammad-shararah-a123b3342/">
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Mohammad-Shararah">
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <div className="contact-list">
                <a>
                  <FaWhatsapp size={20} />
                  <span>WhatsApp: +962 789160839</span>
                </a>
                <a>
                  <MdEmail size={20} />
                  <span>E-mail: Muhammadshararah33@gmail.com</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form">
          <span className="form-header">LET'S CONNECT!</span>
          <div className="form-sender-info">
            <input placeholder="NAME" className="form-username" type="text" />
            <input placeholder="EMAIL" className="form-email" type="text" />
          </div>
          <input placeholder="SUBJECT" className="form-subject" type="text" />
          <textarea placeholder="WRITE YOUR MESSAGE HERE"></textarea>
          <button type="submit">Send</button>
        </form>
      </footer>
    </>
  );
}
