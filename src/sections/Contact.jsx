import '../styles/contact.css';

const Contact = ({ email, phone }) => {
    return (
        <footer id="contact" className="section contact-section">
            <div className="container contact-content">
                <h2 className="contact-title">Let's Connect</h2>
                <p className="contact-text">
                    I am available for new opportunities. Feel free to reach out via email or phone.
                </p>

                <div className="contact-actions">
                    <a href={`mailto:${email}`} className="contact-btn">
                        {email}
                    </a>
                    <div className="contact-detail">
                        📞 {phone}
                    </div>
                </div>

                <div className="copyright">
                    <p>© {new Date().getFullYear()} Bhautik A. Tank. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
