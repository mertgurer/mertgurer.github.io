import "../styles/skill.css";
import { SkillField } from "./SkillField";
import cvFile from "../assets/cv.pdf";

const technicalSkills = [
  "C",
  "C++",
  "Java",
  "Linux",
  "Python",
  "Excel",
  "Flutter",
  "Dart",
  "Swift",
  "Arduino and Boards",
  "Html",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
];

const softSkills = [
  "Team Collaborator",
  "Like to teach and eager to learn",
  "Good communication skills",
  "Self-sustained",
  "Hard working",
];

const hobbySkills = [
  "Tennis",
  "Ski",
  "Swimming",
  "Table Tennis",
  "Wind Surf",
  "Legos",
  "Video Games",
];

export const Skill = () => {
  return (
    <section className="skill" id="skill">
      <h1 className="skill-header">My Skills</h1>
      <div className="skill-fields">
        <SkillField title="Technical Skills" skills={technicalSkills} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SkillField title="Soft Skills" skills={softSkills} />
          <SkillField title="Hobby Skills" skills={hobbySkills} />
        </div>
      </div>
      <div className="skill-cv enterFromLeft">
        For more information check out my resume from here
        <a href={cvFile} download="Mert Gürer cv.pdf">
          <button className="skill-cv-button">Download</button>
        </a>
      </div>
    </section>
  );
};
