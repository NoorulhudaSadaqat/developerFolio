import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [selectedProject, setSelectedProject] = React.useState(null);

  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  const defaultImage = require("../../assets/images/defaultProject.png");

  if (!bigProjects.display) return null;

  return (
    <>
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="projects">
          <div>
            <h1 className="skills-heading">{bigProjects.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {bigProjects.subtitle}
            </p>

            <div className="projects-container">
              {bigProjects.projects.map((project, i) => {
                return (
                  <div
                    key={i}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
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
                      <h5
                        className={
                          isDark ? "dark-mode card-title" : "card-title"
                        }
                      >
                        {project.projectName}
                      </h5>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>

                      <div className="project-card-footer">
                        {project.footerLink?.map((link, index) => (
                          <span
                            key={index}
                            className={
                              isDark ? "dark-mode project-tag" : "project-tag"
                            }
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        ))}

                        <span
                          className={
                            isDark ? "dark-mode project-tag" : "project-tag"
                          }
                          onClick={() => setSelectedProject(project)}
                        >
                          My role
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
      {selectedProject && (
        <div
          className={`modal-overlay ${isDark ? "modal-overlay-dark" : ""}`}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`modal-content ${isDark ? "modal-content-dark" : ""}`}
            onClick={e => e.stopPropagation()}
          >
            <h3 className="modal-title">{selectedProject.projectName}</h3>
            <p className="modal-desc">{selectedProject.projectDesc}</p>

            {selectedProject.projectDetails && (
              <>
                <h4 className="modal-subheading">What I did:</h4>
                <ul className="modal-list">
                  {selectedProject.projectDetails.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}

            {selectedProject.techStack && (
              <>
                <h4 className="modal-subheading">Tech Stack:</h4>
                <div className="tech-stack-list">
                  {selectedProject.techStack?.map((tech, index) => (
                    <span key={index} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}

            <div className="project-card-footer" style={{marginTop: "1.5rem"}}>
              <span
                className={isDark ? "dark-mode project-tag" : "project-tag"}
                onClick={() => setSelectedProject(null)}
              >
                Close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
