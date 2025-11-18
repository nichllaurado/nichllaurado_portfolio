function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          GitHub
        </a>
        <a href="mailto:youremail@example.com" className="btn btn-outline">
          Email Me
        </a>
      </div>
    </section>
  );
}

export default Contact;
