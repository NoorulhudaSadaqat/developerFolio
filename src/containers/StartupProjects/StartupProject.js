import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  const defaultImage = require("../../assets/images/defaultProject.png");

  if (!bigProjects.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark ? "dark-mode project-card project-card-dark" : "project-card project-card-light"
                  }
                >
                  <div className="project-image">
                    <img
                      src={project.image || defaultImage}
                      alt={project.projectName}
                      className="card-image"
                    />
                  </div>

                  <div className="project-detail">
                    <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                      {project.projectName}
                    </h5>

                    <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                      {project.projectDesc}
                    </p>

                    {project.projectDetails && (
                      <ul className="project-details-list">
                        {project.projectDetails.map((point, index) => (
                          <li key={index} className={isDark ? "dark-mode detail-point" : "detail-point"}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {project.techStack && (
                      <div className="tech-stack">
                        <strong className={isDark ? "dark-mode" : ""}>Tech Stack: </strong>
                        {project.techStack.join(", ")}
                      </div>
                    )}

                    {project.footerLink && (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, index) => (
                          <span
                            key={index}
                            className={isDark ? "dark-mode project-tag" : "project-tag"}
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
