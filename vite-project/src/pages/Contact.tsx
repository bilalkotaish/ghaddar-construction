import ContactForm from '../components/ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-description">
                        Get in touch with us for a free consultation and quote
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <p className="contact-intro">
                                Have a project in mind? We'd love to hear from you. Fill out the form or
                                reach out to us using the contact information below.
                            </p>

                            <div className="contact-details">
                                <div className="contact-detail-item">
                                    <div className="contact-detail-icon">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+961 70 444 106</p>

                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="contact-detail-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>ghaddarcontracting@gmail.com</p>

                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="contact-detail-icon">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4>Address</h4>
                                        <p>Al Ghazieh</p>
                                        <p>South Lebanon, Lebanon</p>
                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="contact-detail-icon">
                                        <FaClock />
                                    </div>
                                    <div>
                                        <h4>Business Hours</h4>
                                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                                        <p>Saturday: 8:00 AM - 4:00 PM</p>
                                        <p>Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <h2>Send Us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
