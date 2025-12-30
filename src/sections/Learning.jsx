import '../styles/learning.css';

const Learning = ({ certifications, workshops }) => {
    return (
        <section id="certifications" className="section learning-section">
            <div className="container">

                <div className="learning-group">
                    <h2 className="title">Certifications</h2>
                    <div className="cert-list">
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-item">
                                <div className="cert-icon">📜</div>
                                <div className="cert-info">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <div className="cert-org">{cert.organization}</div>
                                </div>
                                <div className="cert-date">{cert.date}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="learning-group">
                    <h2 className="title">Workshops & Events</h2>
                    <div className="workshop-grid">
                        {workshops.map((workshop, index) => (
                            <div key={index} className="workshop-card">
                                <h3 className="workshop-title">{workshop.title}</h3>
                                {workshop.organized_by && <div className="workshop-org">By: {workshop.organized_by}</div>}
                                <div className="workshop-date">{workshop.date}</div>
                                <p className="workshop-desc">{workshop.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Learning;
