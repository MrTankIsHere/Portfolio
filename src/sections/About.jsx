import '../styles/about.css';

const About = ({ personal_info, summary }) => {
    const { address, phone, email } = personal_info;

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="lead">{summary}</p>

                        <div className="contact-info">
                            <div className="info-item">
                                <span className="label">Address:</span>
                                <span>{address}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Email:</span>
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                            <div className="info-item">
                                <span className="label">Phone:</span>
                                <span>{phone}</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-visual">
                        <div className="visual-box"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
