import '../styles/skills.css';

const Skills = ({ technical, soft, languages, interests }) => {
    const SkillCategory = ({ title, items }) => (
        <div className="skill-category">
            <h3 className="skill-category-title">{title}</h3>
            <div className="skill-list">
                {items.map((item, idx) => (
                    <div key={idx} className="skill-item">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="title">Skills & Interests</h2>
                <div className="skills-grid">
                    <SkillCategory title="Technical Skills" items={technical} />
                    <SkillCategory title="Soft Skills" items={soft} />
                    <SkillCategory title="Languages" items={languages} />
                    <SkillCategory title="Interests" items={interests} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
