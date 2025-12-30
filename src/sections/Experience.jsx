import '../styles/experience.css';

const Experience = ({ work }) => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="title">Experience</h2>
                <div className="timeline">
                    {work.map((job, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="job-header">
                                    <h3 className="position">{job.position}</h3>
                                    <span className="company">
                                        @ <a href={job.url} target="_blank" rel="noopener noreferrer">{job.name}</a>
                                    </span>
                                </div>
                                <div className="job-duration">
                                    {job.startDate} — {job.endDate}
                                </div>
                                <p className="job-summary">{job.summary}</p>
                                <ul className="job-highlights">
                                    {job.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
