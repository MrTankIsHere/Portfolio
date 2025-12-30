import '../styles/education.css';

const Education = ({ education }) => {
    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2 className="title">Education</h2>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <div className="edu-level">{edu.level}</div>
                            <h3 className="institution">{edu.institution}</h3>
                            {edu.field && <div className="field">{edu.field}</div>}
                            <div className="edu-details">
                                {edu.percentage && <div className="score">Percentage: {edu.percentage}</div>}
                                {edu.cgpa && <div className="score">CGPA: {edu.cgpa}</div>}
                                <div className="date">{edu.completion_date || edu.status}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
