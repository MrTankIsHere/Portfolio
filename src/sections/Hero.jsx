import '../styles/hero.css';

const Hero = ({ data }) => {
    const { full_name, status, email } = data;

    return (
        <section id="hero" className="section hero-section">
            <div className="container hero-content">
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name">{full_name}</h1>
                <h3 className="role">{status === 'Fresher' ? 'Computer Engineering Student' : status}</h3>

                <div className="cta-container">
                    <a href={`mailto:${email}`} className="cta-btn primary">
                        Get In Touch
                    </a>
                    <a href="#about" className="cta-btn secondary">
                        Learn More
                    </a>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
