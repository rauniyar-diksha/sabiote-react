import React from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';
import wavecontact from '../../images/contact.svg';

const ContactusPage = () => {
  return (
    <div className="contact-us-section contact-us-section-custom">
      <Helmet>
        <title>Contact | Sabiote</title>
      </Helmet>
      <div className="contact-us-row">
        <div className="contact-us-column">
          <div className="contact-us-text">
            <h1>Contact Us</h1>
          </div>
          <div className="contact-us-bottom-divider contact-us-bottom-divider-custom" style={{ '--wavecontact': `url(${wavecontact})` }}></div>
        </div>
      </div>

      <div className="contact-us-row-second">
        <div className="contact-us-column">
          <div className="contact-us-form">
            <form className="contact-form" method="post" action="https://sabiote.in/contact/">
              <p className="contact-field" data-id="name" data-type="input">
                <input type="text" id="contact_name" className="input" name="contact_name" placeholder="Name" />
              </p>
              <p className="contact-field" data-id="email" data-type="email">
                <input type="text" id="contact_email" className="input" name="contact_email" placeholder="Email Address" />
              </p>
              <p className="contact-field" data-id="message" data-type="text">
                <textarea name="contact_message" id="contact_message" className="message" placeholder="Message" spellCheck="false"></textarea>
              </p>
              <input type="hidden" value="contact_process" name="contactform_submit" />
              <div className="contact-submit">
                <button type="submit" className="submit-button">Submit</button>
              </div>
              <input type="hidden" name="_wp_http_referer" value="/contact/" />
            </form>
          </div>
        </div>
        <div className="contact-us-column">
          <div className="contact-info">
            <div className="contact-info-item">
              <h4>Call Us</h4>
              <p>+91 – 987 335 6077</p>
            </div>
            <div className="contact-info-item">
              <h4>Hours</h4>
              <p>Mon-Friday<br />8am to 5pm</p>
            </div>
            <div className="contact-info-item">
              <h4>Factory Addresses</h4>
              <p>CORPORATE OFFICE: B-23, FIRST FLOOR, DDA SHED, OKHLA INDUSTRIAL AREA, PHASE 2. NEW DELHI-110020</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-row-third">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.367575125576!2d77.26967641048068!3d28.528669375620346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce15baccb7905%3A0x5482910020112402!2sCrowne%20Plaza%20New%20Delhi%20Okhla%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2snp!4v1718876969440!5m2!1sen!2snp" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactusPage;
