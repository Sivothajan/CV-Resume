import ContactInfo from "./components/ContactInfo.jsx";
import Summary from "./components/Summary.jsx";
import Education from "./components/Education.jsx";
import TechnicalSkills from "./components/TechnicalSkills.jsx";
import ExtraCurricular from "./components/ExtraCurricular.jsx";
import Certifications from "./components/Certifications.jsx";
import Hackathons from "./components/Hackathons.jsx";
import Publications from "./components/Publications.jsx";
import Refrences from "./components/Refrences.jsx";
import CVVersion from "./components/CVVersion.jsx";

import './App.css';

function App() {
  return (
    <>
    <div class="container">
      <ContactInfo />
      <Summary />
      <Education />
      <TechnicalSkills />
      <ExtraCurricular />
      <Certifications />
      <Hackathons />
      <Publications />
      <Refrences />
      <CVVersion />
    </div>
    </>
  );
}

export default App;
