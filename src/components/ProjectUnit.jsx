import React from "react";
import GitHubIcon from "../Icons/github-light.svg";

export default function ProjectUnit(props) {
  return (
    <div className="project-card">
      <img src={props.img.src} alt={props.img.alt} className="project-image" />

      <h3 className="project-title">{props.title}</h3>
      <span className="date">{props.date}</span>
      <p className="project-description">{props.description}</p>

      <div className="project-technologies">
        {props.technologies.map((tech, index) => (
          <img
            key={index}
            src={tech.icon}
            alt={tech.name}
            title={tech.name}
            className="tech-icon"
          />
        ))}
      </div>

      <div className="project-links">
        {props.githubLink && (
          <a href={props.githubLink} target="_blank" className="github-link">
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}
