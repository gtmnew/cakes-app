import { useState, useRef } from "react";
import { BsMailboxFlag } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const emailRef = useRef(null);

  const handleEmailCopy = () => {
    const email = emailRef.current.textContent;
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    emailRef.current.classList.add("copied");

    setTimeout(() => {
      setEmailCopied(false);
      emailRef.current.classList.remove("copied");
    }, 2000);
  };

  return (
    <section className="contact-container">
      <div className="section-title">
        <p className="primary-subheading">Contato</p>
        <h2 className="primary-text">
          Tem uma pergunta em mente? <br />
          Estamos prontos para ajudar você!
        </h2>
      </div>
      <div className="contact__container">
        <div className="EmailIcon">
          <BsMailboxFlag />
        </div>
        <h3>Mande-me um email!</h3>
        <div className="EmailCopy" onClick={handleEmailCopy}>
          <span ref={emailRef}>naaty.mooura@hotmail.com</span>
        </div>
        <div className="email-btn">
          <button>
            {emailCopied ? "Email copiado!" : "Clique no email para copiá-lo"}
          </button>
        </div>
      </div>
      <div className="container-phone">
        <div className="phone-icon">
          <FaWhatsapp />
        </div>
        <div className="phone">
          <span>(11) 97453-3388</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
