import { useEffect, useState } from 'react';
import resumeData from './data/resume.json';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Learning from './sections/Learning';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setData(resumeData);
    setLoaded(true);
  }, []);

  if (!loaded) return <div className="loading">Loading...</div>;

  return (
    <div className="app">
      <Header />
      <main>
        <Hero data={data.personal_info} />
        <About
          personal_info={data.personal_info}
          summary={data.summary}
        />
        <Education education={data.education} />
        <Learning
          certifications={data.certifications}
          workshops={data.workshops_and_events}
        />
        <Skills
          technical={data.technical_skills}
          soft={data.soft_skills}
          languages={data.languages}
          interests={data.interests}
        />
      </main>
      <Contact
        email={data.personal_info.email}
        phone={data.personal_info.phone}
      />
    </div>
  );
}

export default App;
