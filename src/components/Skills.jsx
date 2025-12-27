import EducationIcon from "../images/EducationIcon.png";
import ExperienceIcon from "../images/ExperienceIcon.png";
import SkillsIcon from "../images/SkillsIcon.png";

import "../CSS/skills.css"

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills-section">
        <span className="skills-header">SKILLS & EXPERIENCE</span>

         <div className="skills-icons">
          <img src={EducationIcon} className="skills-icon" />
          <img src={ExperienceIcon} className="skills-icon" />
          <img src={SkillsIcon} className="skills-icon" />
         </div>

        <div className="skills-container">
          <div className="skills-list-container">
            <span className="skills-list-header">Education & Courses</span>

            <ul className="skills-list">
              <li>
                <span className="skill-highlight">
                  Bachelor's degree of computer science
                </span>{" "}
                - Al-Balqa Applied University (2022 - 2026)
              </li>
              <li>
                <span className="skill-highlight">Scrimba</span> - Learn React
                JS course (2025){" "}
              </li>
              <li>
                <span className="skill-highlight">Udemy Inc</span> - Asp.Net
                Core 10 (Ongoing)
              </li>
            </ul>
          </div>
          <div className="skills-list-container">
            <span className="skills-list-header">Experience</span>
            <ul className="skills-list">
              <li>
                <span className="skill-highlight">Extensya Solutions</span> -
                Customer service representative (January 2025 - May 2025)
              </li>
              <li>
                Experienced in building responsive front-end pages through
                various projects. (2024 - Current)
              </li>
            </ul>
          </div>
          <div className="skills-list-container">
            <span className="skills-list-header">Skills</span>
            <ul className="skills-list">
              <li>
                <span className="skill-highlight">Technical:</span> React js,
                JavaScript, HTML, CSS, Java, C#, C++, Python
              </li>
              <li>
                <span className="skill-highlight">Soft:</span> Problem-solving &
                critical thinking, attension to detail, Time management &
                organization
              </li>
              <li>
                <span className="skill-highlight">Creative & Design:</span>{" "}
                Adobe Photoshop
              </li>
              <li>
                <span className="skill-highlight">Other:</span> Micrsoft office,
                Google suite
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
