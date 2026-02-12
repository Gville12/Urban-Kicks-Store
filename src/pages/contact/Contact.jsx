
import Map from "../../components/map/Map";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-header">
        <h1 className="contact-title">Visit our concept store or reach out online.</h1>
        <p className="contact-subtitle">
          Have questions about sizing, orders, or upcoming drops? Use the form or find us in our
          Gran Canaria concept store.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <div className="contact-block">
            <h2 className="contact-block-title">Store location</h2>
            <p className="contact-text">UrbanKicks Concept Store</p>
            <p className="contact-text">Calle Triana 45</p>
            <p className="contact-text">35001 · Las Palmas de Gran Canaria, Spain</p>

            <div className="contact-hours">
              <p className="contact-text">
                <strong>Opening hours</strong>
              </p>
              <p className="contact-text">Mon–Fri: 10:00 – 20:00</p>
              <p className="contact-text">Sat: 11:00 – 19:00</p>
            </div>
          </div>

          <div className="contact-block">
            <h2 className="contact-block-title">Contact details</h2>
            <p className="contact-text">Email: support@urbankicks.demo</p>
            <p className="contact-text">Phone: +34 600 123 456</p>
          </div>

          <div className="contact-map-wrapper">
            <Map />
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2 className="contact-form-title">Send us a message</h2>
          <p className="contact-form-text">
            Share your question and we will reply within one business day. This form is for demo
            purposes only; no data is actually submitted.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-field">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input className="form-input" id="name" type="text" placeholder="Your name" />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="subject">
                Subject
              </label>
              <input
                className="form-input"
                id="subject"
                type="text"
                placeholder="Sizing, orders, store visit..."
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-textarea"
                id="message"
                rows="4"
                placeholder="Tell us how we can help you."
              ></textarea>
            </div>

            <button type="submit" className="form-submit-button">
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;

